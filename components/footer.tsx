"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { useTranslation } from "@/i18n"
import type { Locale } from "@/i18n/config"
import { useState } from "react"

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const { t } = useTranslation(locale)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your backend
      console.log("Subscribed with:", email)
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const navItems = [
    { name: t("nav.home"), href: `/${locale}` },
    { name: t("nav.destinations"), href: `/${locale}/destinations` },
    { name: t("nav.tours"), href: `/${locale}/tours` },
    { name: t("nav.gallery"), href: `/${locale}/gallery` },
    { name: t("nav.about"), href: `/${locale}/about` },
    { name: t("nav.contact"), href: `/${locale}/contact` },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UzbTour</h3>
            <p className="text-gray-400 mb-4">
              Discover the beauty of Uzbekistan with our expert guides and customized tours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("contact.info.address")}</h3>
            <address className="text-gray-400 not-italic">
              <p>123 Tourism Street</p>
              <p>Tashkent, Uzbekistan</p>
              <p className="mt-4">{t("contact.info.phone")}: +998 71 123 4567</p>
              <p>{t("contact.info.email")}: info@uzbtour.com</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.subscribe.title")}</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.subscribe.placeholder")}
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">{t("footer.subscribe.button")}</span>
                </button>
              </div>
              {isSubscribed && <p className="text-green-400 text-sm">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
          <div className="mt-4 md:mt-0">
            <img src="/placeholder.svg?height=30&width=120" alt="Payment methods" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}
