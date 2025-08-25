
import { Link } from "@inertiajs/react"
import { useState, useEffect } from "react"
import React from "react"

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Show navbar after scrolling 50px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  const getNavbarClasses = () => {
    const baseClasses =
      "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 transition-all duration-300"

    if ( !isScrolled) {
      // Transparent navbar on home page when not scrolled
      return `${baseClasses} bg-transparent`
    } else {
      // Gradient background when scrolled or on other pages
      return `${baseClasses} bg-gradient-to-r from-[#E45EFC] via-[#A5DBFB] to-[#387AFF] shadow-md backdrop-blur-sm`
    }
  }

  return (
    <header className={getNavbarClasses()}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-base font-semibold text-black">PT Maksi Integrasi Teknologi</h1>
      </div>

      {/* Menu */}
      <nav className="flex gap-6 text-black font-medium ml-auto">
        <Link href="/" className="hover:text-black/80">
          Home
        </Link>
        <Link href="/about" className="hover:text-black/80">
          About us
        </Link>
        <Link href="/service" className="hover:text-black/80">
          Service
        </Link>
        <Link href="/product" className="hover:text-black/80">
          Product
        </Link>
        <Link href="/contact" className="hover:text-black/80">
          Contact Us
        </Link>
      </nav>

      {/* Login */}
      <Link
        href="/login"
        className="ml-6 bg-transparent text-blue-600 px-5 py-2 rounded-full font-medium shadow hover:bg-white/90"
      >
        Login
      </Link>
    </header>
  )
}
