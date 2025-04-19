import React from 'react';
import { Mic, ClipboardList, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { FeatureType } from '../types';

const features: FeatureType[] = [
  {
    title: 'Auto-Generate Caregiver Notes',
    description: 'Let your caregivers record a quick voice summary after each visit instead of filling out lengthy forms. Our AI turns their speech into structured, compliant visit logs that update your records automatically.',
    example: 'Caregiver Sarah spent 20 minutes on paperwork after each visit. Now she records a 30-second voice note, and CareCompliance.ai generates the full documentation, including vital signs, care provided, and client status.',
    icon: 'Mic'
  },
  {
    title: 'Weekly Compliance Report',
    description: 'Get a clear, actionable weekly report showing what\'s missing, who\'s behind, and what needs fixing. No more end-of-month paperwork scrambles or audit surprises.',
    example: 'Every Monday morning, agency director Tom gets an email showing exactly which 7 visits from last week need documentation fixes, which 3 caregivers need to complete missing information, and which areas are fully compliant.',
    icon: 'ClipboardList'
  },
  {
    title: 'Risk Alerts',
    description: 'Stay ahead of potential issues with automatic alerts for concerning patterns like skipped vitals, overlapping shifts, or delayed documentation that could raise flags during an audit.',
    example: 'The system noticed that blood pressure readings weren\'t recorded for Mrs. Johnson in 3 consecutive visits, flagging this pattern for review before it becomes a compliance problem.',
    icon: 'AlertTriangle',
    comingSoon: true
  }
];

const FeatureCard: React.FC<{ feature: FeatureType; index: number }> = ({ feature, index }) => {
  const renderIcon = () => {
    switch (feature.icon) {
      case 'Mic':
        return <Mic className="h-10 w-10 text-blue-600" />;
      case 'ClipboardList':
        return <ClipboardList className="h-10 w-10 text-blue-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="h-10 w-10 text-orange-500" />;
      default:
        return <CheckCircle className="h-10 w-10 text-blue-600" />;
    }
  };

  return (
    <div className={`mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative">
            {feature.comingSoon && (
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                Coming Soon
              </div>
            )}
            <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
              {index === 0 && (
                <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <div className="mr-3 p-2 bg-blue-100 rounded-full">
                      <Mic className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Voice Recording</h4>
                      <p className="text-sm text-gray-600">"Mrs. Smith was alert today. BP 120/80. Assisted with medication and light housework. No falls or concerns."</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-700">Processed into structured documentation</span>
                  </div>
                </div>
              )}
              
              {index === 1 && (
                <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <h4 className="font-medium text-gray-900 mb-3">Weekly Compliance Report</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">3 visits missing vital signs documentation</span>
                    </div>
                    <div className="flex items-center">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">2 caregivers with delayed documentation (&gt;24h)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">42/47 visits fully documented and compliant</span>
                    </div>
                  </div>
                </div>
              )}
              
              {index === 2 && (
                <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <div className="mr-3 p-2 bg-orange-100 rounded-full">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Risk Alert</h4>
                      <p className="text-sm text-gray-600">Patient J. Sanders has missed 3 consecutive medication administration records</p>
                    </div>
                  </div>
                  <div className="text-sm bg-orange-50 p-2 rounded">
                    <span className="font-medium">Suggested Action:</span> Review medication schedule and verify with caregiver
                  </div>
                </div>
              )}

              <img 
                src={`https://images.pexels.com/photos/${index === 0 ? '9193779' : index === 1 ? '7289738' : '7509366'}/pexels-photo-${index === 0 ? '9193779' : index === 1 ? '7289738' : '7509366'}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                alt={feature.title}
                className="mt-4 rounded w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              {renderIcon()}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">{feature.description}</p>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-medium text-gray-900 mb-2">Real-world example:</h4>
            <p className="text-gray-700">{feature.example}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How CareCompliance.ai Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We've simplified compliance into three easy steps that fit your existing workflow
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;