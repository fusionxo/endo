'use client'
import { motion } from 'framer-motion'

export default function Hero({ onFreeTrial }) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center py-16 md:py-28 bg-gradient-to-br from-primary via-background to-background">
      <div className="container-custom flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-gradient mb-4 text-center"
        >
          Transform Your Body, <span className="block">Elevate Your Mind</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="text-lg md:text-2xl text-gray-200 mb-8 font-medium text-center max-w-2xl"
        >
          Welcome to ENDORPHIN STRENGTH & YOGA - Deoghar’s premium gym. Where people of all levels train and thrive.
        </motion.p>
        <motion.button
          whileHover={{ scale:1.07 }} whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-4"
          onClick={onFreeTrial}
        >
          Start Your Free Trial Today
        </motion.button>
      </div>
    </section>
  );
}
