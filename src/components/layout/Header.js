'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Dumbbell } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Classes', href: '/classes' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Membership', href: '/membership' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header({ onFreeTrial }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={
        `fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-brand-blue shadow-lg' : 'bg-transparent'}`
      }>
      <nav className='container-custom flex justify-between items-center h-16 px-4'>
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-brand-orange">ENDORPHIN</span> GYM
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-7">
          {navigation.map(item =>
            <Link key={item.name} href={item.href}
              className="text-white hover:text-brand-orange transition"
            >{item.name}</Link>)}
          <button className="bg-brand-orange text-white rounded-full px-6 py-2 font-semibold hover:bg-opacity-80"
            onClick={() => onFreeTrial()}>
            Book Free Trial
          </button>
        </div>
        {/* Mobile Nav Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>
        {/* Mobile Nav Panel */}
        {isOpen && <div className="absolute top-16 left-0 w-full bg-brand-blue/95 text-center py-4 space-y-2 md:hidden shadow-2xl">
          {navigation.map(item =>
            <Link key={item.name} href={item.href}
              className="block text-white py-2 hover:bg-brand-orange" onClick={()=>setIsOpen(false)}>
              {item.name}
            </Link>)}
          <button className="w-3/4 mt-2 bg-brand-orange text-white rounded-full py-3 mx-auto"
            onClick={() => { setIsOpen(false); onFreeTrial(); }}>Book Free Trial</button>
        </div>}
      </nav>
    </header>
  );
}
