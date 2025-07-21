import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FormatAd = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const formats = [
    {
      format: "Rewarded Video",
      desc: "Engage users and boost retention with highly rewarding ad experiences. Perfect for mobile games and apps.",
      tags: ["High engagement", "User retention", "Premium CPMs"],
      icon: "🎬",
    },
    {
      format: "Interstitial",
      desc: "Full-screen ads that drive high CPMs without hurting UX. Ideal for natural break points.",
      tags: ["Full-screen impact", "High visibility", "Natural timing"],
      icon: "📱",
    },
    {
      format: "Banner Ads",
      desc: "Lightweight, evergreen ad placements that blend seamlessly with your app design.",
      tags: ["Always visible", "Low latency", "Multiple sizes"],
      icon: "📊",
    },
    {
      format: "Native Ads",
      desc: "Seamlessly integrated ads that feel organic to your design and user experience.",
      tags: ["Custom styling", "Organic feel", "High CTR"],
      icon: "🎯",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < formats.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < formats.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  // Card Component for reusability
  const FormatCard = ({ f, index }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-gray-800/50 backdrop-blur rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden group"
    >
      {/* Static Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl opacity-75">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-2xl"></div>
      </div>

      {/* Hover Animated Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Row 1: Icon + Heading with Line */}
        <div className="flex items-center gap-6 mb-4">
          {/* Icon with Big Square Background */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-2xl flex items-center justify-center px-8 py-4 shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-3xl drop-shadow-lg">{f.icon}</span>
            </div>
          </div>

          {/* Heading + Horizontal Line */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {f.format}
            </h3>
            <div className="border-b border-gray-600"></div>
          </div>
        </div>

        {/* Row 2: Description Text */}
        <p className="text-gray-300 mb-4 text-left leading-relaxed">{f.desc}</p>

        {/* Row 3: Tags */}
        <div className="flex flex-wrap gap-2">
          {f.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-28 px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Supported Ad Formats
      </h2>

      {/* Desktop Grid Layout (lg screens and up) */}
      <div className="hidden lg:block max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {formats.map((f, i) => (
            <FormatCard key={i} f={f} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Carousel (below lg screens) */}
      <div className="lg:hidden max-w-4xl mx-auto relative">
        {/* Navigation Arrows */}
        <AnimatePresence>
          {currentIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={prevSlide}
              className="absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-12 z-10 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
          )}

          {currentIndex < formats.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={nextSlide}
              className="absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-12 z-10 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Carousel Cards */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {formats.map((f, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
                <FormatCard f={f} index={0} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator - Only for Mobile */}
        <div className="flex justify-center mt-8 space-x-2">
          {formats.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-gradient-to-r from-indigo-500 to-teal-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatAd;
