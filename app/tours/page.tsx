"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, DollarSign } from "lucide-react"

export default function Tours() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("all")
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [selectedTour, setSelectedTour] = useState<number | null>(null)

  const tours = [
    {
      id: 1,
      name: "Classic Uzbekistan",
      image: "/placeholder.svg?height=600&width=800",
      duration: 7,
      price: 899,
      category: "cultural",
      highlights: [
        "Visit the historic cities of Samarkand, Bukhara, and Khiva",
        "Explore ancient mosques, madrasas, and mausoleums",
        "Experience traditional Uzbek cuisine and hospitality",
      ],
    },
    {
      id: 2,
      name: "Silk Road Adventure",
      image: "/placeholder.svg?height=600&width=800",
      duration: 10,
      price: 1299,
      category: "adventure",
      highlights: [
        "Follow the ancient Silk Road trading route",
        "Visit remote caravanserais and trading posts",
        "Experience the diverse cultures along the Silk Road",
      ],
    },
    {
      id: 3,
      name: "Uzbekistan Nature Explorer",
      image: "/placeholder.svg?height=600&width=800",
      duration: 8,
      price: 999,
      category: "nature",
      highlights: [
        "Hike in the Nuratau Mountains",
        "Visit the Aral Sea and learn about its ecological history",
        "Explore the natural wonders of the Fergana Valley",
      ],
    },
    {
      id: 4,
      name: "Tashkent City Break",
      image: "/placeholder.svg?height=600&width=800",
      duration: 4,
      price: 499,
      category: "cultural",
      highlights: [
        "Explore the modern capital of Uzbekistan",
        "Visit museums, markets, and cultural sites",
        "Experience urban Uzbek lifestyle and cuisine",
      ],
    },
    {
      id: 5,
      name: "Photography Tour",
      image: "/placeholder.svg?height=600&width=800",
      duration: 9,
      price: 1199,
      category: "special",
      highlights: [
        "Capture the stunning architecture and landscapes",
        "Professional photography guidance included",
        "Visit photogenic locations at optimal times",
      ],
    },
    {
      id: 6,
      name: "Culinary Journey",
      image: "/placeholder.svg?height=600&width=800",
      duration: 6,
      price: 899,
      category: "special",
      highlights: [
        "Learn to cook traditional Uzbek dishes",
        "Visit local markets and food producers",
        "Enjoy food tastings and culinary experiences",
      ],
    },
  ]

  const tabs = [
    { id: "all", name: "All Tours" },
    { id: "cultural", name: "Cultural" },
    { id: "adventure", name: "Adventure" },
    { id: "nature", name: "Nature" },
    { id: "special", name: "Special Interest" },
  ]

  const filteredTours = activeTab === "all" ? tours : tours.filter((tour) => tour.category === activeTab)

  const handleInquiry = (tourId: number) => {
    setSelectedTour(tourId)
    setShowInquiryForm(true)
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Tours in Uzbekistan" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("tours.title")}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{t("tours.subtitle")}</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab.id ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.name}</h3>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-1" />
                      <span>
                        {tour.duration} {t("tours.days")}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign size={16} className="mr-1" />
                      <span>${tour.price}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleInquiry(tour.id)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    {t("tours.inquiry")}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      {showInquiryForm && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                {t("tours.inquiry")} - {tours.find((tour) => tour.id === selectedTour)?.name}
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("tours.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("tours.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("tours.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("tours.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md font-medium transition-colors"
                >
                  {t("tours.form.submit")}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
