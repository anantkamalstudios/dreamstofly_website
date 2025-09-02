// Generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Format price for display
export const formatPrice = (price) => {
  if (typeof price === "string") {
    return price;
  }

  if (typeof price === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  return "Contact for pricing";
};

// Get service category color
export const getCategoryColor = (category) => {
  const colorMap = {
    Travel: "blue",
    Immigration: "green",
    Housing: "purple",
    Transport: "orange",
    Finance: "emerald",
    Insurance: "cyan",
    Education: "indigo",
    Career: "rose",
    Legal: "amber",
    Food: "lime",
    Community: "violet",
    Support: "slate",
  };

  return colorMap[category] || "gray";
};

// Get service category icon
export const getCategoryIcon = (category) => {
  const iconMap = {
    Travel: "✈️",
    Immigration: "🛂",
    Housing: "🏠",
    Transport: "🚗",
    Finance: "💰",
    Insurance: "🛡️",
    Education: "🎓",
    Career: "💼",
    Legal: "⚖️",
    Food: "🍽️",
    Community: "👥",
    Support: "🆘",
  };

  return iconMap[category] || "📋";
};

// Filter services by multiple criteria
export const filterServices = (services, filters = {}) => {
  return services.filter((service) => {
    // Category filter
    if (filters.category && service.category !== filters.category) {
      return false;
    }

    // Featured filter
    if (
      filters.featured !== undefined &&
      service.featured !== filters.featured
    ) {
      return false;
    }

    // Price range filter
    if (filters.minPrice || filters.maxPrice) {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, ""));
      if (filters.minPrice && price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && price > filters.maxPrice) {
        return false;
      }
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchableText =
        `${service.title} ${service.desc} ${service.category}`.toLowerCase();
      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
};

// Sort services
export const sortServices = (services, sortBy = "name", sortOrder = "asc") => {
  const sorted = [...services];

  sorted.sort((a, b) => {
    let aValue, bValue;

    switch (sortBy) {
      case "price":
        aValue = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        bValue = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        break;
      case "category":
        aValue = a.category.toLowerCase();
        bValue = b.category.toLowerCase();
        break;
      case "featured":
        aValue = a.featured ? 1 : 0;
        bValue = b.featured ? 1 : 0;
        break;
      default:
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
    }

    if (sortOrder === "desc") {
      return bValue > aValue ? 1 : -1;
    }

    return aValue > bValue ? 1 : -1;
  });

  return sorted;
};

// Get service statistics
export const getServiceStats = (services) => {
  const stats = {
    total: services.length,
    categories: {},
    featured: 0,
    priceRanges: {
      "Under $50": 0,
      "$50-$100": 0,
      "$100-$200": 0,
      "$200-$500": 0,
      "Above $500": 0,
    },
  };

  services.forEach((service) => {
    // Count by category
    stats.categories[service.category] =
      (stats.categories[service.category] || 0) + 1;

    // Count featured services
    if (service.featured) {
      stats.featured++;
    }

    // Count by price range
    const price = parseFloat(service.price.replace(/[^0-9.]/g, "")) || 0;
    if (price < 50) stats.priceRanges["Under $50"]++;
    else if (price < 100) stats.priceRanges["$50-$100"]++;
    else if (price < 200) stats.priceRanges["$100-$200"]++;
    else if (price < 500) stats.priceRanges["$200-$500"]++;
    else stats.priceRanges["Above $500"]++;
  });

  return stats;
};

// Validate service data
export const validateServiceData = (service) => {
  const errors = [];

  if (!service.title || service.title.trim() === "") {
    errors.push("Title is required");
  }

  if (!service.desc || service.desc.trim() === "") {
    errors.push("Description is required");
  }

  if (!service.img || service.img.trim() === "") {
    errors.push("Image is required");
  }

  if (!service.category || service.category.trim() === "") {
    errors.push("Category is required");
  }

  if (!service.slug || service.slug.trim() === "") {
    errors.push("Slug is required");
  }

  return errors;
};

// Generate meta description for SEO
export const generateMetaDescription = (service) => {
  const maxLength = 160;
  let description = `${service.title} - ${service.desc}`;

  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + "...";
  }

  return description;
};

// Get related services
export const getRelatedServices = (currentService, allServices, limit = 3) => {
  return allServices
    .filter(
      (service) =>
        service.id !== currentService.id &&
        (service.category === currentService.category ||
          service.featured === currentService.featured)
    )
    .slice(0, limit);
};
