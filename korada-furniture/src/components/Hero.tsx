'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { spotlightSlides } from '@/data/spotlight'

const INTERVAL_MS = 6000

const Hero = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const len = spotlightSlides.length

  const next = useCallback(() => setIndex((i) => (i + 1) % len), [len])
  const prev = useCallback(() => setIndex((i) => (i - 1 + len) % len), [len])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL_MS)
    return () => clearInterval(id)
  }, [next, paused])

  const slide = spotlightSlides[index]

  return (
    <section
      className="relative min-h-[min(88vh,820px)] w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-[min(88vh,820px)] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-20 sm:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-copy'}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="max-w-xl text-white lg:max-w-2xl"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300/90">
                Korada Furniture
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/85 sm:text-xl">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={slide.href}
                  className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {slide.exploreLabel}
                </Link>
                <Link
                  href="/catalogue"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/70 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  View catalogue
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-14 flex items-center justify-between gap-4 sm:mt-16">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 justify-center gap-2 sm:justify-end">
              {spotlightSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-sky-400' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
