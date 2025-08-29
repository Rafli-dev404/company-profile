import { CheckCircle2 } from "lucide-react"
import { Link } from "@inertiajs/react"
import React from "react"
import ServiceCardInterface from "../Interface/ServiceCardInterface"

export default function ServiceCard({
  title,
  description,
  features,
  image,
  link,
  reverse,
  bg = "white",
  location,
}: ServiceCardInterface) {
  return (
    <section
      className={`py-20 ${bg === "gradient"
          ? "bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]"
          : "bg-white"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        {image && (
          <div
            className={`relative flex justify-center ${reverse ? "md:order-2" : "md:order-1"
              }`}
          >
            <div
              className={`absolute -top-6 ${reverse ? "-right-6" : "-left-6"
                } w-78 h-78 bg-yellow-400 rounded-3xl -z-10`}
            ></div>
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-lg relative"
            />
          </div>
        )}

        {/* Konten */}
        <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            {description}
          </p>

          {/* List fitur */}
          {features && features.length > 0 && (
            <ul className="space-y-3 mb-8">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Lokasi */}
          {location && (
            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Lokasi:</span> {location}
            </p>
          )}

          {/* Link */}
          {link && (
            <Link
              href={link}
              className="font-semibold text-black underline hover:text-gray-700"
            >
              Pelajari lebih lanjut
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
