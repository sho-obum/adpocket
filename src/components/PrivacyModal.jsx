import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
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

const PrivacyModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Use' },
    { id: 'cookies', label: 'Cookie Settings' },
    { id: 'compliance', label: 'Data Compliance' },
    { id: 'ads', label: 'Ad Standards' }
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
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Legal & Privacy</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-t-lg transition-colors text-sm font-medium ${
                      activeTab === tab.id
                        ? 'bg-indigo-600 text-white border-b-2 border-indigo-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto text-gray-300 space-y-6">
                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">1. Data Collection</h3>
                      <div className="mb-4">
                        <h4 className="font-medium text-indigo-400 mb-2">What Data Is Collected:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>IP address and device information (device type, operating system, browser)</li>
                          <li>Browsing behavior and interaction data</li>
                          <li>Cookies and similar tracking technologies</li>
                          <li>Location data (with explicit consent)</li>
                          <li>App usage analytics and performance metrics</li>
                          <li>Contact information when provided voluntarily</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-400 mb-2">How It's Collected:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Through website visits and SDK integration</li>
                          <li>Contact forms and user registration</li>
                          <li>Cookies and local storage technologies</li>
                          <li>Third-party analytics tools (Google Analytics, etc.)</li>
                          <li>API calls and server logs</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">2. Purpose of Collection</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>User Experience:</strong> Improving platform functionality and personalization</li>
                        <li><strong>Analytics:</strong> Understanding usage patterns and optimizing performance</li>
                        <li><strong>Ad Targeting:</strong> Delivering relevant advertisements and measuring effectiveness</li>
                        <li><strong>Customer Service:</strong> Providing technical support and account management</li>
                        <li><strong>Security:</strong> Preventing fraud and maintaining platform integrity</li>
                        <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and industry standards</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">3. Third-Party Sharing</h3>
                      <p className="mb-3">We may share data with trusted partners including:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Analytics Partners:</strong> Google Analytics, Mixpanel for usage insights</li>
                        <li><strong>Advertising Networks:</strong> Ad demand partners for campaign optimization</li>
                        <li><strong>Cloud Providers:</strong> AWS, Google Cloud for data processing and storage</li>
                        <li><strong>Security Services:</strong> Fraud detection and prevention tools</li>
                        <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                      </ul>
                      <p className="mt-3 text-sm text-yellow-400">We never sell personal data to third parties for their own marketing purposes.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">4. Data Protection Measures</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Encryption:</strong> All data transmitted using TLS 1.3 encryption</li>
                        <li><strong>Secure Servers:</strong> Industry-standard data centers with 24/7 monitoring</li>
                        <li><strong>Access Control:</strong> Restricted access with multi-factor authentication</li>
                        <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                        <li><strong>Data Minimization:</strong> Only collecting necessary data for specified purposes</li>
                        <li><strong>Retention Limits:</strong> Automatic deletion of data after specified periods</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">5. Your Rights</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">Data Rights:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">How to Exercise Rights:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Email: privacy@adpocket.ai</li>
                            <li>Online form: Submit request</li>
                            <li>Account dashboard: Self-service options</li>
                            <li>Response time: Within 30 days</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">6. Contact Information</h3>
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <p className="mb-2"><strong>Data Protection Officer:</strong> privacy@adpocket.ai</p>
                        <p className="mb-2"><strong>General Privacy Questions:</strong> legal@adpocket.ai</p>
                        <p className="mb-2"><strong>Mailing Address:</strong> AdPocket AI Legal Team, [Address]</p>
                        <p className="text-sm text-gray-400">For urgent privacy concerns, please mark your email as "URGENT - Privacy"</p>
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'terms' && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
                      <p>By accessing or using AdPocket.ai services, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you may not use our services.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">2. User Responsibilities</h3>
                      <p className="mb-3">Users must not:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Misuse the platform for illegal activities</li>
                        <li>Violate advertising policies or industry standards</li>
                        <li>Attempt to circumvent security measures</li>
                        <li>Share account credentials with unauthorized parties</li>
                        <li>Generate fake traffic or engagement</li>
                        <li>Reverse engineer or attempt to access source code</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li><strong>Platform Ownership:</strong> AdPocket.ai owns all rights to the platform, SDK, and documentation</li>
                        <li><strong>User Content:</strong> Users retain rights to their content but grant us license to operate the service</li>
                        <li><strong>Trademarks:</strong> AdPocket.ai and related marks are our property</li>
                        <li><strong>Restrictions:</strong> No copying, modifying, or distributing our proprietary technology</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">4. Prohibited Activities</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-red-400 mb-2">Strictly Prohibited:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Fraud or deceptive practices</li>
                            <li>Spamming or unsolicited communications</li>
                            <li>Data scraping or unauthorized access</li>
                            <li>Malware distribution</li>
                            <li>Service disruption attempts</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-400 mb-2">Consequences:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Account suspension or termination</li>
                            <li>Legal action if warranted</li>
                            <li>Forfeiture of unpaid earnings</li>
                            <li>Reporting to authorities</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">5. Disclaimers & Limitation of Liability</h3>
                      <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
                        <p className="mb-2"><strong>Service "As-Is":</strong> Platform provided without warranties</p>
                        <p className="mb-2"><strong>Third-Party Actions:</strong> Not liable for partner or advertiser actions</p>
                        <p className="mb-2"><strong>Service Disruptions:</strong> No guarantee of 100% uptime</p>
                        <p className="text-sm">Maximum liability limited to fees paid in the last 12 months.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">6. Governing Law & Modifications</h3>
                      <p className="mb-3"><strong>Jurisdiction:</strong> These terms are governed by [State/Country] law.</p>
                      <p><strong>Updates:</strong> We may modify these terms at any time. Continued use constitutes acceptance of changes.</p>
                    </section>
                  </div>
                )}

                {activeTab === 'cookies' && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Cookie Management</h3>
                      <p className="mb-4">Control how cookies are used on our platform for tracking, advertising, and personalization.</p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-green-400">Essential Cookies</h4>
                            <span className="text-sm bg-green-600/20 text-green-400 px-2 py-1 rounded">Always Active</span>
                          </div>
                          <p className="text-sm text-gray-300">Required for basic site functionality, security, and user authentication. Cannot be disabled.</p>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-blue-400">Performance Cookies</h4>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                          <p className="text-sm text-gray-300">Analytics and optimization cookies to understand how you use our platform.</p>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-purple-400">Targeting/Advertising Cookies</h4>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                          <p className="text-sm text-gray-300">Used for retargeting, user profiling, and delivering personalized advertisements.</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Cookie Policy Details</h3>
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 space-y-3">
                        <p><strong>Retention Period:</strong> Most cookies expire after 2 years</p>
                        <p><strong>Third-Party Cookies:</strong> Google Analytics, Facebook Pixel, advertising partners</p>
                        <p><strong>Cross-Site Tracking:</strong> Limited to essential advertising functions</p>
                        <p><strong>Mobile SDKs:</strong> Similar tracking mechanisms apply to mobile applications</p>
                      </div>
                    </section>

                    <div className="flex gap-4 pt-4">
                      <Button variant="primary" className="text-sm">Save Preferences</Button>
                      <Button variant="outline" className="text-sm">Accept All</Button>
                      <Button variant="outline" className="text-sm">Reject All</Button>
                    </div>
                  </div>
                )}

                {activeTab === 'compliance' && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">GDPR Compliance</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">Legal Basis for Data Collection:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            <li><strong>Consent:</strong> Explicit permission for advertising and analytics</li>
                            <li><strong>Contract:</strong> Processing necessary for service delivery</li>
                            <li><strong>Legitimate Interest:</strong> Platform security and fraud prevention</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">Your GDPR Rights:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Right to access personal data</li>
                              <li>Right to data portability</li>
                              <li>Right to deletion (right to be forgotten)</li>
                              <li>Right to rectification</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Right to restrict processing</li>
                              <li>Right to object to processing</li>
                              <li>Right to withdraw consent</li>
                              <li>Right to lodge a complaint</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                          <p><strong>Data Protection Officer:</strong> gdpr@adpocket.ai</p>
                          <p><strong>EU Representative:</strong> [EU Contact Details]</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">CCPA Compliance</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">Data Collected & Shared (Last 12 Months):</h4>
                          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-600">
                                  <th className="text-left py-2">Category</th>
                                  <th className="text-left py-2">Collected</th>
                                  <th className="text-left py-2">Shared</th>
                                </tr>
                              </thead>
                              <tbody className="space-y-2">
                                <tr>
                                  <td>Identifiers</td>
                                  <td className="text-green-400">Yes</td>
                                  <td className="text-yellow-400">Limited</td>
                                </tr>
                                <tr>
                                  <td>Commercial Info</td>
                                  <td className="text-green-400">Yes</td>
                                  <td className="text-red-400">No</td>
                                </tr>
                                <tr>
                                  <td>Internet Activity</td>
                                  <td className="text-green-400">Yes</td>
                                  <td className="text-yellow-400">Partners Only</td>
                                </tr>
                                <tr>
                                  <td>Geolocation</td>
                                  <td className="text-yellow-400">With Consent</td>
                                  <td className="text-red-400">No</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
                          <p className="font-medium mb-2">California Residents' Rights:</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Right to know what personal information is collected</li>
                            <li>Right to delete personal information</li>
                            <li>Right to opt-out of the sale of personal information</li>
                            <li>Right to non-discrimination for exercising CCPA rights</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Submit Data Requests</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Button variant="outline" className="text-sm">Request Data Access</Button>
                        <Button variant="outline" className="text-sm">Delete My Data</Button>
                        <Button variant="outline" className="text-sm">Opt-Out of Sale</Button>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">Response time: Within 45 days for CCPA, 30 days for GDPR</p>
                    </section>
                  </div>
                )}

                {activeTab === 'ads' && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Creative Requirements</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">Technical Specifications:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Banner Ads:</strong> 320x50, 728x90, 300x250</li>
                            <li><strong>Interstitial:</strong> 320x480, 768x1024</li>
                            <li><strong>Video:</strong> MP4, max 30 seconds, 1080p</li>
                            <li><strong>File Size:</strong> Images &lt;150KB, Videos &lt;5MB</li>
                            <li><strong>Load Time:</strong> Under 3 seconds</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-400 mb-2">Content Guidelines:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Clear, readable text (min 12px)</li>
                            <li>High-quality images and videos</li>
                            <li>Accurate product/service representation</li>
                            <li>Compliant with accessibility standards</li>
                            <li>No misleading claims or CTAs</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Prohibited Content</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-red-400 mb-2">Strictly Forbidden:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Illegal products or services</li>
                            <li>Adult/explicit content</li>
                            <li>Malware or deceptive software</li>
                            <li>Hate speech or discrimination</li>
                            <li>Counterfeit goods</li>
                            <li>Phishing or fraud attempts</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-400 mb-2">Restricted Categories:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Gambling (license required)</li>
                            <li>Financial services (compliance check)</li>
                            <li>Healthcare/medical (verification needed)</li>
                            <li>Alcohol (age-gating required)</li>
                            <li>Political ads (disclosure required)</li>
                            <li>Cryptocurrency (case-by-case)</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Placement Guidelines</h3>
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 space-y-3">
                        <p><strong>Safe Placement:</strong> Ads should not appear next to controversial, violent, or inappropriate content</p>
                        <p><strong>User Experience:</strong> Non-intrusive placement that doesn't disrupt core app functionality</p>
                        <p><strong>Frequency Capping:</strong> Reasonable ad frequency to prevent user fatigue</p>
                        <p><strong>Context Matching:</strong> Ads should be relevant to app content and user interests</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Brand Safety Measures</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-400 mb-2">Automated Checks:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Real-time content scanning</li>
                            <li>Malware detection systems</li>
                            <li>Brand safety keyword filtering</li>
                            <li>Image and video analysis</li>
                            <li>Landing page verification</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-400 mb-2">Manual Review:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Quality assurance team review</li>
                            <li>Sensitive category verification</li>
                            <li>Compliance spot checks</li>
                            <li>User feedback investigation</li>
                            <li>Regular policy updates</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white mb-3">Advertiser Responsibilities</h3>
                      <div className="space-y-4">
                        <div className="bg-indigo-900/20 border border-indigo-700 rounded-lg p-4">
                          <h4 className="font-medium text-indigo-400 mb-2">Required Actions:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Honest and accurate creative representation</li>
                            <li>Compliance with local and international laws</li>
                            <li>Regular creative updates and maintenance</li>
                            <li>Prompt response to policy violations</li>
                            <li>Transparent landing page practices</li>
                          </ul>
                        </div>
                        <p className="text-sm text-gray-400">
                          Violation of ad standards may result in campaign suspension, account termination, or legal action.
                        </p>
                      </div>
                    </section>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">Last updated: January 2025</p>
                <div className="flex gap-3">
                  <Button variant="outline" className="text-sm" onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="primary" className="text-sm">
                    Download PDF
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
