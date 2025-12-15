"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="min-h-screen bg-linear-to-br from-gray-50 via-purple-50 to-pink-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Get In{" "}
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s create something amazing
              together. Drop me a message!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Developer Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/contact/contactImage.png"
                  width={400}
                  height={400}
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-600/80 via-purple-600/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Let&apos;s Build Something Great
                  </h3>
                  <p className="text-white text-lg">
                    Passionate developer ready to turn your ideas into reality.
                    Let&#39;s collaborate and create amazing digital experiences
                    together!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    ✓ Message sent successfully! I&#39;ll get back to you soon.
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    />
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
