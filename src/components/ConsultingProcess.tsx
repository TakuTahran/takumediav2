import React, { useState } from 'react';
import { Search, FileSearch, Lightbulb, Play, BarChart3, Target } from 'lucide-react';

const steps = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    description: 'Understand the client\'s business, challenges, and goals through initial consultation calls or meetings. Learn what\'s working, what\'s not, and what success looks like. Gather data from websites, analytics, social profiles, or internal processes.',
    output: 'A clear understanding of the client\'s pain points and priorities',
    icon: Search,
  },
  {
    id: 'audit',
    number: '02',
    title: 'Audit & Analysis',
    description: 'Diagnose problems and uncover opportunities through comprehensive audits of websites, SEO, workflows, or marketing. Identify strengths, weaknesses, and growth gaps. Benchmark against competitors or industry standards.',
    output: 'A detailed report or roadmap outlining what needs to be improved',
    icon: FileSearch,
  },
  {
    id: 'strategy',
    number: '03',
    title: 'Strategy Development',
    description: 'Build a customized action plan by defining goals, KPIs, and timelines. Prioritize high-impact actions. Present strategy and get client buy-in for implementation.',
    output: 'A strategy deck or roadmap document (e.g., "90-Day Action Plan")',
    icon: Lightbulb,
  },
  {
    id: 'implementation',
    number: '04',
    title: 'Implementation & Guidance',
    description: 'Put the strategy into action with expert oversight and support. Provide templates, SOPs, or tool recommendations. Track progress and adjust as needed throughout the process.',
    output: 'Tangible progress — improved website, visibility, conversions, or workflows',
    icon: Play,
  },
  {
    id: 'review',
    number: '05',
    title: 'Review & Optimization',
    description: 'Evaluate results against goals and identify lessons and areas for continued growth. Offer ongoing consulting or retainer support for sustained success.',
    output: 'Final report + recommendations for scaling or maintenance',
    icon: BarChart3,
  },
];

const ConsultingProcess = () => {
  const [activeStep, setActiveStep] = useState(steps[0].id);

  const activeStepData = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our Consulting Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            A proven 5-step methodology to transform your business and achieve measurable results
          </p>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Titles */}
          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white bg-opacity-20 border-l-4 border-white' 
                      : 'bg-blue-700 bg-opacity-30 hover:bg-opacity-20'
                  }`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-200 mr-4">{step.number}</span>
                    <Icon className="h-6 w-6 text-blue-200 mr-4" />
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-blue-100'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Content */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              {React.createElement(activeStepData.icon, { className: "h-8 w-8 text-white mr-4" })}
              <h3 className="text-3xl font-bold text-white">
                {activeStepData.title}
              </h3>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-blue-100 leading-relaxed">
                {activeStepData.description}
              </p>
            </div>
            
            <div className="bg-blue-700 bg-opacity-50 rounded-lg p-5 border-l-4 border-white">
              <p className="text-sm font-semibold text-white uppercase tracking-wide mb-2">Deliverable</p>
              <p className="text-blue-100">{activeStepData.output}</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Horizontal Scrolling */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-6">
              {steps.map((step) => {
                const Icon = step.icon;
                
                return (
                  <div 
                    key={step.id}
                    className="flex-shrink-0 w-80 bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-xl font-bold text-blue-200 mr-3">{step.number}</span>
                      <Icon className="h-6 w-6 text-blue-200 mr-3" />
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-blue-100 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 border-l-2 border-white">
                      <p className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Deliverable</p>
                      <p className="text-blue-100 text-xs">{step.output}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-blue-200 text-sm">
              ← Scroll sideways to explore all steps →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingProcess;