"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const { t } = useTranslation()

  const featuredDestinations = [
    {
      id: 1,
      name: "Samarkand",
      image: "/placeholder.svg?height=600&width=800",
      category: "historical",
    },
    {
      id: 2,
      name: "Bukhara",
      image: "/placeholder.svg?height=600&width=800",
      category: "historical",
    },
    {
      id: 3,
      name: "Tashkent",
      image: "/placeholder.svg?height=600&width=800",
      category: "cultural",
    },
    {
      id: 4,
      name: "Khiva",
      image: "/placeholder.svg?height=600&width=800",
      category: "historical",
    },
  ]

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Using a placeholder div instead of video for now */}
          <div className="w-full h-full bg-teal-800"></div>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t("home.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
          >
            {t("home.hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/destinations"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              {t("home.hero.cta1")}
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium transition-colors"
            >
              {t("home.hero.cta2")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center"
          >
            <motion.div className="w-2 h-2 bg-white rounded-full mt-2" />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("home.intro.title")}
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-700 mb-8">
              {t("home.intro.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t("home.featured.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div key={destination.id} data-aos="fade-up" data-aos-delay={index * 100} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="inline-flex items-center text-sm text-white hover:text-teal-300 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <span>{t("home.featured.viewAll")}</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mr-4">
                    <span className="font-bold text-lg">{String.fromCharCode(64 + item)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Traveler {item}</h4>
                    <p className="text-sm opacity-80">From Country {item}</p>
                  </div>
                </div>
                <p className="italic">
                  "Amazing experience in Uzbekistan! The tour was well organized, and the guides were knowledgeable and
                  friendly. Will definitely recommend to friends and family."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Uzbekistan?
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg mb-8 opacity-90">
              Book your tour today and experience the beauty and culture of the Silk Road.
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/tours"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Browse Tours
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
