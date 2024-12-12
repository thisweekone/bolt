import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicInfoStep from './steps/BasicInfoStep';
import CompanyDetailsStep from './steps/CompanyDetailsStep';
import BusinessHoursStep from './steps/BusinessHoursStep';
import TermsStep from './steps/TermsStep';
import RegistrationProgress from './components/RegistrationProgress';

export type RegistrationData = {
  basicInfo: {
    companyName: string;
    responsibleName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  };
  companyDetails: {
    description: string;
    category: string;
    address: {
      street: string;
      number: string;
      city: string;
      state: string;
      zipCode: string;
    };
    logo: string;
    images: string[];
  };
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      isOpen: boolean;
    };
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    website: string;
  };
  termsAccepted: boolean;
};

const initialData: RegistrationData = {
  basicInfo: {
    companyName: '',
    responsibleName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  },
  companyDetails: {
    description: '',
    category: '',
    address: {
      street: '',
      number: '',
      city: '',
      state: '',
      zipCode: '',
    },
    logo: '',
    images: [],
  },
  businessHours: {
    monday: { open: '09:00', close: '18:00', isOpen: true },
    tuesday: { open: '09:00', close: '18:00', isOpen: true },
    wednesday: { open: '09:00', close: '18:00', isOpen: true },
    thursday: { open: '09:00', close: '18:00', isOpen: true },
    friday: { open: '09:00', close: '18:00', isOpen: true },
    saturday: { open: '09:00', close: '13:00', isOpen: true },
    sunday: { open: '09:00', close: '18:00', isOpen: false },
  },
  socialMedia: {
    facebook: '',
    instagram: '',
    linkedin: '',
    website: '',
  },
  termsAccepted: false,
};

const CompanyRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>(initialData);
  const navigate = useNavigate();

  const steps = [
    { number: 1, title: 'Dados Básicos' },
    { number: 2, title: 'Detalhes da Empresa' },
    { number: 3, title: 'Horário de Funcionamento' },
    { number: 4, title: 'Termos e Condições' },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    // In a real app, this would send the data to an API
    console.log('Registration data:', registrationData);
    
    // Navigate to success page
    navigate('/registro/sucesso');
  };

  const updateRegistrationData = (step: keyof RegistrationData, data: any) => {
    setRegistrationData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cadastre sua Empresa
          </h1>

          <RegistrationProgress steps={steps} currentStep={currentStep} />

          <div className="mt-8">
            {currentStep === 1 && (
              <BasicInfoStep
                data={registrationData.basicInfo}
                onUpdate={(data) => updateRegistrationData('basicInfo', data)}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <CompanyDetailsStep
                data={registrationData.companyDetails}
                onUpdate={(data) => updateRegistrationData('companyDetails', data)}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 3 && (
              <BusinessHoursStep
                data={registrationData.businessHours}
                socialMedia={registrationData.socialMedia}
                onUpdateHours={(data) => updateRegistrationData('businessHours', data)}
                onUpdateSocial={(data) => updateRegistrationData('socialMedia', data)}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 4 && (
              <TermsStep
                accepted={registrationData.termsAccepted}
                onUpdate={(accepted) => updateRegistrationData('termsAccepted', accepted)}
                onSubmit={handleSubmit}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;