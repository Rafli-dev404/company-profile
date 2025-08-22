import { Link } from '@inertiajs/react';
import React from 'react';
import LayoutMain from '../Layout/LayoutMain';

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
    <LayoutMain title={'Home'}>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-16 py-20 relative">
        {/* Text Content */}
        <div className="max-w-xl z-10">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            {title}
          </h2>
          <p className="text-base text-gray-700 mb-4">{subtitle}</p>
          <p className="text-base text-gray-600 mb-6">{description}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            {buttons.map((btn, i) => (
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
        </div>

        {/* Image */}
        <div className="absolute right-0 top-20 z-0">
          <img
            src="/images/laptop-code.png"
            alt="Laptop with code"
            className="rounded-tl-[100px] rounded-bl-[100px] shadow-lg w-[600px] h-[400px] object-cover"
            style={{ marginRight: '0', paddingRight: '0' }}
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
    </LayoutMain>
  );
}
