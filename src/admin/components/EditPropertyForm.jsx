import { useState, useEffect } from "react";
import Form from "./Form";

function EditPropertyForm({
  property,
  onSave,
  onCancel,
  source,
  propertyFields,
  formData,
  setFormData,
}) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

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
        if (newPreviews[index] && newPreviews[index].startsWith("blob:")) {
          URL.revokeObjectURL(newPreviews[index]);
        }
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
    const updatedPropertyData = {
      ...property,
      ...formData,
      image: uploadedImages[0]?.preview || property.image,
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 lg:p-6">
        <div className="mb-1 flex items-center justify-start">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium border border-gray-300 rounded-md transition"
          >
            Cancel
          </button>
        </div>

        <Form
          formTitle={"Edit Property"}
          fields={propertyFields}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          submitButtonText="Update Property"
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
      </div>
    </div>
  );
}

export default EditPropertyForm;
