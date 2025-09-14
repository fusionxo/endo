'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from "@/lib/animationVariants"
import { useState, useEffect } from 'react'

const statsData = [
  { number: 500, label: 'Happy Members' },
  { number: 15, label: 'Expert Trainers' },
  { number: 40, label: 'Classes Per Week' },
]

export default function Stats() {
  const [counted, setCounted] = useState([0,0,0]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    function onScroll() {
      const statsBlock = document.getElementById('home-stats-block');
      if (statsBlock && !triggered && statsBlock.getBoundingClientRect().top < window.innerHeight - 100) {
        setTriggered(true);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [triggered]);

  useEffect(() => {
    if(!triggered) return;
    statsData.forEach((stat, idx) => {
      let from = 0;
      const inc = Math.ceil(stat.number / 40);
      const animate = () => setTimeout(() => {
        setCounted(old => {
          const next = [...old];
          next[idx] = Math.min(next[idx]+inc, stat.number);
          return next;
        });
        if(from < stat.number) {
          from+=inc; animate();
        }
      }, 22);
      animate();
    });
  }, [triggered]);
  
  return (
    <section className="bg-brand-dark py-12" id='home-stats-block'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat,i) => (
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" custom={i*0.18} key={stat.label}>
              <h3 className="text-5xl font-bold text-brand-orange">{counted[i]}</h3>
              <p className="text-lg text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
