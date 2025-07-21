import React, { useState, useEffect, useRef } from "react";
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
  const sectionRef = useRef(null);

  // Desktop fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  // CORRECTED Mobile scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      
      // Section is in viewport
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Calculate how far we've scrolled into the section
        const scrolledIntoSection = Math.abs(rect.top);
        const maxScroll = sectionHeight - windowHeight;
        
        // Progress from 0 to 1
        const progress = Math.min(scrolledIntoSection / maxScroll, 1);
        
        // Determine step based on progress with proper thresholds
        let newStep;
        if (progress < 0.25) {
          newStep = 0;
        } else if (progress < 0.75) {
          newStep = 1;
        } else {
          newStep = 2;
        }
        
        if (newStep !== currentStep) {
          setCurrentStep(newStep);
        }
      }
    };

    // Optimized scroll listener
    let rafId;
    const throttledScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [currentStep]);

  return (
    <>
      {/* Desktop Version - Unchanged */}
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

      {/* FIXED Mobile Version */}
      <div 
        ref={sectionRef}
        className="block md:hidden bg-gradient-to-r from-gray-800/50 to-gray-700/50"
        style={{ height: '200vh' }} // Reduced but sufficient height
      >
        {/* Sticky Container */}
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
                animate={{ 
                  width: `${((currentStep + 1) / steps.length) * 100}%` 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-8 shadow-lg"
              >
                {/* Step Number */}
                <motion.div
                  className="text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-6xl font-bold mb-4"
                  animate={{ scale: [0.95, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
                className="mt-6 text-gray-400 text-sm"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓ Continue scrolling
              </motion.div>
            )}

            {/* Completion */}
            {currentStep === steps.length - 1 && (
              <motion.div
                className="mt-6 text-teal-400 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                ✨ All steps completed!
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
