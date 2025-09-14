'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Near Baidyanath Temple',
    program: 'Yoga + Strength Training',
    result: 'Lost 15kg in 6 months',
    quote: 'Endorphin perfectly blends traditional yoga with modern fitness. The trainers understand local culture while bringing world-class expertise.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Amit Kumar',
    location: 'Deoghar Station Road',
    program: 'Personal Training',
    result: 'Gained 8kg muscle mass',
    quote: 'As a working professional, I needed flexible timings and personalized attention. Endorphin delivered exactly what I needed.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sunita Devi',
    location: 'Rikhia Ashram Area',
    program: 'Group Classes',
    result: 'Improved flexibility & strength',
    quote: 'The community at Endorphin is amazing. Every day feels like exercising with family. The yoga classes have transformed my well-being.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
]

export default function Testimonials() {
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
            What Our <span className="text-gradient">Members Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives at Endorphin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 card-hover"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <p className="text-primary-500 text-sm font-medium">{testimonial.program}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="bg-primary-50 rounded-lg p-4">
                <div className="text-primary-500 font-semibold text-center">
                  🎉 {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
