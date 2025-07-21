import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    title: "AI-Powered Mediation",
    // Right side - brief content
    briefContent: "Unified mediation stack powered by real-time data — automatically delivers the best-paying ads with minimal latency.",
    // Left side - detailed content  
    detailedTitle: "Smarter decisions, higher revenue — all in real time.",
    detailedContent: "Our AI-powered mediation engine intelligently manages ad requests across multiple networks using adaptive waterfall and in-app bidding. It continuously learns from performance data to ensure that every impression is sold at the highest possible eCPM, with zero manual intervention. Say goodbye to static setups and hello to dynamic, automated optimization that boosts your fill rates and maximizes earnings — effortlessly.",
    icon: "🤖",
    features: [
      "Real-time bidding",
      "Adaptive waterfall",
      "Dynamic ad prioritization", 
      "AI-based decisioning",
      "Contextual optimization",
      "Smart fill rate control",
      "Bid-level transparency",
      "Auto-network balancing"
    ]
  },
  {
    title: "One SDK, Global Demand",
    briefContent: "One simple integration connects you to 30+ premium ad networks and global advertisers — boosting scale, revenue, and performance.",
    detailedTitle: "Integrate once. Unlock global reach.",
    detailedContent: "With a single, lightweight SDK integration, gain instant access to 30+ premium ad networks and high-performing global demand sources. Eliminate the hassle of multiple SDKs — streamline your monetization pipeline, reduce integration time, and boost revenue from day one. Whether your app serves a niche region or a global audience, our SDK ensures maximum scalability and consistent performance across formats.",
    icon: "🌐",
    features: [
      "One-time integration",
      "Instant global access",
      "30+ ad networks",
      "Unified demand pipeline",
      "Global advertiser pool",
      "Regional targeting support",
      "Lightweight SDK",
      "Cross-format compatibility"
    ]
  },
  {
    title: "High eCPM Optimisation",
    briefContent: "Real-time, AI-driven pricing and delivery logic ensure you earn top dollar on every impression — across formats, geos, and devices.",
    detailedTitle: "Maximize revenue with every single impression.",
    detailedContent: "Our advanced optimization engine continuously analyzes performance signals — such as geography, device type, ad format, and user behavior — to serve the highest-paying ads in real time. Using a combination of AI-driven pricing intelligence and performance-based placement, AdPocket ensures your inventory generates the maximum eCPM with minimal manual adjustments. Whether you rely on rewarded video, interstitials, or banners, you get optimized performance, every time.",
    icon: "📈",
    features: [
      "Dynamic pricing engine",
      "Geo & device-based targeting",
      "Format-specific tuning",
      "Continuous performance learning",
      "Intelligent fill rate control",
      "Auto eCPM refresh"
    ]
  },
  {
    title: "Privacy & Compliance",
    briefContent: "100% GDPR, CCPA, and LGPD compliant — with built-in consent flows and secure data practices that protect both users and your business.",
    detailedTitle: "Built for user trust and global standards.",
    detailedContent: "AdPocket is fully compliant with major global data privacy regulations including GDPR, CCPA, LGPD, and more. Our SDK is engineered with built-in consent management, user opt-out mechanisms, and secure data handling protocols — ensuring transparency, user safety, and advertiser trust. Whether you operate in Europe, the US, or emerging markets, you're covered with privacy-first architecture that scales responsibly.",
    icon: "🔒",
    features: [
      "GDPR & CCPA compliant",
      "Secure data handling",
      "Consent management built-in",
      "Global privacy support",
      "User opt-out ready",
      "Transparent data policies"
    ]
  },
  {
    title: "Real-Time Analytics",
    briefContent: "Stay in control with live dashboards and deep reporting — optimize revenue and performance instantly, backed by real-time data.",
    detailedTitle: "Make faster, smarter monetization decisions.",
    detailedContent: "Gain full visibility into your app's ad performance with real-time reporting and granular analytics. Track impressions, clicks, revenue, fill rates, and eCPM across ad networks, formats, geos, and devices — all in one powerful dashboard. With live insights and customizable reporting tools, AdPocket empowers you to optimize campaigns instantly, resolve issues faster, and unlock new monetization opportunities with data-driven confidence.",
    icon: "📊",
    features: [
      "Live performance metrics",
      "Granular breakdowns by geo & format",
      "Unified dashboard",
      "Customizable reporting",
      "Instant trend detection",
      "Smart alert system"
    ]
  },
  {
    title: "Easy Integration",
    briefContent: "Integrate in minutes with our lightweight SDK, clear documentation, and end-to-end developer support — zero friction, full speed.",
    detailedTitle: "Start monetizing in minutes — not weeks.",
    detailedContent: "AdPocket's SDK is lightweight, developer-friendly, and built for fast deployment. With clean documentation, responsive tech support, and modular architecture, you can go live with minimal effort and zero disruption to your app flow. Whether you're integrating rewarded video, interstitials, or banners, everything is streamlined for smooth onboarding and faster revenue generation.",
    icon: "⚡",
    features: [
      "Lightweight SDK",
      "Plug & play setup",
      "Developer-friendly docs",
      "Quick testing & QA support",
      "Cross-platform compatibility",
      "Fast go-live process"
    ]
  }
];

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const next = () => index < FEATURES.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  /* ---------- Desktop Card (Left Side - Detailed Content) ---------- */
  const CardDesktop = ({ feature }) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-3xl overflow-hidden"
      style={{ height: "520px" }}
    >
      {/* gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-3xl opacity-75">
        <div className="absolute inset-[2px] bg-gray-800/90 rounded-3xl"></div>
      </div>
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
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 text-3xl shadow-lg">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="text-indigo-300 text-sm font-medium mt-1">{feature.detailedTitle}</p>
          </div>
        </div>

        {/* detailed description */}
        <p className="text-gray-300 mb-6 leading-relaxed text-sm">{feature.detailedContent}</p>

        {/* features grid */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {feature.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 flex-shrink-0"></div>
              <span className="text-gray-300 text-xs">{feat}</span>
            </div>
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
        {/* Left side - Detailed content */}
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

        {/* Right side - Brief content list */}
        <div
          className="space-y-4 pl-4 border-l border-gray-700/60 custom-scrollbar overflow-x-hidden"
          style={{ height: "520px", overflowY: "auto" }}
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
                {/* Using brief content for right side */}
                <p className="text-sm text-gray-400 mt-1">{f.briefContent}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile carousel - Only brief content */}
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
                  <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                  {/* Only brief content on mobile */}
                  <p className="text-gray-300 text-sm leading-relaxed">{f.briefContent}</p>
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
