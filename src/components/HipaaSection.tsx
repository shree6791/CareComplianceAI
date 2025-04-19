import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

const HipaaSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-2xl"></div>
                <div className="relative">
                  <Shield className="h-32 w-32 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                HIPAA Compliant and Secure
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                We take data security and patient privacy as seriously as you do. 
                Our platform is built from the ground up to ensure complete HIPAA compliance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">End-to-End Encryption</h3>
                    <p className="text-gray-700">All patient data is encrypted in transit and at rest</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Server className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Secure Cloud Storage</h3>
                    <p className="text-gray-700">HIPAA-compliant data centers with redundant backups</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">BAA Provided</h3>
                    <p className="text-gray-700">Business Associate Agreement included with all subscriptions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Annual Audits</h3>
                    <p className="text-gray-700">Regular security assessments and penetration testing</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700">
                  "As someone who's been through multiple HIPAA audits, I appreciate how seriously CareCompliance.ai takes security. They provided all the documentation we needed for our compliance records."
                </p>
                <p className="text-blue-600 font-medium mt-2">
                  - Robert M., Compliance Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HipaaSection;