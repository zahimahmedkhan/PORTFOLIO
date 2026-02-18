import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Invalid email format";
        return "";
      case "message":
        return value.trim() ? "" : "Message is required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate field on change (after first blur)
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    // Check if form is valid
    if (Object.values(newErrors).some((error) => error)) return;

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "zahimahmedkhan@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        }
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again or contact directly at zahimahmedkhan@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacts" className="min-h-screen py-20 text-gray-100 relative overflow-hidden" style={{background: "linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%), linear-gradient(to bottom, #000000 0%, #030712 50%, #000000 100%)"}}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: "2s"}}></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Have a project in mind? Let's collaborate and create something amazing together</p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-950/30 to-transparent rounded-2xl p-10 shadow-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h2 className="text-2xl font-bold text-blue-300 mb-8">Send me a message</h2>
              <p className="text-gray-400 mb-8">
                I'll respond to your message within 24-48 hours. Feel free to reach out with any questions or project inquiries.
              </p>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-300 flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-3 font-semibold"
              >
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.name
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-3 font-semibold"
              >
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-3 font-semibold"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
                  errors.message
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold text-lg rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
            </div>
          </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-gradient-to-br from-blue-950/30 to-transparent rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-100">Email</h3>
                </div>
                <a href="mailto:zahimahmedkhan@gmail.com" className="text-blue-400 hover:text-blue-300 transition font-semibold">
                  zahimahmedkhan@gmail.com
                </a>
              </div>

              {/* Quick Response Card */}
              <div className="bg-gradient-to-br from-cyan-950/30 to-transparent rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-100">Response Time</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Usually responds within<br/><span className="font-semibold text-cyan-300">24-48 hours</span>
                </p>
              </div>

              {/* Availability Card */}
              <div className="bg-gradient-to-br from-purple-950/30 to-transparent rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-100">Availability</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Open to freelance projects<br/>and collaborations
                </p>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
};
