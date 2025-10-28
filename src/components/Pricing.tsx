import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Launch',
    price: '$99',
    description: 'For: Small local businesses, trades, or freelancers just needing an online presence.',
    setupFee: '$499',
    features: [
      '1–5 pages (Home, About, Services, Contact)',
      'Mobile-friendly responsive design',
      'Custom domain setup',
      'Hosting included',
      'Basic SEO setup (meta titles, Google listing)',
      '1 revision per month',
      'Basic contact form',
      'Google My Business setup',
      'Tailored SEO Strategy',
      'Standard support (email)'
    ],
    addons: [
      'Extra pages ($50/page)',
      'Ongoing content or blog writing ($100/post)'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Business',
    price: '$199',
    description: 'For: Growing service-based businesses needing leads and branding.',
    setupFee: '$499',
    features: [
      'Everything in Launch +',
      'Up to 10 pages',
      'Custom design (not template-based)',
      'Hosting + SSL + domain',
      'Contact forms with spam protection',
      'Tailored SEO Strategy',
      'Monthly analytics reports',
      '2 content updates/month',
      'Priority email + chat support'
    ],
    addons: [
      'Extra pages ($50/page)',
      'Ongoing content or blog writing ($100/post)'
    ],
    cta: 'Choose Plan',
    popular: true
  },
  {
    name: 'Scale',
    price: '$499',
    description: 'For: Established businesses, ecommerce, or those needing more functionality.',
    setupFee: '$499',
    features: [
      'Everything in Business +',
      'Up to 20 products or services',
      'Advanced SEO Strategy',
      'Monthly website backup',
      'Unlimited edits',
      'Dedicated account manager'
    ],
    addons: [
      'Email marketing setup',
      'Paid ads management',
      'Ongoing content or blog writing ($100/post)'
    ],
    cta: 'Contact Sales',
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
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={`ml-1 text-xl ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    /month
                  </span>
                </div>
                {plan.setupFee && (
                  <p className={`mt-2 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    Setup Fee: {plan.setupFee}
                  </p>
                )}
                <p className={`mt-4 text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
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

                {plan.addons.length > 0 && (
                  <div className={`mt-6 pt-4 border-t ${plan.popular ? 'border-blue-200' : 'border-gray-200'}`}>
                    <h4 className={`font-semibold ${plan.popular ? 'text-blue-100' : 'text-gray-900'}`}>Add-ons:</h4>
                    <ul role="list" className="mt-2 space-y-2">
                      {plan.addons.map((addon) => (
                        <li key={addon} className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className={`h-2 w-2 rounded-full mt-2 ${plan.popular ? 'bg-blue-200' : 'bg-blue-600'}`} />
                          </div>
                          <p className={`ml-3 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                            {addon}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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