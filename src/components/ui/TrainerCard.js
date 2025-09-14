import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export default function TrainerCard({ name, role, img, desc, delay=0 }) {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.19} glareColor="#FF6B35" tiltMaxAngleX={13} tiltMaxAngleY={17}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:true, amount: 0.18 }}
        transition={{ duration: 0.75, delay }}
        className="flip-card h-80 bg-brand-blue rounded-lg shadow-xl cursor-pointer overflow-hidden"
        style={{ perspective: '1000px', minHeight: '20rem'}}
      >
        {/* Front face */}
        <div className="flip-card-inner grid grid-cols-1">
          <div className="flip-card-front bg-cover bg-center relative" style={{backgroundImage: `url('${img}')`}}>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-brand-orange">{role}</p>
            </div>
          </div>
          {/* Back */}
          <div className="flip-card-back bg-brand-dark p-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}
