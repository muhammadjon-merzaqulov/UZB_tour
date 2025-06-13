"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react"

export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.destinations"), href: "/destinations" },
    { name: t("nav.tours"), href: "/tours" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-teal-400">UzbTour</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Discover the beauty and culture of Uzbekistan with our guided tours and travel packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact.title")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong>{t("contact.address")}:</strong> 123 Tourism Street, Tashkent, Uzbekistan
              </li>
              <li>
                <strong>{t("contact.phone")}:</strong> +998 71 123 4567
              </li>
              <li>
                <strong>{t("contact.email")}:</strong> info@uzbtour.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.newsletter.title")}</h3>
            <p className="text-gray-400 mb-4">{t("footer.newsletter.description")}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-800 text-white"
              />
              <button type="submit" className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-md transition-colors">
                <Send size={20} />
                <span className="sr-only">{t("footer.newsletter.submit")}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
