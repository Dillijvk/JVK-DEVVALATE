'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
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
          <Link href="/auth/login" className="btn-primary text-sm">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  )
}
