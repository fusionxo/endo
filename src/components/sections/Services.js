'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Dumbbell, Heart, Users, Clock } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Professional strength and conditioning programs designed to build muscle, increase power, and boost metabolism.',
    features: ['Free Weights', 'Machine Training', 'Functional Fitness', 'Progressive Overload'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Heart,
    title: 'Yoga Classes',
    description: 'Traditional and modern yoga practices to improve flexibility, balance, and mental clarity.',
    features: ['Hatha Yoga', 'Vinyasa Flow', 'Power Yoga', 'Meditation'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Users,
    title: 'Personal Training',
    description: 'One-on-one coaching with certified trainers to achieve your specific fitness goals faster.',
    features: ['Custom Workouts', 'Nutrition Guidance', 'Progress Tracking', 'Motivation Support'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: Clock,
    title: 'Group Classes',
    description: 'High-energy group workouts that combine fun with fitness in a motivating environment.',
    features: ['HIIT Training', 'Circuit Training', 'Cardio Blast', 'Core Strength'],
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fitness solutions tailored to help you achieve your health and wellness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4 bg-primary-500 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="btn-outline w-full">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
