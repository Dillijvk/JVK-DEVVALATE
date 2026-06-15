'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition text-center">
            <h3 className="text-2xl font-bold mb-2">📦 Templates</h3>
            <p className="text-gray-400">Full-stack projects, landing pages, dashboards</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition text-center">
            <h3 className="text-2xl font-bold mb-2">🎨 Components</h3>
            <p className="text-gray-400">UI components, navbars, forms, buttons</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition text-center">
            <h3 className="text-2xl font-bold mb-2">🚀 Resources</h3>
            <p className="text-gray-400">Setup guides, documentation, best practices</p>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}
