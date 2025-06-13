"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { motion } from "framer-motion"
import { Twitter, Instagram, Linkedin } from "lucide-react"

export default function About() {
  const { t } = useTranslation()

  const teamMembers = [
    {
      id: 1,
      name: "Alisher Usmanov",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in tourism, Alisher founded UzbTour to share the beauty of his homeland with travelers from around the world.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Nodira Karimova",
      role: "Tour Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Nodira has extensive knowledge of Uzbekistan's history and culture, ensuring our tours are both educational and entertaining.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Timur Malik",
      role: "Operations Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Timur ensures that all our tours run smoothly, from transportation to accommodations, so you can focus on enjoying your experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Dilnoza Rakhimova",
      role: "Customer Relations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dilnoza is dedicated to providing exceptional customer service, addressing inquiries and ensuring our clients have the best possible experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="About UzbTour" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("about.title")}</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t("about.mission.title")}</h2>
              <p className="text-lg text-gray-700">{t("about.mission.description")}</p>
              <div className="mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t("about.vision.title")}</h2>
              <p className="text-lg text-gray-700">{t("about.vision.description")}</p>
              <div className="mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our Vision"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t("about.team.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-teal-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-teal-600 transition-colors">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-teal-600 transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-400 hover:text-teal-600 transition-colors">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-center text-gray-900">
              Our History
            </h2>

            <div className="space-y-12">
              <div data-aos="fade-up" className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-teal-600 text-white text-center py-4 rounded-lg">
                    <span className="text-2xl font-bold">2010</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Company Founded</h3>
                  <p className="text-gray-700">
                    UzbTour was established with a mission to showcase the beauty and cultural richness of Uzbekistan to
                    international travelers.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-teal-600 text-white text-center py-4 rounded-lg">
                    <span className="text-2xl font-bold">2015</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Expansion of Services</h3>
                  <p className="text-gray-700">
                    We expanded our tour offerings to include specialized cultural, adventure, and culinary experiences
                    throughout Uzbekistan.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-teal-600 text-white text-center py-4 rounded-lg">
                    <span className="text-2xl font-bold">2020</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-gray-700">
                    We embraced digital technologies to enhance our customer experience, making it easier for travelers
                    to discover and book their perfect Uzbekistan adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
