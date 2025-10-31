import React from 'react';
import { Code2, Search, Monitor } from 'lucide-react';

interface SimpleHeroProps {
  onServiceSelect?: (service: string) => void;
}

const SimpleHero: React.FC<SimpleHeroProps> = ({ onServiceSelect }) => {
  const handleConsultingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onServiceSelect) {
      onServiceSelect('consulting');
    }
  };

  const handleWebDesignClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onServiceSelect) {
      onServiceSelect('web-design');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Code2 className="h-16 w-16 text-blue-600" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-16">
          Taku Media
        </h1>
        
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Choose the service that best fits your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <a 
            href="#consulting" 
            onClick={handleConsultingClick}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300 group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consulting Services</h2>
              <p className="text-gray-600 mb-6">
                Strategic guidance to transform your business and achieve measurable results
              </p>
              <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Explore Consulting
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
          
          <a 
            href="#web-design" 
            onClick={handleWebDesignClick}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300 group cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Web Design & SEO</h2>
              <p className="text-gray-600 mb-6">
                Stunning websites that convert visitors into customers with optimized performance
              </p>
              <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                Explore Web Services
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;