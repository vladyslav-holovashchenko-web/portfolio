import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Vladyslav Holovashchenko',
  description: 'Welcome to my personal portfolio showcasing my work as a Full Stack JavaScript Developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
        {children}
      </body>
    </html>
  )
}
