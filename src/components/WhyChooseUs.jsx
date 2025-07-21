import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    title: "One SDK, Global Demand",
    text: "Integrate once and access 30+ premium ad networks and demand partners worldwide.",
    icon: "🌐",
    tags: ["Global reach", "30+ Networks"],
  },
  {
    title: "AI-Powered Mediation",
    text: "Adaptive waterfall and in-app bidding ensure you always get the highest eCPM.",
    icon: "🤖",
    tags: ["Smart optimization", "Real-time bidding"],
  },
  {
    title: "High eCPM Optimisation",
    text: "Real-time insights let you tweak strategy and maximise revenue with minimal effort.",
    icon: "📈",
    tags: ["Revenue boost", "Live analytics"],
  },
  {
    title: "Privacy & Compliance",
    text: "Fully GDPR / CCPA compliant. User trust and data security are at our core.",
    icon: "🔒",
    tags: ["GDPR ready", "CCPA compliant"],
  },
  {
    title: "Real-Time Analytics",
    text: "Track impressions, fill rates and revenue instantly with an interactive dashboard.",
    icon: "📊",
    tags: ["Live dashboard", "Instant insights"],
  },
  {
    title: "Easy Integration",
    text: "Start monetising in minutes with a lightweight, developer-friendly SDK.",
    icon: "⚡",
    tags: ["Quick setup", "Lightweight"],
  },
];

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const next = () => index < FEATURES.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  /* ---------- Desktop Card ---------- */
  const CardDesktop = ({ feature }) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-3xl overflow-hidden"
      style={{ height: "400px" }}
    >
      {/* static gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-3xl opacity-75">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-3xl"></div>
      </div>
      {/* hover-animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-3xl"></div>
      </div>

      {/* content */}
      <motion.div
        className="relative z-10 h-full flex flex-col p-8 group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* icon + title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 text-3xl shadow-lg">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
        </div>

        {/* description */}
        <p className="text-gray-300 flex-1 mb-6 leading-relaxed">{feature.text}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {feature.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="features" className="py-28 px-4 sm:px-6 overflow-x-hidden">
      {/* custom scrollbar CSS */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1, #14b8a6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #4f46e5, #0f766e);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6366f1 #1f2937;
        }
      `}</style>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Why Clients Choose Adpocket.ai
      </h2>

      {/* Desktop split-screen */}
      <div className="hidden lg:grid grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="relative px-16">
          <AnimatePresence mode="wait">
            <CardDesktop feature={FEATURES[index]} />
          </AnimatePresence>

          {/* arrows */}
          {index > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10
                         bg-gray-800/80 border border-gray-600 rounded-full p-3 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {index < FEATURES.length - 1 && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10
                         bg-gray-800/80 border border-gray-600 rounded-full p-3 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {FEATURES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-gradient-to-r from-indigo-500 to-teal-500 scale-125"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* right: scrollable list */}
        <div
          className="space-y-4 pl-4 border-l border-gray-700/60 custom-scrollbar overflow-x-hidden"
          style={{ height: "400px", overflowY: "auto" }}
        >
          {FEATURES.map((f, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`flex items-start gap-4 w-full text-left p-4 rounded-xl transition-all duration-300  ${
                i === index ? "bg-gray-800/60 border border-gray-600 shadow-lg" : ""
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 text-xl shrink-0">
                {f.icon}
              </div>
              <div className="flex-1">
                <span className={`block text-base font-medium ${
                  i === index ? "text-white" : "text-gray-300"
                }`}>
                  {f.title}
                </span>
                <p className="text-sm text-gray-400 mt-1">{f.text}</p>
                
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="lg:hidden max-w-md mx-auto relative px-4 overflow-hidden">
        <AnimatePresence>
          {index > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10
                         bg-gray-800/80 border border-gray-600 rounded-full p-3 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}
          {index < FEATURES.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10
                         bg-gray-800/80 border border-gray-600 rounded-full p-3 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {FEATURES.map((f, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: i * 0.1 }}
  className="bg-gray-800/60 backdrop-blur border border-gray-700 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center"
>
  {/* icon */}
  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-500 text-3xl shadow-lg">
    {f.icon}
  </div>
  {/* title */}
  <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
  {/* text */}
  <p className="text-gray-300 mb-4">{f.text}</p>
  {/* tags - hidden on mobile */}
  <div className="hidden flex-wrap gap-2">
    {f.tags.map((tag, j) => (
      <span
        key={j}
        className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300"
      >
        {tag}
      </span>
    ))}
  </div>
</motion.div>

              </div>
            ))}
          </motion.div>
        </div>

        {/* dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gradient-to-r from-indigo-500 to-teal-500 scale-110"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
