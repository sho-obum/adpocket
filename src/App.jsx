import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormatAd from "./components/FormatAd";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQSection from "./components/FAQSection";
import ContactModal from "./components/ContactModal";
import PrivacyModal from "./components/PrivacyModal";
import RequestDemoModal from "./components/RequestDemoModal";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
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
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Careers Modal
const CareersModal = ({ isOpen, onClose }) => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "India",
      type: "Full-time",
      description:
        "Build exceptional user interfaces for our SDK dashboard and developer tools using React, TypeScript, and modern web technologies.",
    },
    {
      title: "Ad Operations Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description:
        "Manage ad inventory, optimize campaign performance, and work with demand partners to maximize revenue for our publisher network.",
    },
    {
      title: "Mobile SDK Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop and maintain our iOS and Android SDKs, focusing on performance optimization and seamless integration experiences.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Join Our Team</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-gray-300 mb-8">
                We're building the future of mobile advertising. Join our team
                of innovators and help shape how apps monetize globally.
              </p>

              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full">
                            {job.department}
                          </span>
                          <span className="bg-teal-600/20 text-teal-400 px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                          <span className="text-gray-400">
                            📍 {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">
                  Don't see the right role? We're always looking for talented
                  people.
                </p>
                <Button variant="primary">Send Us Your Resume</Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// REMOVED THE PROBLEMATIC LINE THAT WAS HERE:
// <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />;

const Navbar = ({ onContactOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

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
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="primary"
                className="ml-4"
                onClick={onContactOpen}
              >
                Get in touch
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
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-gray-300 hover:text-white py-2 text-lg w-full text-left"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => {
                      onContactOpen();
                      setIsOpen(false);
                    }}
                  >
                    Get in touch
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [isRequestDemoModalOpen, setIsRequestDemoModalOpen] = useState(false);

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
      <Navbar onContactOpen={() => setIsContactModalOpen(true)} />

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
          <Button
            onClick={() => setIsRequestDemoModalOpen(true)}
            variant="secondary "
            className="border "
          >
            Get in touch
          </Button>
          <Button onClick={() => setIsRequestDemoModalOpen(true)}>
            Request a demo
          </Button>
        </motion.div>
      </section>

      <div id="features">
        <WhyChooseUs />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="pricing">
        <FormatAd />
      </div>

      {/* DASHBOARD PREVIEW */}
      {/* DASHBOARD PREVIEW */}
      <section className="py-28 bg-gradient-to-r from-gray-800/30 to-gray-700/30 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Order 1 on mobile, Order 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Real-Time Insights & Control
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0">
              Track impressions, eCPMs, fill rates, and revenue in real time.
              Test, tweak, and deploy changes instantly from our intuitive
              dashboard.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button onClick={() => setIsRequestDemoModalOpen(true)}>
                Request a Demo!
              </Button>
            </div>
          </motion.div>

          {/* Image Content - Order 2 on mobile, Order 1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-1"
          >
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-800/50 border border-gray-700 rounded-3xl shadow-inner overflow-hidden">
              <img
                src="https://panel.digitarmedia.com/admin/uploads/sdk1753085789.png"
                className="w-full h-full object-contain p-4"
                alt="SDK Dashboard Preview"
                loading="lazy"
              />
            </div>
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

      <div id="docs">
        <FAQSection />
      </div>

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
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center bg-gray-900/80 backdrop-blur px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="mb-8">
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
              Adpocket.ai
            </span>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">
              Empowering developers to maximize app revenue through intelligent
              ad monetization.
            </p>
          </div>

          {/* Footer Links */}
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsCareersModalOpen(true)}
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Careers
            </button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © 2025 Adpocket.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <RequestDemoModal
        isOpen={isRequestDemoModalOpen}
        onClose={() => setIsRequestDemoModalOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setIsCareersModalOpen(false)}
      />
    </div>
  );
}
