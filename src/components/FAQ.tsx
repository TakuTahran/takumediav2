import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does Taku Media offer?",
    answer: "We offer a comprehensive range of digital services including website design and development, conversion optimization, AI tool integration for small businesses, content strategy and creation, ad strategy consulting, and digital transformation consulting.",
  },
  {
    question: "Do you still offer website subscription services?",
    answer: "Yes! Our Website as a Service (WaaS) solution is still available. We handle all aspects of your website - from design and development to hosting and maintenance. You get a professional website without the technical hassle.",
  },
  {
    question: "How much do your consulting services cost?",
    answer: "Our consulting services are priced based on the scope of work and engagement model. We offer both project-based and retainer-based options. Book a consultation to discuss your specific needs and get a customized proposal.",
  },
  {
    question: "Can you help with both my website and digital strategy?",
    answer: "Absolutely! We specialize in providing holistic digital solutions that encompass both your online presence (websites) and digital strategy (consulting services). We believe in a comprehensive approach to digital transformation.",
  },
  {
    question: "What's included in your digital transformation consulting?",
    answer: "Our digital transformation consulting includes audit of your current digital presence, identification of improvement opportunities, strategic planning, implementation guidance, and ongoing support to ensure successful adoption of new technologies and processes.",
  },
  {
    question: "How long does a typical engagement last?",
    answer: "It depends on the service. Website projects typically take 2-4 weeks. Consulting engagements can range from one-time projects to ongoing monthly retainers based on your business needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about our services
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;