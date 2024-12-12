import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
}

interface RegistrationProgressProps {
  steps: Step[];
  currentStep: number;
}

const RegistrationProgress = ({ steps, currentStep }: RegistrationProgressProps) => {
  return (
    <div className="relative">
      <div className="absolute top-5 left-6 right-6 h-0.5 bg-gray-200">
        <div
          className="absolute top-0 left-0 h-full bg-[#FA7413] transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex flex-col items-center ${
              step.number < currentStep
                ? 'text-[#FA7413]'
                : step.number === currentStep
                ? 'text-[#FA7413]'
                : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                step.number < currentStep
                  ? 'bg-[#FA7413] border-[#FA7413] text-white'
                  : step.number === currentStep
                  ? 'border-[#FA7413] bg-white text-[#FA7413]'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {step.number < currentStep ? (
                <Check size={20} />
              ) : (
                <span className="font-semibold">{step.number}</span>
              )}
            </div>
            <span className="mt-2 text-sm font-medium">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationProgress;