import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArticleSectionProps } from "../Interface/ArticleInterface";

const defaultArticles = [
  // TODO: data dummy
  {
    id: 1,
    title: "Contoh Peralatan Teknologi Informasi Yang Masih Eksis...",
    excerpt: "Lorem ipsum dolor sit amet...",
    date: "08/09/25",
    author: "Lorepsum",
    image: "/images/berita1.jpg",
  },
  {
    id: 2,
    title: "Artikel kedua",
    excerpt: "Lorem ipsum dolor sit amet...",
    date: "09/09/25",
    author: "Lorepsum",
    image: "/images/berita2.jpg",
  },
];

const rotatingArticles = [
   // TODO: data dummy
  {
    title: "Judul Dinamis 1",
    excerpt: "Isi artikel dinamis 1...",
    author: "Penulis 1",
    date: "08/09/25",
    image: "/images/berita1.jpg",
  },
  {
    title: "Judul Dinamis 2",
    excerpt: "Isi artikel dinamis 2...",
    author: "Penulis 2",
    date: "09/09/25",
    image: "/images/berita3.jpg",
  },
  {
    title: "Judul Dinamis 3",
    excerpt: "Isi artikel dinamis 3...",
    author: "Penulis 3",
    date: "10/09/25",
    image: "/images/berita4.jpg",
  },
];

export default function ArticleSection({
  articles = defaultArticles,
}: ArticleSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = scroll kanan, -1 = scroll kiri

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % rotatingArticles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentArticle = rotatingArticles[currentIndex];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 500 : -500, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -500 : 500, opacity: 0 }),
  };

  return (
    <div className="bg-white">
      <div className="max-w-full mb-15 px-8 space-y-10">
        {/* breadcrumb + search */}
        <div className="border border-gray-200 rounded-lg px-4 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <nav className="text-sm text-gray-600">
              <ol className="flex gap-2">
                <li>
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li>/</li>
                <li className="text-gray-500">Artikel</li>
              </ol>
            </nav>
            <div>
              <input
                type="text"
                placeholder="Cari artikel..."
                className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* artikel pertama: slide seluruh kolom */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-[25%_25%_50%] rounded-2xl overflow-hidden shadow-xl h-[400px]"
            >
              {/* kiri judul */}
              <div className="bg-purple-200 p-10 flex flex-col justify-center items-center text-center">
                <h3 className="text-sm uppercase tracking-wide text-purple-700 font-medium mb-4">
                  PT Maksi Integrasi Teknologi
                </h3>
                <h2 className="text-2xl font-bold text-purple-900">{currentArticle.title}</h2>
                <p className="text-base mt-4 text-purple-700">{currentArticle.author}</p>
                <p className="text-sm text-purple-700">{currentArticle.date}</p>
              </div>

              {/* tengah gambar */}
              <div className="bg-purple-100">
                <img
                  src={currentArticle.image}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* kanan teks */}
              <div className="bg-blue-100 p-10 flex flex-col">
                <span className="inline-block bg-purple-700 text-white text-sm px-4 py-2 rounded-full w-max">
                  Button
                </span>
                <h2 className="text-2xl font-semibold mt-4">{currentArticle.title}</h2>
                <p className="text-lg text-gray-600 mt-2">{currentArticle.excerpt}</p>
                <p className="text-base text-gray-500 mt-4">
                  {currentArticle.author} • {currentArticle.date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* artikel lainnya */}
        {articles.slice(1).map((article) => (
          <div key={article.id} className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="flex flex-col mt-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 sm:h-full object-cover rounded-t-2xl"
              />
              <div className="bg-white p-10 rounded-b-2xl shadow">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-500">{article.author} • {article.date}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white">
              <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
              <p className="text-lg text-gray-700">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
