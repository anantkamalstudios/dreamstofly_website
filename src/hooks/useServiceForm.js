import { useState, useCallback } from 'react';

export const useServiceForm = (initialFields = {}) => {
  const [formData, setFormData] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update form field
  const updateField = useCallback((name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  // Update multiple fields at once
  const updateFields = useCallback((fields) => {
    setFormData(prev => ({
      ...prev,
      ...fields
    }));
  }, []);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialFields);
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  }, [initialFields]);

  // Validate form
  const validateForm = useCallback((validationRules = {}) => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach(fieldName => {
      const value = formData[fieldName];
      const rules = validationRules[fieldName];
      
      if (rules.required && (!value || value.trim() === '')) {
        newErrors[fieldName] = `${rules.label || fieldName} is required`;
      }
      
      if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors[fieldName] = 'Please enter a valid email address';
      }
      
      if (rules.minLength && value && value.length < rules.minLength) {
        newErrors[fieldName] = `${rules.label || fieldName} must be at least ${rules.minLength} characters`;
      }
      
      if (rules.maxLength && value && value.length > rules.maxLength) {
        newErrors[fieldName] = `${rules.label || fieldName} must be no more than ${rules.maxLength} characters`;
      }
      
      if (rules.pattern && value && !rules.pattern.test(value)) {
        newErrors[fieldName] = rules.message || `${rules.label || fieldName} format is invalid`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Submit form
  const submitForm = useCallback(async (onSubmit, validationRules = {}) => {
    if (!validateForm(validationRules)) {
      return false;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setIsSubmitted(true);
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  // Check if form is valid
  const isFormValid = useCallback(() => {
    return Object.keys(errors).length === 0;
  }, [errors]);

  // Get field error
  const getFieldError = useCallback((fieldName) => {
    return errors[fieldName] || '';
  }, [errors]);

  // Check if field has error
  const hasFieldError = useCallback((fieldName) => {
    return !!errors[fieldName];
  }, [errors]);

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    updateField,
    updateFields,
    resetForm,
    validateForm,
    submitForm,
    isFormValid,
    getFieldError,
    hasFieldError
  };
};
