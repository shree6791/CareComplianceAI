import React from 'react';
import { CheckCircle as CircleCheck, ClipboardCheck, Shield } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We turn your compliance burden into a simple weekly routine you can handle in minutes, not days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <CircleCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplify Documentation</h3>
            <p className="text-gray-700">
              Replace lengthy form-filling with quick voice recordings that our AI transforms into compliant notes
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <ClipboardCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Audit-Ready</h3>
            <p className="text-gray-700">
              Get weekly reports that identify missing documentation and what needs to be fixed before auditors arrive
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce Risk</h3>
            <p className="text-gray-700">
              Automatically flag concerning patterns like missed vitals, overlapping shifts, or delayed documentation
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                "We used to spend 15 hours a week on compliance paperwork. Now it's down to 2 hours."
              </h3>
              <p className="text-gray-700">
                Our agency went from constantly chasing caregivers for documentation to having a simple system 
                that everyone follows. I finally have time to focus on growing our business instead of just surviving.
              </p>
              <p className="text-blue-700 font-medium mt-2">
                - James T., Owner of Sunshine Home Health (25 caregivers)
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Satisfied home health agency owner" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;