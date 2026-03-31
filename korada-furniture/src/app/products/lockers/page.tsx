'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { lockerVariants } from '@/data/product-lines'
import { BrochureDownload } from '@/components/BrochureDownload'
import { ArrowLeft } from 'lucide-react'

export default function LockersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-slate-800 to-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All products
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl font-bold lg:text-5xl"
          >
            Lockers
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Banks, colours and locking options for offices, schools, gyms and industrial sites —
            built for heavy daily use.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {lockerVariants.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <BrochureDownload
            href="/brochures/lockers-brochure.pdf"
            title="Download locker brochure"
            description="Planner-friendly PDF with our locker lines, typical dimensions and locking options."
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-800 underline-offset-4 hover:underline"
          >
            Request a quote or layout drawing
          </Link>
        </div>
      </section>
    </div>
  )
}
