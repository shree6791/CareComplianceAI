import React from 'react';
import { UserCheck, UserX } from 'lucide-react';
import { TargetAudienceType } from '../types';

const targetAudience: TargetAudienceType[] = [
  {
    description: "You run a home health agency with 10-100 caregivers"
  },
  {
    description: "You're tired of chasing caregivers for paperwork and documentation"
  },
  {
    description: "You want peace of mind knowing you're audit-ready at all times"
  }
];

const notForAudience: TargetAudienceType[] = [
  {
    description: "Large enterprise healthcare organizations with 500+ staff"
  },
  {
    description: "Agencies that already have robust EHR systems with good compliance tracking"
  }
];

const WhoItIsFor: React.FC = () => {
  return (
    <section id="who" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is CareCompliance.ai Right For You?
            </h2>
            <p className="text-xl text-gray-700">
              Our solution is specifically designed for small to mid-size home health agencies facing documentation challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Perfect for you if:</h3>
              </div>

              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center bg-green-100 text-green-600 h-6 w-6 rounded-full mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{item.description}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-100 rounded-lg">
                <p className="text-blue-800 italic">
                  "We were using WhatsApp, email, and Excel to track everything. It was a mess. CareCompliance.ai gave us a single system that everyone can use easily."
                </p>
                <p className="text-blue-600 font-medium mt-2">
                  - Diane K., Co-owner, Caring Hearts Home Health
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 p-3 rounded-full mr-4">
                  <UserX className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Probably not for you if:</h3>
              </div>

              <ul className="space-y-4">
                {notForAudience.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center bg-red-100 text-red-600 h-6 w-6 rounded-full mr-3 flex-shrink-0">
                      ✕
                    </span>
                    <span className="text-gray-700">{item.description}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  Not sure if CareCompliance.ai is the right fit? Schedule a quick 15-minute call with our team to discuss your specific needs.
                </p>
                <a 
                  href="#" 
                  className="inline-block mt-3 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Book a consultation call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;