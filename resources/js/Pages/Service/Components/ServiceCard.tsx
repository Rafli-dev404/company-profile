import React from 'react'
import ServiceCardInterface from '../Interface/ServiceCardInterface'
export default function ServiceCard({ title, description }: ServiceCardInterface) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 border border-white/20">
      <h3 className="text-xl font-semibold text-black mb-4 leading-tight">{title}</h3>
      <p className="text-black text-sm leading-relaxed">{description}</p>
    </div>
  )
}
