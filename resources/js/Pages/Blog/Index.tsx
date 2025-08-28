import React from 'react'

import Navbar from '@/Pages/Layout/Navbar'
import { Calendar, Clock, Layout, Search, User } from 'lucide-react'
import LayoutMain from '../Layout/LayoutMain'
import Articel from './Components/Articel'

export const meta = {
  title: "Blog - MIT Blog",
  description:
    "Maksi terpercaya selalu menyediakan informasi lengkap setiap hari, Informasi terbaru seputar bisnis, keuangan, investasi, tips & trik",
}

export default function Page() {
  return (
    <LayoutMain title={'Blog'}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO masih data dummy belum ngambil dari backend */}
            {[
              {
                id: 1,
                title: "Tips Investasi untuk Pemula: Memulai Perjalanan Finansial Anda",
                excerpt:
                  "Pelajari dasar-dasar investasi yang aman dan menguntungkan untuk membangun masa depan finansial yang lebih baik.",
                author: "Ahmad Rizki",
                date: "15 Januari 2024",
                readTime: "5 min read",
                category: "Investasi",
                image: "/investment-tips.png",
              },
              {
                id: 2,
                title: "Strategi Bisnis Digital di Era Modern",
                excerpt:
                  "Bagaimana mengembangkan bisnis digital yang sukses dengan memanfaatkan teknologi terkini dan tren pasar.",
                author: "Sari Dewi",
                date: "12 Januari 2024",
                readTime: "7 min read",
                category: "Bisnis",
                image: "/digital-business-strategy.png",
              },
              {
                id: 3,
                title: "Mengelola Keuangan Pribadi dengan Aplikasi Mobile",
                excerpt:
                  "Rekomendasi aplikasi terbaik untuk mengelola keuangan pribadi dan tips menggunakannya secara efektif.",
                author: "Budi Santoso",
                date: "10 Januari 2024",
                readTime: "4 min read",
                category: "Keuangan",
                image: "/personal-finance-mobile-app.png",
              },
            ].map((article, i) => (
              <Articel
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                image={article.image}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}
