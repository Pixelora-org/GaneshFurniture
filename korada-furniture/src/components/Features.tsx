'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Truck, Shield, Headphones, Clock, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and craftsmanship to ensure every piece meets our high standards.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service across Karnataka. Get your furniture when you need it.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Durable & Long-lasting',
      description: 'Built to withstand daily use with robust construction and quality materials.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Our knowledgeable team is here to help you choose the perfect furniture for your space.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We respect your time with punctual delivery and installation services.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Over 1000+ satisfied customers trust us for their furniture needs.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Korada Furniture?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to providing exceptional furniture solutions with unmatched
            quality, service, and customer satisfaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5000+</div>
              <div className="text-amber-100">Products Delivered</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-amber-100">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
