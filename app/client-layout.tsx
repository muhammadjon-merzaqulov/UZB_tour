"use client"

import type React from "react"

import { useEffect } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Preloader from "@/components/ui/preloader"
import "../i18n/i18n" // Import i18n configuration

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Initialize AOS with dynamic import
    const initAOS = async () => {
      try {
        const AOS = await import("aos")
        AOS.default.init({
          duration: 800,
          once: false,
        })
      } catch (error) {
        console.error("Failed to initialize AOS:", error)
      }
    }

    initAOS()
  }, [])

  return (
    <>
      <Preloader />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
