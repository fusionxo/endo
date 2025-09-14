import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Endorphin Strength & Yoga - Transform Your Body, Elevate Your Mind',
  description: 'Premier fitness and yoga center in Deoghar, Jharkhand. Professional strength training, yoga classes, and personal training.',
  keywords: 'gym deoghar, yoga deoghar, fitness center, strength training, personal trainer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
