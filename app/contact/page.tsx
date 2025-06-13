"use client"

import type React from "react"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    console.log("Form submitted")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-teal-600">
          <div className="absolute inset-0 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
              </pattern>
              <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("contact.title")}</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">{t("contact.title")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  {t("contact.form.submit")}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-teal-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">{t("contact.address")}</h3>
                      <p className="text-gray-600">
                        123 Tourism Street
                        <br />
                        Tashkent, Uzbekistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-teal-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">{t("contact.phone")}</h3>
                      <p className="text-gray-600">+998 71 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-teal-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">{t("contact.email")}</h3>
                      <p className="text-gray-600">info@uzbtour.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for Google Map */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <p className="text-gray-600">Map Placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={item * 100}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">FAQ Question {item}?</h3>
                  <p className="text-gray-700">
                    This is a sample answer to the frequently asked question. Replace this with actual content about
                    tours, visa requirements, accommodations, or other common inquiries.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
