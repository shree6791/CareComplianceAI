import React, { FormEvent } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const EarlyAccess: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    // and send the data to your backend/API
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    
    // For now, we'll just redirect to mailto
    window.location.href = `mailto:shree6791@gmail.com?subject=CareCompliance.ai Early Access Request&body=Email: ${email}`;
  };

  return (
    <section id="early-access" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2 text-blue-200 text-2xl">🧪</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Early Access Program
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            We're working with a small group of agency owners to shape the future of home health compliance—together.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-10">
            <p className="text-lg mb-6 text-blue-100">
              If you're interested in CareCompliance.ai, join the waitlist.
              You'll receive updates, give feedback, and get early access to features built with your input.
            </p>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="mb-6">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                👉 Join the Waitlist – It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <ShieldCheck className="h-5 w-5 text-blue-300" />
            <p className="text-blue-200 text-sm">
              Your information is secure and will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;