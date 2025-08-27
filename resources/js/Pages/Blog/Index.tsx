import React from 'react'

import Navbar from '@/Pages/Layout/Navbar'
import { Calendar, Clock, Layout, Search, User } from 'lucide-react'
import LayoutMain from '../Layout/LayoutMain'

export default function Page() {
  return (
    <LayoutMain title="Blog">
      <div className="px-4 sm:px-6 lg:px-8 py-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-8">
            <h1 className="text-5xl font-bold text-black mb-4">MIT Blog</h1>
            <p className="text-xl text-black/90 max-w-3xl mx-left">
              Maksi terpercaya selalu menyediakan informasi lengkap setiap hari, Informasi terbaru seputar bisnis,
              keuangan, investasi, tips & trik
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-end mb-8">
            <div className="relative w-100 bg-white rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Search here......"
                className="w-full px-4 py-3 pr-12 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    TECHNOLOGY
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Game Changing Virtual Reality Console Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring how VR technology is revolutionizing the gaming industry and creating new opportunities for
                  community engagement.
                </p>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>BY ADMIN</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>27 AUGUST, 2024</span>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="border-l-4 border-pink-500 pl-6">
                <div className="mb-4">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">MOBILE</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  New Modern iPhone 14 Pro Max Revolutionary Features
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the latest innovations in mobile technology with the iPhone 14 Pro Max and its groundbreaking
                  features.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>27 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 3 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">GADGET</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  A Guide To Image Optimization On Jamstack Sites
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn essential techniques for optimizing images on modern Jamstack websites to improve performance
                  and user experience.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>27 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 4 */}
              <div className="border-l-4 border-red-500 pl-6">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">NEWS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Using Automated Test Results To Improve Accessibility
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how automated testing tools can help identify and fix accessibility issues to create more
                  inclusive web experiences.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>27 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 5 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    BUSINESS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Digital Transformation Strategies for Modern Enterprises
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding how businesses can leverage digital technologies to improve operations and customer
                  experience.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>26 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 6 */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="mb-4">
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                    FINANCE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Cryptocurrency Investment Tips for Beginners
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to understanding cryptocurrency markets and making informed investment
                  decisions.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>26 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 7 */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="mb-4">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                    AI & ML
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Machine Learning Applications in Healthcare Industry
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring how artificial intelligence is transforming healthcare delivery and patient outcomes.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>25 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 8 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    STARTUP
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Building Scalable SaaS Products from Scratch
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential strategies and best practices for developing successful software-as-a-service applications.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>25 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 9 */}
              <div className="border-l-4 border-teal-500 pl-6">
                <div className="mb-4">
                  <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">SECURITY</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Cybersecurity Best Practices for Remote Teams
                </h3>
                <p className="text-gray-600 mb-4">
                  Protecting your organization's data and systems in the era of distributed workforce and remote work.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>24 AUGUST, 2024</span>
                </div>
              </div>

              {/* Article 10 */}
              <div className="border-l-4 border-rose-500 pl-6">
                <div className="mb-4">
                  <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">DESIGN</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  UI/UX Design Trends That Will Shape 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the latest design trends and principles that are defining user experience in modern
                  applications.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>24 AUGUST, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}
