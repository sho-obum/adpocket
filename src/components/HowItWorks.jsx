// HowItWorks.jsx
import React, { useState, useEffect, useRef } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Easy Setup",
      subtitle: "Get started in minutes",
      description: "Integrate our lightweight SDK with just a few lines of code. No complex configuration needed.",
      details: "Our SDK is built for developers, by developers. Simple installation, comprehensive documentation, and instant support.",
      icon: "🚀"
    },
    {
      number: "02", 
      title: "Smart Connect",
      subtitle: "One-click integration",
      description: "Connect to premium ad networks instantly or let our AI choose the best partners for you.",
      details: "Access over 50+ ad networks with automated mediation. Our intelligent system optimizes for your specific audience.",
      icon: "🔗"
    },
    {
      number: "03",
      title: "Maximize Revenue", 
      subtitle: "AI-powered optimization",
      description: "Watch your earnings grow with real-time optimization and advanced analytics dashboard.",
      details: "Our machine learning algorithms continuously optimize fill rates, eCPMs, and user experience for maximum revenue.",
      icon: "📈"
    }
  ];

  // Mobile scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth >= 768) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      const inView = rect.top <= 0 && rect.bottom >= windowHeight;
      setIsInView(inView);

      if (inView) {
        // Calculate progress through the section
        const sectionHeight = section.offsetHeight - windowHeight;
        const scrolledDistance = Math.abs(rect.top);
        const progress = Math.min(scrolledDistance / sectionHeight, 1);
        
        // Map progress to steps
        const stepProgress = progress * steps.length;
        const currentStepIndex = Math.min(Math.floor(stepProgress), steps.length - 1);
        
        setActiveStep(currentStepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  // Animation variants for smooth transitions
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  const slideIn = {
    initial: { opacity: 0, x: 50, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.9 }
  };

  return (
    <div className="w-full">
      {/* DESKTOP VERSION */}
      <section className="hidden md:block py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4 animate-fadeIn">
              Simple Process
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 animate-fadeInUp">
              How It Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto animate-fadeInUp">
              Three simple steps to transform your app monetization
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-10" />
                )}

                {/* Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="text-4xl group-hover:animate-bounce">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE VERSION - Scroll-Driven */}
      <section 
        ref={sectionRef}
        className="md:hidden relative bg-slate-900"
        style={{ height: '500vh' }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20" />
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          <div className="px-6 py-8">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div 
                className={`inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium mb-3 transition-opacity duration-500 ${
                  isInView ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Simple Process
              </div>
              <h2 
                className={`text-3xl font-bold text-white mb-2 transform transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                How It Works
              </h2>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index <= activeStep 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-slate-600'
                    }`}
                    style={{
                      transform: `scale(${
                        index === activeStep ? 1.5 : index <= activeStep ? 1.25 : 1
                      })`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="max-w-sm mx-auto">
              <div
                key={activeStep}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center shadow-2xl transform transition-all duration-500 ease-out"
                style={{
                  animation: 'slideInScale 0.5s ease-out'
                }}
              >
                {/* Icon & Number */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div 
                    className="text-4xl animate-wiggle"
                    style={{ animationDelay: '0.2s' }}
                  >
                    {steps[activeStep].icon}
                  </div>
                  <div 
                    className="text-4xl font-bold text-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text animate-pulse"
                    style={{ animationDelay: '0.1s' }}
                  >
                    {steps[activeStep].number}
                  </div>
                </div>

                {/* Content */}
                <div 
                  className="transform transition-all duration-500 ease-out"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out',
                    animationDelay: '0.3s',
                    animationFillMode: 'backwards'
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">
                    {steps[activeStep].subtitle}
                  </p>
                  <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {steps[activeStep].details}
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-8">
              {activeStep < steps.length - 1 ? (
                <div className="text-slate-400 text-xs animate-pulse">
                  <div>Continue scrolling</div>
                  <div className="text-sm mt-1 animate-bounce">
                    ↓
                  </div>
                </div>
              ) : (
                <div className="text-green-400 text-sm font-medium animate-fadeIn">
                  ✨ Ready to start!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out;
        }
        
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
