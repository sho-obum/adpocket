import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequestDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    companyRole: '',
    region: '',
    companyType: '',
    expectations: '',
    linkedinProfile: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Serialize the data for the API call
    const serializedData = {
      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.workEmail.trim().toLowerCase(),
      phoneNumber: "", // Not collected in demo form
      query: `Demo Request - Company: ${formData.companyName.trim()}, Role: ${formData.companyRole.trim()}, Region: ${formData.region}, Company Type: ${formData.companyType}, Expectations: ${formData.expectations.trim()}, LinkedIn: ${formData.linkedinProfile.trim() || 'Not provided'}`,
      timestamp: new Date().toISOString(),
      source: "request_demo",
      req_url: "adpocket.ai",
      // Additional demo-specific fields
      companyName: formData.companyName.trim(),
      companyRole: formData.companyRole.trim(),
      region: formData.region,
      companyType: formData.companyType,
      expectations: formData.expectations.trim(),
      linkedinProfile: formData.linkedinProfile.trim()
    };

    try {
      console.log('Sending demo request:', serializedData);
      
      // Send data to PHP endpoint
      const response = await fetch("https://appslabs.store/db/pushdata.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serializedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Demo request submitted successfully:", result);

      // Show success message
      setShowSuccess(true);
      
      // Auto close after 3 seconds and reset form
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          companyName: '',
          companyRole: '',
          region: '',
          companyType: '',
          expectations: '',
          linkedinProfile: ''
        });
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error submitting demo request:", error);
      alert("There was an error submitting your demo request. Please try again.");
      setShowSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const regions = [
    'North America',
    'Europe',
    'Asia Pacific',
    'Latin America',
    'Middle East & Africa',
    'Other'
  ];

  const companyTypes = [
    'Mobile App Developer',
    'Game Studio',
    'E-commerce',
    'Media & Publishing',
    'Enterprise',
    'Agency',
    'Other'
  ];

  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #4F46E5, #14B8A6);
          border-radius: 20px;
          box-shadow: 0 0 8px rgba(79, 70, 229, 0.7);
          border: 3px solid transparent;
          background-clip: content-box;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4338CA, #0D9488);
          box-shadow: 0 0 10px rgba(67, 56, 202, 0.9);
        }

        /* Firefox scrollbar styles */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4F46E5 transparent;
        }
      `}</style>

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
                className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl custom-scrollbar"
              >
                {!showSuccess ? (
                  <>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                        Request a Demo
                      </h2>
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* First Name & Last Name */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            First name*
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Last name*
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                          />
                        </div>
                      </div>

                      {/* Work Email & Company Name */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Work email*
                          </label>
                          <input
                            type="email"
                            name="workEmail"
                            required
                            value={formData.workEmail}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Company name*
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                          />
                        </div>
                      </div>

                      {/* Company Role & Region */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Company role*
                          </label>
                          <input
                            type="text"
                            name="companyRole"
                            required
                            value={formData.companyRole}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Region*
                          </label>
                          <select
                            name="region"
                            required
                            value={formData.region}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                          >
                            <option value="" className="bg-gray-800">Please Select</option>
                            {regions.map((region) => (
                              <option key={region} value={region} className="bg-gray-800">{region}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Company Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Which option best describes your company?*
                        </label>
                        <select
                          name="companyType"
                          required
                          value={formData.companyType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500"
                        >
                          <option value="" className="bg-gray-800">Please Select</option>
                          {companyTypes.map((type) => (
                            <option key={type} value={type} className="bg-gray-800">{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Expectations */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          What do you expect to achieve with AdPocket?*
                        </label>
                        <textarea
                          name="expectations"
                          required
                          rows="4"
                          value={formData.expectations}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 resize-none hover:border-gray-500 custom-scrollbar"
                          placeholder="Tell us about your goals and how we can help..."
                        />
                      </div>

                      {/* LinkedIn Profile */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Please share your LinkedIn profile (if you have one)
                        </label>
                        <input
                          type="url"
                          name="linkedinProfile"
                          value={formData.linkedinProfile}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-500 placeholder-gray-400"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-center pt-6">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                          className={`font-medium py-3 px-8 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 outline-none shadow-lg ${
                            isSubmitting
                              ? 'bg-gray-600 cursor-not-allowed'
                              : 'bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 shadow-indigo-500/30 hover:shadow-indigo-500/50'
                          } text-white`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </span>
                          ) : (
                            'Submit Request'
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success Message */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3"
                    >
                      Success!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 mb-6"
                    >
                      Your demo request has been submitted successfully.<br />
                      Our team will get back to you within 24 hours.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-sm text-gray-400"
                    >
                      This window will close automatically...
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestDemoModal;
