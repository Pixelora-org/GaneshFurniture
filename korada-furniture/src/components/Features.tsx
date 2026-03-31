'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Truck, Shield, Headphones, Clock, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description:
        'We use only the finest materials and craftsmanship to ensure every piece meets our high standards.',
      color: 'text-sky-700',
      bgColor: 'bg-sky-100',
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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">Why Korada</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 lg:text-5xl">
              Why Choose Korada Furniture?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We&apos;re committed to exceptional furniture solutions with unmatched quality, service,
              and customer satisfaction.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 py-7 md:gap-6"
                >
                  <div className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.bgColor}`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-sky-700">
                      {feature.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"
        >
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-slate-900 md:text-4xl">1000+</div>
              <div className="mt-1 text-sm text-slate-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 md:text-4xl">5000+</div>
              <div className="mt-1 text-sm text-slate-600">Products Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 md:text-4xl">15+</div>
              <div className="mt-1 text-sm text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 md:text-4xl">100%</div>
              <div className="mt-1 text-sm text-slate-600">Commitment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
