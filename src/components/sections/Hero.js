'use client'
import { motion } from 'framer-motion'
import { Play, Star, Users, Award } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container-custom mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-accent-400 fill-current" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-5 h-5 text-accent-400" />
              <span className="text-sm">500+ Members</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-5 h-5 text-accent-400" />
              <span className="text-sm">Certified Trainers</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Body,
            <span className="block text-gradient">Elevate Your Mind</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Discover the perfect blend of strength training and yoga in the heart of Deoghar. 
            Join Jharkhand's most innovative fitness center.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Free Trial
            </button>
            <button 
              className="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors"
              onClick={() => setIsVideoPlaying(true)}
            >
              <div className="bg-accent-400 p-3 rounded-full">
                <Play className="w-6 h-6 text-black fill-current" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
