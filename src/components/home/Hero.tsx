'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Premium Developer Templates
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Access 100+ free templates for web projects, dashboards, landing pages, and more. Everything you need to build faster.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <Link href="/marketplace" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold hover:shadow-lg transition">Explore Templates</Link>
        <Link href="/docs" className="px-8 py-3 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition">View Docs</Link>
      </motion.div>
    </section>
  )
}
