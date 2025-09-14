'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding gradient-bg" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-text-primary"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Take the first step towards a healthier, stronger you. Join Deoghar's premier fitness community and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
              <span>Get Your Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 text-text-primary hover:text-accent-400 transition-colors text-lg">
              <Phone className="w-5 h-5" />
              <span>Call Now: +91 98765 43210</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
