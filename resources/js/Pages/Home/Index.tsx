import { Link } from '@inertiajs/react';
import React from 'react';
import LayoutMain from '../Layout/LayoutMain';
import { motion } from "framer-motion";
import { useSiteContent } from "@/components/context/siteContentContext";

export default function Index() {
  const { contents } = useSiteContent();

  // Ambil masing-masing section
  const hero = contents.find(c => c.section === "hero");
  const whyMIT = contents.filter(c => c.section === "why-mit");
  const memenuhiMIT = contents.find(c => c.section === "memenuhi-mit");
  const implementations = contents.filter(c => c.section === "implementation");

  return (
    <LayoutMain title="Home">
      {/* Hero Section */}
      {hero && (
        <section className="relative flex flex-col md:flex-row items-center px-16 py-20 min-h-[100vh]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-xl z-10"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-2">{hero.title}</h2>
            <p className="text-base text-gray-700 mb-4">{hero.subtitle}</p>
            <p className="text-base text-gray-600 mb-6">{hero.description}</p>
            <div className="flex gap-4">
              {hero.buttons?.map((btn, i) => (
                <Link
                  key={i}
                  href={btn.href}
                  className={`px-6 py-2 rounded-md font-semibold transition ${i === 0
                    ? 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {hero.image && (
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={hero.image}
              alt="Hero Image"
              className="absolute right-0 top-38 z-0 rounded-tl-[100px] rounded-bl-[100px] shadow-lg w-[600px] h-[400px] object-cover"
            />
          )}
        </section>
      )}

      {/* Why MIT Section */}
      {whyMIT.length > 0 && (
        <section className="px-16 py-20 text-center bg-white min-h-[100vh]">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Kenapa Memilih MIT
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-12"
          >
            Kami akan membantu dalam perencanaan strategis hingga implementasi dan pemeliharaan perusahaan Anda.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyMIT.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF] shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 min-h-[320px]"
              >
                {item.image && <img src={item.image} alt={item.title} className="h-20 mb-4" />}
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-white text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Memenuhi MIT Section */}
      {memenuhiMIT && (
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="px-16 py-10 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{memenuhiMIT.title}</h3>
          <p className="text-lg text-gray-700 mb-0">{memenuhiMIT.description}</p>
        </motion.section>
      )}

      {/* Implementation Sections */}
      {implementations.length > 0 && implementations.map((sec, i) => (
        <section
          key={i}
          className={`px-16 py-20 flex flex-col md:flex-row ${sec.reverse ? "md:flex-row-reverse" : ""} items-center gap-10 ${i % 2 === 1 ? "bg-gray-50" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: sec.reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            {sec.image && (
              <div className="bg-yellow-400 rounded-2xl p-4 shadow-lg">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  src={sec.image}
                  alt={sec.title}
                  className="rounded-2xl w-[400px] h-[300px] object-cover"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: sec.reverse ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{sec.title}</h3>
            <p className="text-base text-gray-700 mb-6">{sec.description}</p>
            {sec.link && (
              <Link
                href={sec.link}
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Pelajari Selengkapnya →
              </Link>
            )}
          </motion.div>
        </section>
      ))}


    </LayoutMain>
  );
}
