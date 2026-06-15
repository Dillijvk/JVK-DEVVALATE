import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JVK DevValat - Free Developer Templates',
  description: 'Browse and download premium developer templates, UI components, and full-stack projects for free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        {children}
      </body>
    </html>
  )
}
