'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const stats = [
  { number: 500, label: 'Active Members', suffix: '+' },
  { number: 5, label: 'Years Experience', suffix: '+' },
  { number: 15, label: 'Expert Trainers', suffix: '+' },
  { number: 98, label: 'Success Rate', suffix: '%' }
]

function Counter({ end, duration = 2000, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return count
}

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding gradient-bg" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={stat.number} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Deoghar's Fastest Growing Fitness Community
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Be part of a movement that's transforming lives and building healthier, stronger individuals in our community.
          </p>
          <button className="btn-primary bg-white text-primary-500 hover:bg-gray-100">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
