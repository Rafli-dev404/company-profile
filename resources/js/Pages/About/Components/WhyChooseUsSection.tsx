import React from 'react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AccordionItemData, AccordionItemProps } from '../Interfaces/ChooseInterface'


function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left hover:text-pink-600 transition-colors"
      >
        <span className="text-xl font-semibold text-gray-900">{item.title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600 leading-relaxed">{item.content}</p>
        </div>
      )}
    </div>
  )
}

const accordionData: AccordionItemData[] = [
  // TODO:data dummy belum diambil dari backend
  {
    id: "profesionalisme",
    title: "Profesionalisme",
    content:
      "Profesionalisme dalam memberikan pelayanan melibatkan sejumlah prinsip dan perilaku yang mencerminkan standar tinggi dalam interaksi dengan pelanggan atau konsumen.",
  },
  {
    id: "trust",
    title: "Trust",
    content:
      "Kepercayaan (trust) dalam produk adalah keyakinan pelanggan terhadap kualitas, keandalan, dan kesesuaian produk dengan harapan dan kebutuhan mereka. Trust sangat penting dalam mempengaruhi keputusan pembelian dan membangun hubungan jangka panjang antara pelanggan dan merek.",
  },
  {
    id: "service-excellent",
    title: "Service Excellent",
    content:
      "Service excellence pada produk berkaitan dengan memberikan pelayanan yang luar biasa kepada pelanggan tidak hanya sebelum dan selama pembelian produk, tetapi juga setelah pembelian. Ini termasuk dukungan pelanggan yang kuat, penyelesaian masalah yang efisien, dan kepuasan pelanggan yang berkelanjutan.",
  },
]

export default function WhyChooseUsSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MENGAPA MEMILIH KAMI</h2>
              <p className="text-xl text-gray-600 mb-8">Beberapa alasan mengapa pelanggan memilih kami.</p>
            </div>

            <div className="space-y-4">
              {accordionData.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItem === item.id}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                alt="Developer workspace with multiple monitors"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

