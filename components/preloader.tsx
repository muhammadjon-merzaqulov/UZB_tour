"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`preloader ${isLoading ? "" : "hidden"}`}>
      <div className="flex flex-col items-center">
        <div className="preloader-spinner"></div>
        <div className="mt-4 text-lg font-semibold text-primary-600">Loading...</div>
      </div>
    </div>
  )
}
