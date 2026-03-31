'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function WardrobesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-violet-800 to-purple-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All products
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl font-bold lg:text-5xl"
          >
            Wardrobes
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-violet-100">
            We offer spacious wardrobe solutions — speak with us for door counts, finishes and
            installation across Karnataka.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-gray-600">
          Detailed wardrobe ranges are available through our catalogue and showroom team. Share your
          requirements and we&apos;ll recommend the right layout.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/catalogue"
            className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            View catalogue
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}
