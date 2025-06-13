"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Gallery() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Registan Square in Samarkand",
      category: "culture",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mountains in Uzbekistan",
      category: "nature",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Traditional Uzbek food",
      category: "food",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Local people in traditional clothes",
      category: "people",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Bukhara architecture",
      category: "culture",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Desert landscape",
      category: "nature",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Traditional crafts",
      category: "culture",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Uzbek family",
      category: "people",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Traditional bread",
      category: "food",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mountain lake",
      category: "nature",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Silk Road market",
      category: "culture",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Traditional dancers",
      category: "people",
    },
  ]

  const filters = [
    { id: "all", name: t("gallery.filters.all") },
    { id: "nature", name: t("gallery.filters.nature") },
    { id: "culture", name: t("gallery.filters.culture") },
    { id: "people", name: t("gallery.filters.people") },
    { id: "food", name: t("gallery.filters.food") },
  ]

  const filteredImages = activeFilter === "all" ? images : images.filter((img) => img.category === activeFilter)

  const openLightbox = (src: string) => {
    setLightboxImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Gallery of Uzbekistan"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("gallery.title")}</h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                  data-aos="fade-up"
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
              <span className="sr-only">Close</span>
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
