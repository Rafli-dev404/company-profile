import React from "react"
import { motion } from "framer-motion"
import Product from "../Interfaces/ProductInterface"

const defaultProducts: Product[] = [
  // TODO: data dummy, blm diambil dari backend
  { id: 1, name: "Ajuin", logo: "/images/Ajuin.jpg" },
  { id: 2, name: "Maxcode", logo: "/images/MAXCODE-11.png" },
  { id: 3, name: "Konsis", logo: "/images/Konsis.png" },
  { id: 4, name: "Maxipos", logo: "/images/Maxipos.png" },
  { id: 5, name: "Odoo", logo: "/images/oodo.png" },
  { id: 6, name: "Maximple", logo: "/images/Maximple.png" },
]

export default function ProductSection({
  title = "Produk Kami",
  subtitle = "Maksi Integrasi Teknologi menghadirkan solusi inovatif yang digunakan bisnis-bisnis terkemuka di Indonesia...",
  products = defaultProducts,
}: {
  title?: string
  subtitle?: string
  products?: Product[]
}) {
  return (
    <section id="products" className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        {/* Title & Subtitle */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">{subtitle}</p>

        {/* Motion Slider */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          {/* viewport hanya muat 3 produk */}
          <div style={{ width: "600px", margin: "0 auto", overflow: "hidden" }}>
<motion.div
  className="flex"
  animate={{ x: [0, -600, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1, // total animasi
    times: [0, 0.1, 1], // 0→-600 = 0.5 detik, -600→0 = 0.5 detik
    ease: "easeInOut",
  }}
  style={{ width: `${products.length * 200}px` }} // 200px per produk
>
  {products.map((product) => (
    <div
      key={product.id}
      style={{
        flex: "0 0 200px",
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src={product.logo}
        alt={product.name}
        style={{
          width: "100%",
          height: "64px",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  ))}
</motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
