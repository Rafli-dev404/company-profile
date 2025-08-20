import React from 'react';

export default function Index(props: {
  model: {
    title: string,
    subtitle: string,
    description: string,
    buttons: { label: string, href: string }[],
  }
}) {
  const { title, subtitle, description, buttons } = props.model;

  return (
    <div className="min-h-screen border-4 border-purple-400 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
          <h1 className="text-base font-semibold text-gray-800">
            PT Maksi Integrasi Teknologi
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex gap-6 text-gray-700 font-medium ml-auto">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/service" className="hover:text-blue-600">Service</a>
          <a href="/product" className="hover:text-blue-600">Product</a>
          <a href="/contact" className="hover:text-blue-600">Contact Us</a>
        </nav>

        {/* Login */}
        <button className="ml-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium shadow hover:opacity-90">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            {title}
          </h2>
          <p className="text-base text-gray-700 mb-4">{subtitle}</p>
          <p className="text-base text-gray-600 mb-6">{description}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            {buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className={`px-6 py-2 rounded-md font-semibold transition ${i === 0
                  ? 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="/images/laptop-code.png"
            alt="Laptop with code"
            className="rounded-xl shadow-lg w-[500px]"
          />
        </div>
      </section>

      {/* Icon Section */}
      <section className="flex justify-start gap-8 px-16 py-10">
        <img src="/images/icon1.png" alt="icon1" className="h-14 w-14" />
        <img src="/images/icon2.png" alt="icon2" className="h-14 w-14" />
        <img src="/images/icon3.png" alt="icon3" className="h-14 w-14" />
        <img src="/images/icon4.png" alt="icon4" className="h-14 w-14" />
      </section>
    </div>
  );
}
