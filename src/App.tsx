import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SimpleHero from './components/SimpleHero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import ConsultingProcess from './components/ConsultingProcess';

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {!selectedService && <SimpleHero onServiceSelect={handleServiceSelect} />}
        
        {selectedService === 'consulting' && (
          <div id="consulting">
            <ConsultingProcess />
            <CTA />
          </div>
        )}
        
        {selectedService === 'web-design' && (
          <div id="web-design">
            <Services />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
          </div>
        )}
      </main>
      
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 Taku Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;