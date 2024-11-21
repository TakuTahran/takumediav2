import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '218',
    description: 'Easily get started online with the basics.',
    features: [
      'Up to 8 Pages Included',
      'Hosting & Domain Name',
      'Mobile-Responsive Website',
      '& More…'
    ],
    cta: 'Learn more',
    popular: false
  },
  {
    name: 'Professional',
    price: '398',
    description: 'Establish your online presence with the essentials, our most popular package.',
    features: [
      'Up to 10 Pages Included',
      'Mobile-Responsive Website',
      'Hosting & Domain Name',
      'Google Ranking Strategy with 3 Keywords',
      'Quarterly Search Engine Optimization',
      '& More…'
    ],
    cta: 'Get started',
    popular: true
  },
  {
    name: 'Elite',
    price: '548',
    description: 'Grow your online presence with this peak performer.',
    features: [
      'Up to 12 Pages Included',
      '1 Stock Video Included',
      'Mobile-Responsive Website',
      'Hosting & Domain Name',
      'Google Ranking Strategy with 6 Keywords',
      'Monthly Search Engine Optimization',
      '& More…'
    ],
    cta: 'Contact sales',
    popular: false
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl ${
                plan.popular
                  ? 'bg-blue-600 text-white shadow-xl scale-105 z-10'
                  : 'bg-white text-gray-900 shadow-lg'
              } p-8 transform transition-all duration-200 hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className={`ml-1 text-xl ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    /month
                  </span>
                </div>
                <p className={`mt-6 text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <ul role="list" className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className={`h-6 w-6 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`} />
                      </div>
                      <p className={`ml-3 text-base ${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://calendly.com/contact-taku-media/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                  plan.popular
                    ? 'text-blue-600 bg-white hover:bg-blue-50'
                    : 'text-white bg-blue-600 hover:bg-blue-700'
                } transition-colors duration-200`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;