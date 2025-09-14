'use client'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '910000000000'
  const message = "Hi! I'm interested in a free trial at Endorphin Gym.";
  return (
    <motion.a
      whileHover={{ scale:1.07 }} whileTap={{ scale:0.92 }}
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank" rel="noopener"
      className="fixed bottom-5 right-5 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform z-50"
    >
      <MessageCircle size={32}/>
    </motion.a>
  )
}
