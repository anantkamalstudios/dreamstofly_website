# Service Detail Pages System

## Overview

This system provides a dynamic, scalable solution for creating individual service detail pages with unique forms for each of the 21 services. Each service gets its own page with a custom form, detailed information, and consistent UI/UX.

## Architecture

### File Structure

```
src/
├── component/
│   ├── pages/
│   │   ├── services/
│   │   │   ├── Services.jsx (main services page)
│   │   │   ├── ServicesGrid.jsx (services grid with navigation)
│   │   │   └── [slug]/
│   │   │       ├── ServiceDetail.jsx (main wrapper)
│   │   │       ├── ServiceHero.jsx (hero section)
│   │   │       ├── ServiceForm.jsx (dynamic form)
│   │   │       ├── ServiceInfo.jsx (service details)
│   │   │       └── ServiceCTA.jsx (call-to-action)
│   │   └── layout/
│   │       └── ServiceLayout.jsx (reusable layout)
├── data/
│   └── services/
│       ├── ServicesData.js (service data with slugs)
│       ├── ServiceForms.js (form configurations)
│       └── ServiceDetails.js (content for each service)
├── hooks/
│   └── useServiceForm.js (form management hook)
└── utils/
    └── serviceUtils.js (helper functions)
```

### Key Components

1. **ServiceDetail.jsx** - Main wrapper that fetches service data and renders layout
2. **ServiceForm.jsx** - Dynamic form component that renders based on service type
3. **ServiceHero.jsx** - Hero section with service-specific content
4. **ServiceInfo.jsx** - Detailed service information and features
5. **ServiceCTA.jsx** - Call-to-action section with contact options

## Setup Instructions

### 1. Install Dependencies

```bash
npm install react-router-dom lucide-react
```

### 2. Configure Routing

Add the dynamic route to your router configuration:

```jsx
import { Routes, Route } from "react-router-dom";
import Services from "./component/pages/services/Services";
import ServiceDetail from "./component/pages/services/[slug]/ServiceDetail";

// In your router
<Routes>
  <Route path="/services" element={<Services />} />
  <Route path="/services/:slug" element={<ServiceDetail />} />
</Routes>;
```

### 3. Update ServicesData.js

Ensure all services have the required fields:

- `id`
- `title`
- `desc`
- `img`
- `category`
- `featured`
- `price`
- `slug`

### 4. Configure Service Forms

Add form configurations in `ServiceForms.js` for each service:

```javascript
"service-slug": {
  title: "Service Title",
  description: "Service description",
  fields: [
    {
      name: "fieldName",
      label: "Field Label",
      type: "text|email|tel|select|textarea|date|time",
      required: true,
      placeholder: "Placeholder text",
      options: ["Option 1", "Option 2"] // for select fields
    }
  ]
}
```

### 5. Add Service Details

Configure service-specific content in `ServiceDetails.js`:

```javascript
"service-slug": {
  title: "Service Title",
  subtitle: "Service Subtitle",
  heroImage: "/path/to/image.jpg",
  price: "Starting price",
  duration: "Service duration",
  description: "Detailed description",
  features: ["Feature 1", "Feature 2"],
  requirements: ["Requirement 1", "Requirement 2"],
  process: ["Step 1", "Step 2"],
  benefits: ["Benefit 1", "Benefit 2"]
}
```

## Usage

### Adding a New Service

1. **Add to ServicesData.js**:

```javascript
{
  id: 22,
  title: "New Service",
  desc: "Service description",
  img: "/images/services/newservice.jpg",
  category: "Category",
  featured: false,
  price: "From $X",
  slug: "new-service"
}
```

2. **Add form configuration** in `ServiceForms.js`
3. **Add service details** in `ServiceDetails.js`
4. **Add service image** to the images folder

### Customizing Forms

Forms are automatically generated based on the configuration. Supported field types:

- `text` - Text input
- `email` - Email input with validation
- `tel` - Phone number input
- `select` - Dropdown with options
- `textarea` - Multi-line text input
- `date` - Date picker
- `time` - Time picker

### Customizing UI

Each component can be customized independently:

- **ServiceHero.jsx** - Hero section layout and styling
- **ServiceForm.jsx** - Form appearance and behavior
- **ServiceInfo.jsx** - Information display format
- **ServiceCTA.jsx** - Call-to-action styling

## Features

### Dynamic Form Generation

- Forms are automatically generated based on service configuration
- Field validation and error handling
- Responsive design for all screen sizes
- Form submission with loading states

### SEO Optimized

- Dynamic meta titles and descriptions
- Structured data for search engines
- Clean URLs with slugs
- Fast loading with optimized images

### Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly form inputs
- Optimized for mobile performance

### Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility

## Customization

### Styling

The system uses Tailwind CSS for styling. Customize by:

- Modifying Tailwind classes in components
- Adding custom CSS in component files
- Using CSS variables for theme colors

### Form Validation

Customize validation in `useServiceForm.js`:

- Add custom validation rules
- Modify error messages
- Implement custom validation logic

### Data Management

Extend the system by:

- Adding new service categories
- Implementing service search and filtering
- Adding service ratings and reviews
- Integrating with external APIs

## Performance Optimization

### Code Splitting

- Each service page loads only required components
- Lazy loading for non-critical components
- Optimized bundle sizes

### Image Optimization

- Use appropriate image formats (WebP, AVIF)
- Implement lazy loading for images
- Optimize image sizes for different screen sizes

### Caching

- Implement service data caching
- Cache form configurations
- Optimize API calls

## Troubleshooting

### Common Issues

1. **Service not found error**

   - Check if the slug exists in `ServicesData.js`
   - Verify the route configuration
   - Check browser console for errors

2. **Form not rendering**

   - Verify form configuration in `ServiceForms.js`
   - Check if all required fields are defined
   - Ensure proper import paths

3. **Images not loading**
   - Verify image paths in service data
   - Check if images exist in the public folder
   - Ensure proper file permissions

### Debug Mode

Enable debug mode by setting:

```javascript
const DEBUG = true;
```

This will log additional information to the console.

## Future Enhancements

### Planned Features

- Service comparison tool
- Advanced filtering and search
- Service booking system
- User reviews and ratings
- Multi-language support
- Advanced analytics

### Integration Possibilities

- CRM systems
- Payment gateways
- Email marketing platforms
- Customer support tools
- Analytics platforms

## Support

For questions or issues:

1. Check the troubleshooting section
2. Review the code examples
3. Check browser console for errors
4. Verify all dependencies are installed

## License

This system is part of the DreamsToFly website project.
