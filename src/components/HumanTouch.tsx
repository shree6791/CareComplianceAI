import React from 'react';

const HumanTouch: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/5699489/pexels-photo-5699489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dr. Sarah Chen, Founder of CareCompliance.ai" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            
            <div className="w-full md:w-3/5 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why We Built CareCompliance.ai
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  Hi, I'm Dr. Sarah Chen. Before founding CareCompliance.ai, I spent 15 years as a healthcare administrator and saw firsthand how documentation burdens were crushing small home health agencies.
                </p>
                
                <p className="text-lg text-gray-700 mb-4">
                  My mother owned a small home health agency, and I watched her spend every Sunday night catching up on paperwork, chasing caregivers for missing documentation, and worrying about potential audits.
                </p>
                
                <p className="text-lg text-gray-700 mb-4">
                  I built CareCompliance.ai because I believe that people who provide care shouldn't have to choose between quality patient care and proper documentation. Our solution uses AI to handle the busywork so you can focus on what matters most: taking care of people.
                </p>
                
                <p className="text-lg text-gray-700">
                  Our team includes healthcare professionals who've worked in home health, so we understand your challenges. We're not just technologists - we're people who care about making healthcare work better for everyone.
                </p>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="mr-4">
                  <img 
                    src="https://images.pexels.com/photos/5699489/pexels-photo-5699489.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Dr. Sarah Chen" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dr. Sarah Chen</p>
                  <p className="text-gray-600">Founder, CareCompliance.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanTouch;