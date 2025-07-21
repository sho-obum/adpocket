import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormatAd from "./components/FormatAd";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";

const Button = ({ children, variant = "primary", className = "" }) => {
  const base =
    "rounded-xl px-6 py-3 font-medium transition transform hover:scale-105";
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-lg hover:shadow-xl",
    outline:
      "border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500",
    white: "bg-white text-indigo-600 hover:bg-gray-100 shadow-lg",
    dark: "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Docs", href: "#docs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
                Adpocket.ai
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="primary" className="ml-4">
                Get Started
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-8 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 flex flex-col justify-center space-y-1">
                  <motion.div
                    animate={
                      isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                    className="w-6 h-0.5 bg-white origin-center transition-all duration-300"
                  />
                  <motion.div
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 bg-white transition-all duration-300"
                  />
                  <motion.div
                    animate={
                      isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    className="w-6 h-0.5 bg-white origin-center transition-all duration-300"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-gray-300 hover:text-white py-2 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button variant="primary" className="w-full">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  const [open, setOpen] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden py-32 pt-48 text-center px-4 sm:px-6"
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
        >
          Power Your Apps with{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
            Adpocket.ai
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300 px-4"
        >
          A next-generation monetization SDK that connects your app to global ad
          demand, intelligent mediation, and real‑time analytics—built for
          scale, speed, and revenue growth.
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
        >
          <Button>Get Started</Button>
          <Button variant="outline">View Documentation</Button>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}

      <WhyChooseUs/>

      {/* HOW IT WORKS */}

      <HowItWorks />

      {/* SUPPORTED FORMATS - Custom Horizontal Layout */}
      <FormatAd />

      {/* DASHBOARD PREVIEW */}
      <section className="py-28 bg-gradient-to-r from-gray-800/30 to-gray-700/30 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 bg-gray-800/50 border border-gray-700 rounded-3xl shadow-inner flex items-center justify-center text-gray-500 text-xl">
              [ Dashboard Screenshot ]
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Real-Time Insights & Control
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Track impressions, eCPMs, fill rates, and revenue in real time.
              Test, tweak, and deploy changes instantly from our intuitive
              dashboard.
            </p>
            <Button>Explore Analytics</Button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Loved by Developers Worldwide
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sophia R.",
              company: "GameDev Studio",
              text: "adpocket.ai doubled our ARPDAU in just two months. The integration was effortless.",
            },
            {
              name: "Rahul K.",
              company: "Utility App Co.",
              text: "Finally, an SDK that's lightweight, transparent, and actually drives revenue.",
            },
            {
              name: "Elena M.",
              company: "Creative Labs",
              text: "The dashboard insights are a game changer. We can react instantly to trends.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-8 shadow-md hover:shadow-xl hover:bg-gray-800/70 transition-all duration-300"
            >
              <p className="text-gray-300 italic mb-6">"{t.text}"</p>
              <div className="font-bold text-white">{t.name}</div>
              <div className="text-sm text-gray-500">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-28 bg-gradient-to-r from-gray-800/30 to-gray-700/30 px-4 sm:px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Flexible Pricing for Every Stage
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              plan: "Starter",
              price: "$0",
              features: [
                "Up to 50k impressions/month",
                "Basic analytics",
                "Community support",
              ],
            },
            {
              plan: "Pro",
              price: "$99/mo",
              features: [
                "Unlimited impressions",
                "Advanced reporting",
                "Priority support",
              ],
            },
            {
              plan: "Enterprise",
              price: "Custom",
              features: [
                "Dedicated manager",
                "Custom integrations",
                "24/7 premium support",
              ],
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-gray-800/70 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{p.plan}</h3>
              <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent mb-6">
                {p.price}
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose {p.plan}</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How long does integration take?",
              a: "Most developers integrate adpocket.ai in under 30 minutes with our lightweight SDK.",
            },
            {
              q: "Is there any revenue share?",
              a: "We work on a transparent revenue share model. No hidden fees.",
            },
            {
              q: "Which ad networks do you support?",
              a: "We partner with over 30 top-tier networks including Google, Meta, and AppLovin.",
            },
            {
              q: "Is my user data safe?",
              a: "Absolutely. We are fully GDPR and CCPA compliant with strict data policies.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between text-white hover:bg-gray-800/70 transition-colors duration-200 rounded-2xl"
              >
                {f.q}
                <span className="font-bold text-xl text-gray-400">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-300 overflow-hidden"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-center px-4 sm:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6"
        >
          Ready to Maximize Your App Revenue?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
        >
          Join thousands of developers who trust adpocket.ai to deliver premium
          ads and unbeatable performance.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button variant="white">Download SDK</Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-indigo-600"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-400 bg-gray-900/50 backdrop-blur px-4">
        <div className="mb-4 flex flex-wrap justify-center gap-6">
          <a
            href="#docs"
            className="hover:text-white transition-colors duration-200"
          >
            Docs
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="#careers"
            className="hover:text-white transition-colors duration-200"
          >
            Careers
          </a>
        </div>
        <p>© 2025 adpocket.ai</p>
      </footer>
    </div>
  );
}
