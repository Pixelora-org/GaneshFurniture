'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Truck } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const ProductsPage = () => {
  const categories = [
    {
      name: 'Office Cabinets',
      description: 'Professional storage — single door, double door, slimline, library and more.',
      features: ['Single & double door', 'Slimline', 'Library systems', 'Brochure download'],
      image: '🏢',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      href: '/products/office-cabinets',
      popular: true,
    },
    {
      name: 'Lockers',
      description: 'Secure locker banks for workplaces, education and industrial facilities.',
      features: ['Multi-tier options', 'Robust locking', 'Ventilated doors', 'Brochure download'],
      image: '🔒',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'from-gray-50 to-gray-100',
      href: '/products/lockers',
      popular: true,
    },
    {
      name: 'Wardrobes',
      description: 'Spacious bedroom storage — sizes and finishes tailored to your space.',
      features: ['Large capacity', 'Organised interiors', 'Quality hardware', 'Showroom support'],
      image: '👔',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      href: '/products/wardrobes',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Our Products</h1>
            <p className="mx-auto max-w-3xl text-xl text-sky-100 lg:text-2xl">
              Office cabinets, lockers and wardrobes — engineered for durability and daily use.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {category.popular && (
                  <div className="absolute right-4 top-4 z-10">
                    <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                      Popular
                    </span>
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative p-8">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-3xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    {category.image}
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-gray-800">
                    {category.name}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{category.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-gray-900">Highlights</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="mr-3 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="group/btn w-full justify-between"
                    onClick={() => (window.location.href = category.href)}
                  >
                    View range
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Why choose our products?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We&apos;re committed to exceptional furniture with unmatched quality, durability, and
              customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 transition-transform duration-300 group-hover:scale-110">
                <Star className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Premium quality</h3>
              <p className="leading-relaxed text-gray-600">
                Fine materials and careful fabrication so every piece meets our standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 transition-transform duration-300 group-hover:scale-110">
                <Shield className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Built to last</h3>
              <p className="leading-relaxed text-gray-600">
                Robust construction for offices, institutions and high-traffic environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 transition-transform duration-300 group-hover:scale-110">
                <Truck className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Reliable delivery</h3>
              <p className="leading-relaxed text-gray-600">
                Efficient logistics across Karnataka so your project stays on schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to plan your space?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-sky-100">
              Contact us for quotations, site visits and custom layouts.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="group"
                onClick={() => (window.location.href = '/contact')}
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
                onClick={() => (window.location.href = '/catalogue')}
              >
                View catalogue
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
