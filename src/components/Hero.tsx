import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Stop worrying about compliance audits.
              <span className="text-blue-600"> Start sleeping better.</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-6">
              Your home health agency can finally stay audit-ready without the paperwork headache. 
              No more Sunday night panic about missing documentation.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-2">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Caregivers record 30-second voice summaries</p>
              </div>
              <div className="flex items-start mb-2">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">AI turns them into structured documentation</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Weekly reports show what needs fixing</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#early-access" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Join Early Access – It's Free 
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7551605/pexels-photo-7551605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Home health professional using CareCompliance.ai" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm">
                    "I used to spend hours chasing paperwork. Now I just check my weekly compliance report and know exactly what needs attention."
                  </p>
                  <p className="text-blue-200 text-xs mt-2">
                    - Maria L., Home Health Agency Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;