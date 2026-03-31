'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const CataloguePage = () => {
  const catalogues = [
    {
      title: 'Office Furniture Catalogue 2024',
      description: 'Office cabinets, filing and storage — single door through library systems',
      pages: 24,
      size: '2.5 MB',
      category: 'Office Furniture',
      image: '🏢'
    },
    {
      title: 'Home Furniture Collection',
      description: 'Wardrobes and home storage solutions',
      pages: 32,
      size: '3.2 MB',
      category: 'Home Furniture',
      image: '🏠'
    },
    {
      title: 'Locker Solutions Guide',
      description: 'Secure storage solutions for schools, offices, and gyms',
      pages: 16,
      size: '1.5 MB',
      category: 'Lockers',
      image: '🔒'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Product Catalogue</h1>
            <p className="text-xl lg:text-2xl text-sky-100 max-w-3xl mx-auto">
              Browse our comprehensive catalogues to explore our complete range of furniture solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogues.map((catalogue, index) => (
              <motion.div
                key={catalogue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Catalogue Preview */}
                <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                    {catalogue.image}
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {catalogue.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {catalogue.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {catalogue.description}
                  </p>

                  {/* Catalogue Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        {catalogue.pages} pages
                      </span>
                      <span>{catalogue.size}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1 group/btn">
                      <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Preview
                    </Button>
                    <Button className="flex-1 group/btn">
                      <Download className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom Catalogue */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need a Custom Catalogue?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We can create a personalized catalogue with specific products for your project. 
              Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Request Custom Catalogue
                <FileText className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Questions About Our Products?</h2>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Our team is here to help you find the perfect furniture solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold">Call Us</p>
                <p className="text-sky-100">+91-94483-67202</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold">Email Us</p>
                <p className="text-sky-100">koradafurniture@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CataloguePage
