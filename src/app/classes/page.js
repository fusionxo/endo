'use client'
import { motion } from 'framer-motion'
import { Clock, Users, Dumbbell, Heart } from 'lucide-react'

const schedule = [
  { time: '6:00 AM', monday: 'Power Yoga', tuesday: 'Strength Training', wednesday: 'HIIT', thursday: 'Yoga Flow', friday: 'Circuit Training', saturday: 'Power Yoga', sunday: 'Rest' },
  { time: '7:00 AM', monday: 'Strength Training', tuesday: 'Yoga Flow', wednesday: 'Power Yoga', thursday: 'HIIT', friday: 'Yoga Flow', saturday: 'Strength Training', sunday: 'Meditation' },
  { time: '8:00 AM', monday: 'HIIT', tuesday: 'Power Yoga', wednesday: 'Strength Training', thursday: 'Circuit Training', friday: 'Power Yoga', saturday: 'HIIT', sunday: 'Rest' },
  { time: '6:00 PM', monday: 'Yoga Flow', tuesday: 'HIIT', wednesday: 'Power Yoga', thursday: 'Strength Training', friday: 'Circuit Training', saturday: 'Yoga Basics', sunday: 'Rest' },
  { time: '7:00 PM', monday: 'Strength Training', tuesday: 'Circuit Training', wednesday: 'Yoga Flow', thursday: 'Power Yoga', friday: 'HIIT', saturday: 'Strength Training', sunday: 'Meditation' },
  { time: '8:00 PM', monday: 'Power Yoga', tuesday: 'Yoga Flow', wednesday: 'HIIT', thursday: 'Strength Training', friday: 'Power Yoga', saturday: 'Circuit Training', sunday: 'Rest' }
]

const classes = [
  {
    name: 'Power Strength Training',
    icon: Dumbbell,
    duration: '60 min',
    intensity: 'High',
    maxParticipants: 12,
    description: 'Build lean muscle and increase strength with compound movements and progressive overload techniques.',
    benefits: ['Muscle Building', 'Strength Gains', 'Fat Burning', 'Bone Density']
  },
  {
    name: 'Vinyasa Flow Yoga',
    icon: Heart,
    duration: '75 min',
    intensity: 'Medium',
    maxParticipants: 20,
    description: 'Dynamic yoga practice linking breath with movement for flexibility, balance, and mindfulness.',
    benefits: ['Flexibility', 'Balance', 'Stress Relief', 'Mind-Body Connection']
  },
  {
    name: 'HIIT Cardio Blast',
    icon: Clock,
    duration: '45 min',
    intensity: 'High',
    maxParticipants: 15,
    description: 'High-intensity interval training for maximum calorie burn and cardiovascular fitness.',
    benefits: ['Fat Loss', 'Cardio Health', 'Endurance', 'Time Efficient']
  },
  {
    name: 'Circuit Training',
    icon: Users,
    duration: '50 min',
    intensity: 'Medium-High',
    maxParticipants: 16,
    description: 'Full-body workout combining strength and cardio exercises in a fun, challenging format.',
    benefits: ['Full Body Workout', 'Variety', 'Group Motivation', 'Functional Fitness']
  }
]

export default function Classes() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-text-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent-400">Classes</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover a wide range of fitness classes designed to challenge, inspire, and transform you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class Types */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-surface rounded-2xl shadow-lg p-8 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 p-4 rounded-full mr-4">
                    <classItem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{classItem.name}</h3>
                    <div className="flex items-center space-x-4 text-text-secondary mt-2">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{classItem.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Max {classItem.maxParticipants}</span>
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        classItem.intensity === 'High' ? 'bg-red-900/50 text-red-300' :
                        classItem.intensity === 'Medium-High' ? 'bg-orange-900/50 text-orange-300' :
                        'bg-green-900/50 text-green-300'
                      }`}>
                        {classItem.intensity}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6">{classItem.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {classItem.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="btn-primary w-full">
                  Book This Class
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-text-primary">Weekly Schedule</h2>
            <p className="text-xl text-text-secondary">Plan your week with our comprehensive class timetable</p>
          </motion.div>

          <div className="bg-secondary-900 rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-text-secondary">
                <thead className="bg-primary-500/10 text-text-primary">
                  <tr>
                    <th className="p-4 text-left">Time</th>
                    <th className="p-4 text-center">Monday</th>
                    <th className="p-4 text-center">Tuesday</th>
                    <th className="p-4 text-center">Wednesday</th>
                    <th className="p-4 text-center">Thursday</th>
                    <th className="p-4 text-center">Friday</th>
                    <th className="p-4 text-center">Saturday</th>
                    <th className="p-4 text-center">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, index) => (
                    <tr key={row.time} className={index % 2 === 0 ? 'bg-surface/50' : 'bg-surface'}>
                      <td className="p-4 font-semibold text-text-primary">{row.time}</td>
                      <td className="p-4 text-center">{row.monday}</td>
                      <td className="p-4 text-center">{row.tuesday}</td>
                      <td className="p-4 text-center">{row.wednesday}</td>
                      <td className="p-4 text-center">{row.thursday}</td>
                      <td className="p-4 text-center">{row.friday}</td>
                      <td className="p-4 text-center">{row.saturday}</td>
                      <td className="p-4 text-center text-gray-500">{row.sunday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
