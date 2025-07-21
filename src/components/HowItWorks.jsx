// HowItWorks.jsx
import React from "react";

const HowItWorks = () => {
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

  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs md:text-sm font-medium mb-3 md:mb-4 animate-fadeIn">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6 animate-fadeInUp">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto animate-fadeInUp px-4">
              Three simple steps to transform your app monetization
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Connection Line (desktop only, except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-10" />
                )}

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-transparent z-10" />
                )}

                {/* Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="text-3xl md:text-4xl group-hover:animate-bounce">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-3 md:mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-slate-300 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action (Mobile) */}
          <div className="text-center mt-8 md:mt-12 lg:hidden">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium animate-pulse">
              <span>✨</span>
              <span>Ready to get started?</span>
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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .group:hover {
            transform: none;
          }
          
          .group:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
