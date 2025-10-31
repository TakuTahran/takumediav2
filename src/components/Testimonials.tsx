import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Taku Media transformed our digital presence with both a stunning website and a comprehensive content strategy that increased our leads by 150%.",
    author: "Sarah Johnson",
    role: "Founder, Artisan Cafe",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    content: "Their consulting services helped us implement AI tools that automated 60% of our customer service inquiries while their web design attracted more clients.",
    author: "Michael Chen",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    content: "The digital transformation consulting combined with their ongoing website maintenance has saved us countless hours and significantly improved our ROI.",
    author: "Emma Davis",
    role: "Marketing Director, GreenLeaf",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it - hear from businesses we've transformed
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-lg text-gray-600">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-base text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;