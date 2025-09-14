'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Users, Trophy } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description: 'Combining traditional yoga philosophy with modern strength training for complete mind-body transformation.'
  },
  {
    icon: Target,
    title: 'Personalized Approach',
    description: 'Customized fitness plans designed specifically for your goals, fitness level, and lifestyle in Deoghar.'
  },
  {
    icon: Users,
    title: 'Community Spirit',
    description: 'Join a supportive community of fitness enthusiasts who motivate and inspire each other every day.'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Our members achieve remarkable transformations through our science-backed training methodologies.'
  }
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Endorphin?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another gym. We're Deoghar's premier wellness destination, 
            where ancient yoga wisdom meets cutting-edge fitness science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
