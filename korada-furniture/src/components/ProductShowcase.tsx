'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Office cabinets',
    description: 'Single door, double door, slimline & library ranges.',
    href: '/products/office-cabinets',
    imageSrc:
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Office storage cabinets',
  },
  {
    name: 'Lockers',
    description: 'Secure multi-tier systems for workplaces & institutions.',
    href: '/products/lockers',
    imageSrc:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Metal lockers',
  },
  {
    name: 'Wardrobes',
    description: 'Spacious bedroom storage — explore sizes and layouts.',
    href: '/products/wardrobes',
    imageSrc:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Wardrobe furniture',
  },
]

const ProductShowcase = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Shop by category
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
            Jump straight into our core ranges — same quality, focussed collections.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition hover:shadow-xl"
            >
              <Link href={cat.href} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                  <p className="mt-2 text-gray-600">{cat.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-600">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
