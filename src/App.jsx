import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "" }) => {
  const base = "rounded-xl px-6 py-3 font-medium transition transform hover:scale-105";
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    white: "bg-white text-indigo-600 hover:bg-gray-100 shadow",
  };
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
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
    <div className="bg-gradient-to-b from-purple-50 via-white to-teal-50 text-gray-800">

      {/* HERO */}
      <section className="relative overflow-hidden py-28 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-7xl font-extrabold leading-tight"
        >
          Power Your Apps with <span className="text-indigo-600">adpocket.ai</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 text-xl max-w-3xl mx-auto text-gray-600"
        >
          A next-generation monetization SDK that connects your app to global ad demand, intelligent mediation, and real‑time analytics—built for scale, speed, and revenue growth.
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex justify-center gap-6"
        >
          <Button>Get Started</Button>
          <Button variant="outline">View Documentation</Button>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Developers Choose adpocket.ai</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            { title: "One SDK, Global Demand", text: "Integrate once and access 30+ premium ad networks and demand partners across the world." },
            { title: "AI-Powered Mediation", text: "Our adaptive waterfall and in‑app bidding engine ensure you always get the highest eCPM." },
            { title: "High eCPM Optimization", text: "Real‑time insights help you tweak your strategy and maximize revenue with minimal effort." },
            { title: "Privacy & Compliance", text: "Fully GDPR and CCPA compliant. User trust and data security are at our core." },
            { title: "Real-Time Analytics", text: "Track impressions, fill rates, and revenue instantly with a beautiful, interactive dashboard." },
            { title: "Easy Integration", text: "Start monetizing in minutes with a lightweight, developer‑friendly SDK." },
          ].map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full mb-6 shadow-inner"></div>
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-500">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 bg-gradient-to-r from-teal-50 to-purple-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6 text-center">
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
              className="bg-white rounded-3xl p-10 shadow-lg"
            >
              <div className="text-indigo-600 text-6xl font-bold mb-6">{s.step}</div>
              <p className="text-lg text-gray-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUPPORTED FORMATS */}
      <section className="py-28">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Supported Ad Formats</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {[
            { format: "Rewarded Video", desc: "Engage users and boost retention with highly rewarding ad experiences." },
            { format: "Interstitial", desc: "Full-screen ads that drive high CPMs without hurting UX." },
            { format: "Banners", desc: "Lightweight, evergreen ad placements that blend with your app." },
            { format: "Native Ads", desc: "Seamlessly integrated ads that feel organic to your design." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl text-center transition"
            >
              <div className="h-24 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center text-gray-400">
                [icon]
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.format}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="py-28 bg-gradient-to-r from-purple-50 to-teal-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 bg-gray-200 rounded-3xl shadow-inner flex items-center justify-center text-gray-400 text-xl">
              [ Dashboard Screenshot ]
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Real-Time Insights & Control</h2>
            <p className="text-lg text-gray-600 mb-6">
              Track impressions, eCPMs, fill rates, and revenue in real time. Test, tweak, and deploy changes instantly from our intuitive dashboard.
            </p>
            <Button>Explore Analytics</Button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Loved by Developers Worldwide</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { name: "Sophia R.", company: "GameDev Studio", text: "“adpocket.ai doubled our ARPDAU in just two months. The integration was effortless.”" },
            { name: "Rahul K.", company: "Utility App Co.", text: "“Finally, an SDK that’s lightweight, transparent, and actually drives revenue.”" },
            { name: "Elena M.", company: "Creative Labs", text: "“The dashboard insights are a game changer. We can react instantly to trends.”" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-500 italic mb-6">“{t.text}”</p>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-gray-400">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 bg-gradient-to-r from-teal-50 to-purple-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Flexible Pricing for Every Stage</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { plan: "Starter", price: "$0", features: ["Up to 50k impressions/month", "Basic analytics", "Community support"] },
            { plan: "Pro", price: "$99/mo", features: ["Unlimited impressions", "Advanced reporting", "Priority support"] },
            { plan: "Enterprise", price: "Custom", features: ["Dedicated manager", "Custom integrations", "24/7 premium support"] },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">{p.plan}</h3>
              <p className="text-3xl font-extrabold text-indigo-600 mb-6">{p.price}</p>
              <ul className="space-y-2 mb-6 text-gray-500">
                {p.features.map((f, idx) => (
                  <li key={idx}>✓ {f}</li>
                ))}
              </ul>
              <Button className="w-full">Choose {p.plan}</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6 px-6">
          {[
            { q: "How long does integration take?", a: "Most developers integrate adpocket.ai in under 30 minutes with our lightweight SDK." },
            { q: "Is there any revenue share?", a: "We work on a transparent revenue share model. No hidden fees." },
            { q: "Which ad networks do you support?", a: "We partner with over 30 top-tier networks including Google, Meta, and AppLovin." },
            { q: "Is my user data safe?", a: "Absolutely. We are fully GDPR and CCPA compliant with strict data policies." },
          ].map((f, i) => (
            <div key={i} className="border rounded-2xl bg-white shadow">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between"
              >
                {f.q}
                <span className="font-bold text-xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {f.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Ready to Maximize Your App Revenue?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl mb-10 max-w-2xl mx-auto"
        >
          Join thousands of developers who trust adpocket.ai to deliver premium ads and unbeatable performance.
        </motion.p>
        <div className="flex justify-center gap-6">
          <Button variant="white">Download SDK</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
            Contact Us
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500 bg-gray-100">
        <div className="mb-4 flex justify-center gap-6">
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Careers</a>
        </div>
        © 2025 adpocket.ai
      </footer>

    </div>
  );
}
