import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    { 
      step: "1", 
      title: "Install SDK",
      text: "Install our SDK with just a few lines of code. No heavy dependencies.",
      description: "Get started in minutes with our lightweight, developer-friendly SDK."
    },
    { 
      step: "2", 
      title: "Connect Networks", 
      text: "Connect your preferred ad networks or use our one-click mediation setup.",
      description: "Access 30+ premium ad networks instantly."
    },
    { 
      step: "3", 
      title: "Launch & Optimize",
      text: "Launch and let our AI optimize your fill rates and earnings in real time.", 
      description: "Watch your revenue grow with AI optimization."
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  // Desktop fade-up animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  // Mobile scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works-mobile');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      
      // Calculate scroll progress
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      ));
      
      // Map progress to step index
      let stepIndex;
      if (scrollProgress < 0.33) {
        stepIndex = 0;
      } else if (scrollProgress < 0.66) {
        stepIndex = 1;
      } else {
        stepIndex = 2;
      }
      
      const clampedStep = Math.max(0, Math.min(steps.length - 1, stepIndex));
      
      if (clampedStep !== currentStep) {
        setCurrentStep(clampedStep);
      }
    };

    // Throttled scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial call to set correct step
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [currentStep, steps.length]);

  return (
    <>
      {/* Desktop Version */}
      <section 
        id="how-it-works" 
        className="hidden md:block py-28 bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-4 sm:px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-10 shadow-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-6xl font-bold mb-6">
                {step.step}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4">{step.text}</p>
              <p className="text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Version */}
      <section 
        id="how-it-works-mobile" 
        className="block md:hidden"
        style={{ height: '100vh' }}
      >
        <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 h-full">
          {/* Sticky Content Area */}
          <div className="sticky top-0 h-screen flex items-center justify-center px-4">
            <div className="max-w-lg mx-auto text-center">
              
              {/* Section Title */}
              <motion.h2 
                className="text-4xl font-bold mb-8 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                How It Works
              </motion.h2>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-teal-500 h-2 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-8 shadow-lg"
                >
                  {/* Step Number */}
                  <motion.div
                    className="text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-6xl font-bold mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    {steps[currentStep].step}
                  </motion.div>
                  
                  {/* Step Title */}
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {steps[currentStep].title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-lg text-gray-300 mb-4">
                    {steps[currentStep].text}
                  </p>
                  
                  {/* Additional Details */}
                  <p className="text-sm text-gray-400">
                    {steps[currentStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      i === currentStep 
                        ? 'bg-gradient-to-r from-indigo-500 to-teal-500 scale-125' 
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              {/* Scroll Hint */}
              {currentStep === 0 && (
                <motion.div
                  className="mt-8 text-gray-400 text-sm"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓ Scroll to see next step
                </motion.div>
              )}

              {/* Completion Message */}
              {currentStep === steps.length - 1 && (
                <motion.div
                  className="mt-8 text-teal-400 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  🎉 Ready to get started!
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
