import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Show navbar after scrolling 50px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const getNavbarClasses = () => {
    const baseClasses =
      "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 transition-all duration-300"

    if (!isScrolled) {
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
        <h1 className="text-base font-semibold text-white">PT Maksi Media Indonesia</h1>
      </div>

      {/* Menu */}
      <nav className="flex gap-6 text-white font-medium ml-auto items-center">
        <Link href="/" className="hover:text-white/80">
          Home
        </Link>

        {/* About */}
        <div className="relative">
          <button onClick={() => toggleDropdown("about")} className="flex items-center hover:text-white/80">
            About Us
            <svg
              className={`ml-1 h-5 w-5 transition-transform ${openDropdown === "about" ? "rotate-180" : "rotate-0"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openDropdown === "about" && (
            <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-10">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Tentang Kami
              </Link>
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Team MIT
              </Link>
              <Link href="/about/klien" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Klien MIT
              </Link>
              <Link href="/about/partner" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Partner MIT
              </Link>
            </div>
          )}
        </div>

            {/* Menu */}
            <nav className="flex gap-6 text-gray-700 font-medium ml-auto items-center">
                <Link href="/" className="hover:text-blue-600">Home</Link>

                {/* About */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("about")}
                        className="flex items-center hover:text-blue-600"
                    >
                        About Us
                        <svg
                            className={`ml-1 h-5 w-5 transition-transform ${openDropdown === "about" ? "rotate-180" : "rotate-0"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {openDropdown === "about" && (
                        <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-10">
                            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Tentang Kami</Link>
                            <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team MIT</Link>
                            <Link href="/about/klien" className="block px-4 py-2 hover:bg-gray-100">Klien MIT</Link>
                            <Link href="/about/partner" className="block px-4 py-2 hover:bg-gray-100">Partner MIT</Link>
                        </div>
                    )}
                </div>

                {/* Service */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("service")}
                        className="flex items-center hover:text-blue-600"
                    >
                        Service
                        <svg
                            className={`ml-1 h-5 w-5 transition-transform ${openDropdown === "service" ? "rotate-180" : "rotate-0"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {openDropdown === "service" && (
                        <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-10">
                            <Link href="/service" className="block px-4 py-2 hover:bg-gray-100">Pengembangan Aplikasi</Link>
                            <Link href="/service/integrasi" className="block px-4 py-2 hover:bg-gray-100">Integrasi Sistem</Link>
                            <Link href="/service/deployment" className="block px-4 py-2 hover:bg-gray-100">Deployment Solusi</Link>
                        </div>
                    )}
                </div>

                {/* Product */}
                <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown("product")}
                    onMouseLeave={() => setOpenDropdown(null)}
                >
                    <Link href="/product" className="flex items-center hover:text-blue-600 relative z-20">
                        Product
                        <svg
                            className={`ml-1 h-5 w-5 transition-transform ${openDropdown === "product" ? "rotate-180" : "rotate-0"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>

                    {openDropdown === "product" && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-50">
                            <div className="absolute -top-2 left-0 right-0 h-3 bg-transparent"></div>
                            <Link href="/product/1" className="block px-4 py-2 hover:bg-gray-100">Maximple</Link>
                            <Link href="/product/2" className="block px-4 py-2 hover:bg-gray-100">Maxcode</Link>
                            <Link href="/product/3" className="block px-4 py-2 hover:bg-gray-100">Ajuin</Link>
                            <Link href="/product/4" className="block px-4 py-2 hover:bg-gray-100">Maxipos</Link>
                        </div>
                    )}
                </div>

                <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
            </nav>

            {/* Login */}
            <Link
                href="/login"
                className="ml-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:opacity-90"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openDropdown === "service" && (
            <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-10">
              <Link href="/service" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Pengembangan Aplikasi
              </Link>
              <Link href="/service/integrasi" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Integrasi Sistem
              </Link>
              <Link href="/service/deployment" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Deployment Solusi
              </Link>
            </div>
          )}
        </div>

        {/* Product */}
        <div className="relative">
          <button onClick={() => toggleDropdown("product")} className="flex items-center hover:text-white/80">
            Product
            <svg
              className={`ml-1 h-5 w-5 transition-transform ${openDropdown === "product" ? "rotate-180" : "rotate-0"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openDropdown === "product" && (
            <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black/5 z-10">
              <Link href="/product" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Maximple
              </Link>
              <Link href="/product/maxcode" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Maxcode
              </Link>
              <Link href="/product/konsis" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Ajuin
              </Link>
              <Link href="/product/maxipos" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Maxipos
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className="hover:text-white/80">
          Contact Us
        </Link>
      </nav>

      {/* Login */}
      <Link
        href="/login"
        className="ml-6 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full font-medium shadow hover:bg-white/30 border border-white/30"
      >
        Login
      </Link>
    </header>
  )
}
