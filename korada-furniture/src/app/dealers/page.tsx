'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Star, CheckCircle, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const DealersPage = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Access to our premium range of furniture with guaranteed quality'
    },
    {
      icon: Users,
      title: 'Training Support',
      description: 'Comprehensive training on our products and sales techniques'
    },
    {
      icon: CheckCircle,
      title: 'Marketing Support',
      description: 'Marketing materials and promotional support to grow your business'
    },
    {
      icon: Phone,
      title: 'Dedicated Support',
      description: '24/7 support from our team to help you succeed'
    }
  ]

  const requirements = [
    'Minimum 2 years experience in furniture retail',
    'Dedicated showroom space of at least 500 sq ft',
    'Strong local market presence and customer base',
    'Commitment to maintaining our quality standards',
    'Financial stability and business registration'
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Become a Dealer</h1>
            <p className="text-xl lg:text-2xl text-sky-100 max-w-3xl mx-auto">
              Join our network of authorized dealers and grow your business with Korada Furniture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a trusted brand with a proven track record of success and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Dealer Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                To become an authorized Korada Furniture dealer, you must meet the following criteria:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Submit Application</h4>
                    <p className="text-gray-600 text-sm">Fill out our dealer application form with your business details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Review Process</h4>
                    <p className="text-gray-600 text-sm">Our team will review your application and conduct background checks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Site Visit</h4>
                    <p className="text-gray-600 text-sm">We&apos;ll visit your location to assess your showroom and facilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Agreement & Training</h4>
                    <p className="text-gray-600 text-sm">Sign the dealer agreement and complete our training program</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Dealers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Dealer Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing network of successful dealers across Karnataka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Hubli Showroom', location: 'Hubli, Karnataka', rating: 4.9 },
              { name: 'Bangalore Dealer', location: 'Bangalore, Karnataka', rating: 4.8 },
              { name: 'Mysore Partner', location: 'Mysore, Karnataka', rating: 4.9 }
            ].map((dealer, index) => (
              <motion.div
                key={dealer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center group hover:bg-amber-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dealer.name}</h3>
                <p className="text-gray-600 mb-4">{dealer.location}</p>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="h-4 w-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{dealer.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Network?</h2>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Start your journey as a Korada Furniture dealer and grow your business with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Apply Now
                <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                Download Dealer Kit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our dealer development team is here to help you understand our partnership program
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8">
                <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with our dealer development team</p>
                <p className="text-amber-600 font-semibold">+91-94483-67202</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <Mail className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions and requirements</p>
                <p className="text-amber-600 font-semibold">koradafurniture@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DealersPage
