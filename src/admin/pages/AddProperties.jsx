import { useState } from "react";
import Form from "../components/Form";
import axios from "axios";

function AddProperties() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    country: "",
    city: "",
    address: "",
    description: "",
    special_offers: "",
    house_policies: "",
    payment_info: "",
    location_map_link: "",
  });

  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const propertyFields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Property Title",
      required: true,
    },
    {
      name: "price",
      label: "Price ($)",
      type: "number",
      placeholder: "e.g. 250000",
      required: true,
    },
    {
      name: "bedrooms",
      label: "Bedrooms",
      type: "number",
      placeholder: "Number of bedrooms",
      required: true,
    },
    {
      name: "bathrooms",
      label: "Bathrooms",
      type: "number",
      placeholder: "Number of bathrooms",
      required: true,
    },
    {
      name: "area",
      label: "Area (sq ft)",
      type: "number",
      placeholder: "Property area in sq ft",
      required: true,
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      placeholder: "Select Country",
      required: true,
      options: [
        { value: "United States", label: "United States" },
        { value: "United Kingdom", label: "United Kingdom" },
        { value: "Canada", label: "Canada" },
        { value: "Australia", label: "Australia" },
      ],
    },
    {
      name: "city",
      label: "City",
      type: "select",
      placeholder: "Select City",
      required: true,
      options: [
        { value: "New York", label: "New York" },
        { value: "Los Angeles", label: "Los Angeles" },
        { value: "Chicago", label: "Chicago" },
        { value: "Houston", label: "Houston" },
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter Full Address",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Write detailed description about the property",
      rows: 4,
      required: true,
    },
    {
      name: "IMAGE_UPLOAD_PLACEHOLDER",
      label: "",
      type: "image_upload",
    },
    {
      name: "facilities",
      label: "Facilities",
      type: "text",
      placeholder: "Enter Property Facilities",
      required: false,
    },
    {
      name: "special_offers",
      label: "Special Offers",
      type: "text",
      placeholder: "Enter Property Special Offers",
      required: false,
    },
    {
      name: "house_policies",
      label: "House Policies",
      type: "text",
      placeholder: "Enter Property House Policies",
      required: false,
    },
    {
      name: "payment_info",
      label: "Payment Information",
      type: "text",
      placeholder: "Enter Property Payment Info",
      required: false,
    },
    {
      name: "location_map_link",
      label: "Location Map Link",
      type: "url",
      placeholder: "Enter Google Maps Link",
      required: false,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = (id) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== id));
    setImagePreviews((prev) => {
      const index = uploadedImages.findIndex((img) => img.id === id);
      if (index !== -1) {
        const newPreviews = [...prev];
        URL.revokeObjectURL(newPreviews[index]);
        newPreviews.splice(index, 1);
        return newPreviews;
      }
      return prev;
    });
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );
    if (validFiles.length === 0) return;

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));

    const newImages = validFiles.map((file, index) => ({
      id: Date.now() + index,
      file: file,
      name: file.name,
      progress: 0,
      preview: newPreviews[index],
    }));

    setUploadedImages((prev) => {
      const updated = [...prev, ...newImages].slice(0, 10);
      return updated;
    });

    setImagePreviews((prev) => {
      const updated = [...prev, ...newPreviews].slice(0, 10);
      return updated;
    });

    newImages.forEach((img) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadedImages((prev) =>
          prev.map((item) =>
            item.id === img.id ? { ...item, progress } : item
          )
        );
        if (progress >= 100) clearInterval(interval);
      }, 50);
    });
  };

  const handleFileUpload = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
      e.target.value = "";
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("adminToken");
    const propertyData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      propertyData.append(key, value);
    });

    uploadedImages.forEach((img) => {
      propertyData.append("images", img.file);
    });

    console.log("Submitting property:", {
      ...formData,
      images: uploadedImages.map((img) => img.name),
    });

    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL
        }/Accommodation/OwnerDashboardApi/add_room`,
        propertyData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);

      setFormData({
        title: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        country: "",
        city: "",
        address: "",
        description: "",
        facilities: "",
        special_offers: "",
        house_policies: "",
        payment_info: "",
        location_map_link: "",
      });
      setUploadedImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      formTitle="Add New Properties"
      fields={propertyFields}
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      submitButtonText="Submit"
      showImageUpload={true}
      maxImages={10}
      uploadedImages={uploadedImages}
      imagePreviews={imagePreviews}
      isDragging={isDragging}
      onFileUpload={handleFileUpload}
      onRemoveImage={handleRemoveImage}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
}

export default AddProperties;
