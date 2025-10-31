import React from 'react';
import { Monitor, Cloud, RefreshCcw, Headphones, Shield, Zap, TrendingUp, Bot, FileText, PenTool, DollarSign, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Custom Website Design',
    description: 'Professionally designed websites that match your brand identity and convert visitors into customers',
    icon: Monitor,
  },
  {
    title: 'Cloud Hosting',
    description: 'Lightning-fast hosting with 99.9% uptime guarantee and automatic scaling',
    icon: Cloud,
  },
  {
    title: 'Regular Updates',
    description: 'Keep your website fresh with regular content and feature updates',
    icon: RefreshCcw,
  },
  {
    title: 'Conversion Optimization',
    description: 'Data-driven strategies to increase conversions and revenue from your website',
    icon: TrendingUp,
  },
  {
    title: 'AI Tool Integration',
    description: 'Implement cutting-edge AI solutions to automate processes and enhance customer experience',
    icon: Bot,
  },
  {
    title: 'Content Strategy',
    description: 'Comprehensive content strategies that engage your audience and drive business growth',
    icon: FileText,
  },
  {
    title: 'Content Creation',
    description: 'Professional copywriting and content creation services tailored to your brand',
    icon: PenTool,
  },
  {
    title: 'Ad Strategy Consulting',
    description: 'Expert guidance on paid advertising campaigns across multiple platforms',
    icon: DollarSign,
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end consulting to modernize your business operations and digital presence',
    icon: Lightbulb,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            From stunning websites to strategic consulting - everything you need to thrive in the digital world.
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