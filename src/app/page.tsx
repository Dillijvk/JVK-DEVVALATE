'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-gray-900/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg"
            />
            <span className="text-xl font-bold">JVK DevValat</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/marketplace" className="text-gray-300 hover:text-white transition">
              Marketplace
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition">
              Docs
            </Link>
            <Link href="/auth/login" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold hover:shadow-lg transition text-sm">
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
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
          Access 100+ free templates for web projects, dashboards, landing pages, and more.
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

      {/* Features */}
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

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 JVK DevValat. All rights reserved. MIT License.</p>
        </div>
      </footer>
    </>
  )
}
