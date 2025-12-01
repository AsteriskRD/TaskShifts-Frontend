'use client'
import { useState } from 'react';

import ProgressIndicator from '../components/onboardingComponents/ProgressIndicator';
import Stage1Form from '../components/onboardingComponents/Stage1Form';
import Stage2Form from '../components/onboardingComponents/Stage2Form';
import Stage3Form from '../components/onboardingComponents/Stage3Form';
import FormButtons from '../components/onboardingComponents/FormButtons';
import Header from '../components/onboardingComponents/Header';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    // Stage 1 fields
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    professionalBio: '',
    
    // Stage 2 fields
    governmentId: null,
    professionalCert: null,
    
    // Stage 3 fields - Basic Service Information
    serviceTitle: '',
    category: '',
    subcategory: '',
    shortTagline: '',
    serviceDescription: '',
    keywords: '',
    
    // Stage 3 - Skills & Expertise
    skills: '',
    skillLevel: '',
    experience: '',
    
    // Stage 3 - Pricing & Packages (Basic)
    basicPackageName: 'Basic',
    basicPrice: '',
    basicDeliveryTime: '',
    basicDescription: '',
    
    // Stage 3 - Pricing & Packages (Classic)
    classicPackageName: 'Classic',
    classicPrice: '',
    classicDeliveryTime: '',
    classicDescription: '',
    
    // Stage 3 - Pricing & Packages (Premium)
    premiumPackageName: 'Premium',
    premiumPrice: '',
    premiumDeliveryTime: '',
    premiumDescription: '',
    
    // Stage 3 - Portfolio & Media
    portfolioFiles: [],
    portfolioCaption: '',
    mediaLinks: '',
    
    // Stage 3 - Additional Settings
    cancellationPolicy: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    let newErrors = {};
    
    if (!formData.firstName || !formData.firstName.trim()) {
      newErrors['firstName'] = 'First name is required';
    }
    
    if (!formData.lastName || !formData.lastName.trim()) {
      newErrors['lastName'] = 'Last name is required';
    }
    
    if (!formData.email || !formData.email.trim()) {
      newErrors['email'] = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors['email'] = 'Please enter a valid email address';
    }
    
    if (!formData.phone || !formData.phone.trim()) {
      newErrors['phone'] = 'Phone number is required';
    }
    
    if (!formData.professionalBio || !formData.professionalBio.trim()) {
      newErrors['professionalBio'] = 'Professional bio is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors = {};
    
    if (!formData.governmentId) {
      newErrors['governmentId'] = 'Government ID is required';
    }
    
    if (!formData.professionalCert) {
      newErrors['professionalCert'] = 'Professional certification is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    let newErrors = {};
    
    // Basic Service Information
    if (!formData.serviceTitle || !formData.serviceTitle.trim()) {
      newErrors['serviceTitle'] = 'Service title is required';
    }
    
    if (!formData.category || !formData.category.trim()) {
      newErrors['category'] = 'Category is required';
    }
    
    if (!formData.subcategory || !formData.subcategory.trim()) {
      newErrors['subcategory'] = 'Subcategory is required';
    }
    
    if (!formData.serviceDescription || !formData.serviceDescription.trim()) {
      newErrors['serviceDescription'] = 'Service description is required';
    }
    
    if (!formData.keywords || !formData.keywords.trim()) {
      newErrors['keywords'] = 'Keywords are required';
    }
    
    // Skills & Expertise
    if (!formData.skills || !formData.skills.trim()) {
      newErrors['skills'] = 'Skills are required';
    }
    
    if (!formData.skillLevel || !formData.skillLevel.trim()) {
      newErrors['skillLevel'] = 'Skill level is required';
    }
    
    if (!formData.experience || !formData.experience.trim()) {
      newErrors['experience'] = 'Experience is required';
    }
    
    // Basic Package Validation
    if (!formData.basicPrice || !formData.basicPrice.trim()) {
      newErrors['basicPrice'] = 'Basic package price is required';
    }
    
    if (!formData.basicDeliveryTime || !formData.basicDeliveryTime.trim()) {
      newErrors['basicDeliveryTime'] = 'Basic package delivery time is required';
    }
    
    if (!formData.basicDescription || !formData.basicDescription.trim()) {
      newErrors['basicDescription'] = 'Basic package description is required';
    }
    
    // Classic Package Validation
    if (!formData.classicPrice || !formData.classicPrice.trim()) {
      newErrors['classicPrice'] = 'Classic package price is required';
    }
    
    if (!formData.classicDeliveryTime || !formData.classicDeliveryTime.trim()) {
      newErrors['classicDeliveryTime'] = 'Classic package delivery time is required';
    }
    
    if (!formData.classicDescription || !formData.classicDescription.trim()) {
      newErrors['classicDescription'] = 'Classic package description is required';
    }
    
    // Premium Package Validation
    if (!formData.premiumPrice || !formData.premiumPrice.trim()) {
      newErrors['premiumPrice'] = 'Premium package price is required';
    }
    
    if (!formData.premiumDeliveryTime || !formData.premiumDeliveryTime.trim()) {
      newErrors['premiumDeliveryTime'] = 'Premium package delivery time is required';
    }
    
    if (!formData.premiumDescription || !formData.premiumDescription.trim()) {
      newErrors['premiumDescription'] = 'Premium package description is required';
    }
    
    // Terms Agreement
    if (!formData.agreeToTerms) {
      newErrors['agreeToTerms'] = 'You must agree to the Terms of Service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    // Validate current step before proceeding
    if (currentStep === 1) {
      isValid = validateStep1();
      if (!isValid) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    
    if (currentStep === 2) {
      isValid = validateStep2();
      if (!isValid) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    
    if (currentStep === 3) {
      isValid = validateStep3();
      if (!isValid) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      // If validation passes on step 3, submit the form
      handleSubmit();
      return;
    }
    
    // If validation passes, go to next step
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      setErrors({}); // Clear any errors when moving forward
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setErrors({}); // Clear errors when going back
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveDraft = () => {
    console.log('Draft saved:', formData);
    // Save to localStorage (excluding file objects)
    try {
      const draftData = {
        ...formData,
        governmentId: formData.governmentId ? 'File uploaded' : null,
        professionalCert: formData.professionalCert ? 'File uploaded' : null,
        portfolioFiles: formData.portfolioFiles.length > 0 ? `${formData.portfolioFiles.length} file(s) uploaded` : [],
      };
      localStorage.setItem('registrationDraft', JSON.stringify(draftData));
      alert('Draft saved successfully!');
    } catch (error) {
      console.error('Error saving draft:', error);
      alert('Failed to save draft. Please try again.');
    }
  };

  const handleSubmit = async () => {
    console.log('Form submitted:', formData);
    
    // Prepare data for backend - Convert to FormData for file uploads
    const submitData = new FormData();
    
    // Add all text fields
    Object.keys(formData).forEach(key => {
      if (key === 'portfolioFiles') {
        // Handle multiple files
        formData.portfolioFiles.forEach((file, index) => {
          submitData.append(`portfolioFiles[${index}]`, file);
        });
      } else if (key === 'governmentId' || key === 'professionalCert') {
        // Handle single files
        if (formData[key]) {
          submitData.append(key, formData[key]);
        }
      } else {
        // Handle all other fields
        submitData.append(key, formData[key]);
      }
    });
    
    // Here you would send to your backend API
    try {
      // Example API call structure:
      /*
      const response = await fetch('/api/register', {
        method: 'POST',
        body: submitData, // FormData automatically sets correct headers
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        alert('Registration successful!');
        // Redirect to success page or dashboard
        // router.push('/dashboard');
      } else {
        throw new Error('Registration failed');
      }
      */
      
      // For now, just show success message
      alert('Form submitted successfully! Data is ready to be sent to backend.');
      console.log('Data ready for backend:', formData);
      
      // Clear localStorage draft after successful submission
      localStorage.removeItem('registrationDraft');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="mx-auto">
        
        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} />

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-sm md:p-4 mt-8">
          
          {/* Stage 1: Personal Information */}
          {currentStep === 1 && (
            <Stage1Form 
              formData={formData} 
              handleInputChange={handleInputChange}
              errors={errors}
            />
          )}
          
          {/* Stage 2: Document Verification */}
          {currentStep === 2 && (
            <Stage2Form 
              formData={formData} 
              handleInputChange={handleInputChange}
              errors={errors}
            />
          )}

          {/* Stage 3: Service Setup */}
          {currentStep === 3 && (
            <Stage3Form 
              formData={formData} 
              handleInputChange={handleInputChange}
              errors={errors}
            />
          )}

          {/* Form Buttons */}
          <FormButtons
            currentStep={currentStep}
            onPrevious={handlePrevious}
            onSaveDraft={handleSaveDraft}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}