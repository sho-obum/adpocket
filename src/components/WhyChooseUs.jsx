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

  /* ---------- helpers ---------- */
  const next = () => index < FEATURES.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  /* ---------- card reuse ---------- */
  const Card = ({ feature }) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-3xl overflow-hidden"
      style={{ height: "400px" }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-3xl opacity-75">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-3xl"></div>
      </div>
      
      {/* Hover animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 group">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 h-full flex flex-col p-8"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Row: Icon + Title (Parallel Layout) */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center
                          rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 text-3xl shadow-lg">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold text-white">
            {feature.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed flex-1 mb-6">{feature.text}</p>

        {/* Tags/Badges row */}
        <div className="flex flex-wrap gap-2">
          {feature.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  /* ---------- layout ---------- */
  return (
    <section id="features" className="py-28 px-4 sm:px-6 overflow-x-hidden">
      {/* Custom Scrollbar Styles */}
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
        Why Developers Choose adpocket.ai
      </h2>

      {/*    ------------- DESKTOP (≥ lg) -------------    */}
      <div className="hidden lg:grid grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* left : carousel */}
        <div className="relative px-16">
          <AnimatePresence mode="wait">
            <Card key={index} feature={FEATURES[index]} />
          </AnimatePresence>

          {/* Arrows positioned outside the card */}
          <AnimatePresence>
            {index > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                          bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 
                          rounded-full p-3 transition-all duration-300 hover:scale-110"
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

            {index < FEATURES.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                          bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 
                          rounded-full p-3 transition-all duration-300 hover:scale-110"
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

          {/* Dot slider below card */}
          <div className="flex justify-center mt-8 space-x-2">
            {FEATURES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-gradient-to-r from-indigo-500 to-teal-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* right : vertical list */}
        <div
          className="space-y-4 pl-4 border-l border-gray-700/60 custom-scrollbar overflow-x-hidden"
          style={{ height: "400px", overflowY: "auto" }}
        >
          {FEATURES.map((f, i) => (
            <motion.button
              key={f.title}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`flex items-center gap-4 w-full text-left p-4 rounded-xl
                          transition-all duration-300
                          ${
                            i === index
                              ? "bg-gray-800/60 border border-gray-600 shadow-lg"
                              : "border border-transparent"
                          }`}
            >
              <div className="w-12 h-12 flex items-center justify-center
                              rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 text-xl shrink-0">
                {f.icon}
              </div>
              <div className="flex-1">
                <span
                  className={`text-base font-medium block ${
                    i === index ? "text-white" : "text-gray-300"
                  }`}
                >
                  {f.title}
                </span>
                <span className="text-sm text-gray-400 mt-1 block">
                  {f.text.substring(0, 50)}...
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/*    ------------- MOBILE / TABLET (carousel only) -------------    */}
      <div className="lg:hidden max-w-md mx-auto relative px-12">
        {/* Navigation Arrows for Mobile - Outside card */}
        <AnimatePresence>
          {index > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                        bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 
                        rounded-full p-3 transition-all duration-300 hover:scale-110"
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

          {index < FEATURES.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                        bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 
                        rounded-full p-3 transition-all duration-300 hover:scale-110"
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

        {/* swipe container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
          >
            {FEATURES.map((f, i) => (
              <div key={f.title} className="w-full px-2 shrink-0">
                <Card feature={f} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* dots for mobile */}
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
