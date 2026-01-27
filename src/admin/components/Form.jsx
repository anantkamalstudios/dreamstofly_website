import React, { useState } from "react";
import { Upload, Trash2 } from "lucide-react";

function Form({
  formTitle,
  fields = [],
  formData,
  onInputChange,
  onSubmit,
  submitButtonText = "Submit",

  showImageUpload = false,
  maxImages = 10,
  uploadedImages = [],
  imagePreviews = [],
  isDragging = false,
  onFileUpload,
  onRemoveImage,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
}) {
  const renderField = (field) => {
    const baseInputClass =
      "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition";

    if (field.type === "image_upload" && showImageUpload) {
      return (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Property Images (Max {maxImages}) *
            </label>
            <div
              className={`border-2 border-dashed ${
                isDragging
                  ? "border-blue-500 bg-blue-100"
                  : "border-blue-200 bg-blue-50"
              } rounded-lg p-8 text-center transition-colors duration-200`}
              onDragOver={onDragOver}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <div className="relative h-full w-full">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div
                    className={`p-3 ${
                      isDragging ? "bg-blue-200" : "bg-blue-100"
                    } rounded-full transition-colors duration-200`}
                  >
                    <Upload
                      className={`w-6 h-6 ${
                        isDragging ? "text-blue-700" : "text-blue-600"
                      } transition-colors duration-200`}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-blue-600">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (max. 10MB each)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {uploadedImages.length > 0
                        ? `${uploadedImages.length} image${
                            uploadedImages.length > 1 ? "s" : ""
                          } selected`
                        : "No images selected"}
                    </p>
                    {isDragging && (
                      <div className="mt-2 text-blue-600 text-sm font-medium">
                        Drop images here
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  multiple
                  accept="image/*"
                  onChange={onFileUpload}
                  disabled={uploadedImages.length >= maxImages}
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              You can add up to {maxImages} images
            </p>
          </div>

          {uploadedImages.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {uploadedImages.map((img, index) => (
                <div
                  key={img.id}
                  className="relative group rounded-md overflow-hidden border border-gray-200 h-40"
                >
                  {img.preview && (
                    <>
                      <img
                        src={img.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveImage(img.id);
                          }}
                          className="p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:bg-red-600"
                          title="Remove image"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200">
                        <div
                          className="h-full bg-green-500 transition-all duration-300"
                          style={{ width: `${img.progress}%` }}
                        ></div>
                      </div>
                      <div className="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded">
                        {img.progress}%
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      );
    }

    switch (field.type) {
      case "text":
      case "number":
      case "email":
      case "url":
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={onInputChange}
            placeholder={field.placeholder}
            className={baseInputClass}
            required={field.required}
          />
        );

      case "textarea":
        return (
          <textarea
            name={field.name}
            value={formData[field.name] || ""}
            onChange={onInputChange}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            className={`${baseInputClass} resize-none`}
            required={field.required}
          ></textarea>
        );

      case "select":
        return (
          <select
            name={field.name}
            value={formData[field.name] || ""}
            onChange={onInputChange}
            className={`${baseInputClass} appearance-none bg-white`}
            required={field.required}
          >
            <option value="">{field.placeholder || "Select an option"}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="bg-blue-200 px-6 py-4 rounded-t-lg">
          <h1 className="text-lg font-semibold text-gray-800 text-center">
            {formTitle}
          </h1>
        </div>

        <div className="p-6 space-y-6">
          {fields.map((field) => (
            <div key={field.name} className={field.colSpan || ""}>
              {field.type !== "image_upload" && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label} {field.required && "*"}
                </label>
              )}
              {renderField(field)}
            </div>
          ))}
        </div>

        <div className="w-full p-6 flex justify-center">
          <button
            onClick={onSubmit}
            className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out active:bg-white active:text-blue-600 active:border-blue-600 active:border-2"
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
