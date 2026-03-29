'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Truck } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const ProductsPage = () => {
  const categories = [
    {
      name: 'Office Cabinets',
      description: 'Professional storage solutions for your office space',
      features: ['Single Door', 'Double Door', 'Slimline', 'Library'],
      image: '🏢',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      href: '/products/office-cabinets',
      popular: true
    },
    {
      name: 'Lockers',
      description: 'Secure storage solutions for personal belongings',
      features: ['Steel Construction', 'Multiple Sizes', 'Secure Locking'],
      image: '🔒',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'from-gray-50 to-gray-100',
      href: '/products/lockers',
      popular: false
    },
    {
      name: 'Dressing Cabinets',
      description: 'Elegant storage solutions for your wardrobe',
      features: ['Mirror Options', 'Multiple Drawers', 'Hanging Space'],
      image: '👗',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      href: '/products/dressing-cabinets',
      popular: false
    },
    {
      name: 'Steel Products',
      description: 'Durable metal furniture for heavy-duty use',
      features: ['Heavy Duty', 'Rust Resistant', 'Long Lasting'],
      image: '⚙️',
      color: 'from-slate-500 to-slate-600',
      bgColor: 'from-slate-50 to-slate-100',
      href: '/products/steel-products',
      popular: true
    },
    {
      name: 'Tables & Chairs',
      description: 'Comfortable seating and workspace solutions',
      features: ['Ergonomic Design', 'Adjustable Height', 'Comfortable'],
      image: '🪑',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100',
      href: '/products/tables-chairs',
      popular: false
    },
    {
      name: 'Wardrobes',
      description: 'Spacious storage solutions for your clothes',
      features: ['Large Capacity', 'Organized Storage', 'Modern Design'],
      image: '👔',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      href: '/products/wardrobes',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl lg:text-2xl text-amber-100 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality furniture solutions 
              designed to meet your every need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.image}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="group/btn w-full justify-between"
                    onClick={() => window.location.href = category.href}
                  >
                    View Collection
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional furniture solutions with unmatched
              quality, durability, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only the finest materials and craftsmanship to ensure every piece 
                meets our high standards of quality and durability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Durable & Long-lasting</h3>
              <p className="text-gray-600 leading-relaxed">
                Built to withstand daily use with robust construction and quality materials 
                that ensure your furniture lasts for years to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and reliable delivery service across Karnataka. Get your furniture 
                when you need it with our efficient logistics network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your furniture requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                View Catalogue
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
