import React from 'react';
import { Clock, DollarSign, FileCheck, BrainCircuit } from 'lucide-react';
import { BenefitType } from '../types';

const benefits: BenefitType[] = [
  {
    title: "Save 10+ hours every week",
    description: "Eliminate manual paperwork and the endless back-and-forth with caregivers about missing documentation"
  },
  {
    title: "Reduce audit anxiety",
    description: "Know exactly where you stand with compliance at all times instead of scrambling when auditors call"
  },
  {
    title: "Improve caregiver retention",
    description: "Caregivers stay longer when they spend less time on paperwork and more time caring for patients"
  },
  {
    title: "Protect revenue",
    description: "Avoid claim denials and billing delays due to incomplete or incorrect documentation"
  }
];

const Benefits: React.FC = () => {
  const renderIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="h-6 w-6 text-blue-600" />;
      case 1:
        return <FileCheck className="h-6 w-6 text-blue-600" />;
      case 2:
        return <BrainCircuit className="h-6 w-6 text-blue-600" />;
      case 3:
        return <DollarSign className="h-6 w-6 text-blue-600" />;
      default:
        return <Clock className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <section id="benefits" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How This Benefits Your Agency
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            CareCompliance.ai doesn't just make documentation easier—it transforms how your agency operates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  {renderIcon(index)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              A Day in the Life with CareCompliance.ai
            </h3>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Meet Lisa, who runs a home health agency with 35 caregivers serving 50 clients:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-700 mb-2">Before CareCompliance.ai</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Spent Fridays calling caregivers about missing documentation</li>
                    <li>Discovered compliance issues only after they became problems</li>
                    <li>Frequently had to resubmit claims due to documentation errors</li>
                    <li>Lived in constant fear of surprise audits</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-700 mb-2">After CareCompliance.ai</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Reviews weekly compliance report every Monday in 30 minutes</li>
                    <li>Addresses specific documentation issues before they affect billing</li>
                    <li>Caregivers record 30-second voice summaries after each visit</li>
                    <li>Sleeps better knowing her agency is audit-ready at all times</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 italic">
                "Last year we had a surprise audit from our state regulator. Instead of panicking, I just pulled up our compliance dashboard and showed them our documentation. The auditor was impressed with how organized and complete our records were."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;