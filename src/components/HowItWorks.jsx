import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HowItWorks = () => {
  return (
    <>
      {/* HOW IT WORKS - Desktop Version (Hidden on Mobile) */}
      <section id="how-it-works" className="hidden md:block py-28 bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">How It Works</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {[
            { step: "1", text: "Install our SDK with just a few lines of code. No heavy dependencies." },
            { step: "2", text: "Connect your preferred ad networks or use our one-click mediation setup." },
            { step: "3", text: "Launch and let our AI optimize your fill rates and earnings in real time." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-10 shadow-lg hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-6xl font-bold mb-6">
                {s.step}
              </div>
              <p className="text-lg text-gray-300">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS - Mobile Scroll-Triggered Version */}
      <section id="how-it-works-mobile" className="block md:hidden">
        {(() => {
          const [currentStep, setCurrentStep] = useState(0);
          
          const steps = [
            { 
              step: "1", 
              title: "Install SDK",
              text: "Install our SDK with just a few lines of code. No heavy dependencies.",
              description: "Get started in minutes with our lightweight, developer-friendly SDK. Simple integration that won't bloat your app."
            },
            { 
              step: "2", 
              title: "Connect Networks",
              text: "Connect your preferred ad networks or use our one-click mediation setup.",
              description: "Access 30+ premium ad networks instantly. Our intelligent mediation handles everything automatically."
            },
            { 
              step: "3", 
              title: "Launch & Optimize",
              text: "Launch and let our AI optimize your fill rates and earnings in real time.",
              description: "Watch your revenue grow as our AI continuously optimizes your ad performance and maximizes eCPMs."
            },
          ];

          // Scroll handler for step progression
          useEffect(() => {
            const handleScroll = () => {
              const section = document.getElementById('how-it-works-mobile');
              if (!section) return;
              
              const rect = section.getBoundingClientRect();
              const sectionHeight = section.offsetHeight;
              const viewportHeight = window.innerHeight;
              
              // Calculate scroll progress within the section
              const scrollProgress = Math.max(0, Math.min(1, 
                (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
              ));
              
              // Determine current step based on scroll progress
              const stepIndex = Math.floor(scrollProgress * steps.length);
              const clampedStep = Math.max(0, Math.min(steps.length - 1, stepIndex));
              
              if (clampedStep !== currentStep) {
                setCurrentStep(clampedStep);
              }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
          }, [currentStep, steps.length]);

          return (
            <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50" style={{ height: '300vh' }}>
              {/* Fixed Content Area */}
              <div className="sticky top-0 h-screen flex items-center justify-center px-4">
                <div className="max-w-lg mx-auto text-center">
                  
                  {/* Section Title */}
                  <motion.h2 
                    className="text-4xl font-bold mb-8 text-white"
                    key="title"
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

                  {/* Step Indicator Dots */}
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
                  
                  {/* Scroll Hint (only show on first step) */}
                  {currentStep === 0 && (
                    <motion.div
                      className="mt-8 text-gray-400 text-sm"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ↓ Scroll to see next step
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </section>
    </>
  );
};

export default HowItWorks;
