import React from 'react';
import { Monitor, Cloud, RefreshCcw, Headphones, Shield, Zap } from 'lucide-react';

const services = [
  {
    title: 'Custom Design',
    description: 'Professionally designed website that matches your brand identity',
    icon: Monitor,
  },
  {
    title: 'Cloud Hosting',
    description: 'Lightning-fast hosting with 99.9% uptime guarantee',
    icon: Cloud,
  },
  {
    title: 'Regular Updates',
    description: 'Keep your website fresh with regular content and feature updates',
    icon: RefreshCcw,
  },
  {
    title: '24/7 Support',
    description: 'Expert support team available around the clock',
    icon: Headphones,
  },
  {
    title: 'Security',
    description: 'Advanced security measures to protect your website',
    icon: Shield,
  },
  {
    title: 'Performance',
    description: 'Optimized for speed and conversion',
    icon: Zap,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything You Need to Succeed Online
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            One subscription, unlimited possibilities. Get everything you need to build and maintain a successful website.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg transition-all duration-200 hover:shadow-lg"
                >
                  <div>
                    <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {service.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;