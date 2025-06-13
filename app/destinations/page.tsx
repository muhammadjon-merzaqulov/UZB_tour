"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Destinations() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState("all")

  const destinations = [
    {
      id: 1,
      name: "Samarkand",
      image: "/placeholder.svg?height=600&width=800",
      category: "historical",
      description:
        "Known for its central position on the Silk Road, Samarkand is one of the oldest continuously inhabited cities in Central Asia.",
    },
    {
      id: 2,
      name: "Bukhara",
      image: "/placeholder.svg?height=600&width=800",
      category: "historical",
      description: "A UNESCO World Heritage site with over 140 architectural monuments dating back to the Middle Ages.",
    },
    {
      id: 3,
      name: "Tashkent",
      image: "/placeholder.svg?height=600&width=800",
      category: "cultural",
      description:
        "The capital city of Uzbekistan, blending modern architecture with historic buildings and vibrant bazaars.",
    },
    {
      id: 4,
      name: "Khiva",
      image: "/placeholder.svg?height=600&width=800",
      category: "historical",
      description:
        "A walled inner city that is home to dozens of historic monuments and buildings dating back hundreds of years.",
    },
    {
      id: 5,
      name: "Fergana Valley",
      image: "/placeholder.svg?height=600&width=800",
      category: "nature",
      description:
        "A fertile valley known for its natural beauty, agricultural abundance, and traditional silk production.",
    },
    {
      id: 6,
      name: "Aral Sea",
      image: "/placeholder.svg?height=600&width=800",
      category: "nature",
      description: "Once the fourth-largest lake in the world, now an important ecological site and unique landscape.",
    },
    {
      id: 7,
      name: "Nuratau Mountains",
      image: "/placeholder.svg?height=600&width=800",
      category: "nature",
      description: "A mountain range offering hiking, wildlife viewing, and traditional village experiences.",
    },
    {
      id: 8,
      name: "Navoi",
      image: "/placeholder.svg?height=600&width=800",
      category: "cultural",
      description:
        "Named after the great poet Alisher Navoi, this city offers cultural experiences and historical sites.",
    },
  ]

  const filters = [
    { id: "all", name: t("destinations.filters.all") },
    { id: "historical", name: t("destinations.filters.historical") },
    { id: "nature", name: t("destinations.filters.nature") },
    { id: "cultural", name: t("destinations.filters.cultural") },
  ]

  const filteredDestinations =
    activeFilter === "all" ? destinations : destinations.filter((dest) => dest.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Destinations in Uzbekistan"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("destinations.title")}</h1>
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

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDestinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
