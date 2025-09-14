'use client'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FreeTrialModal({ open, setOpen }) {
  // (Add state for form, handle submit like your HTML demo)
  return (
    <AnimatePresence>
    {open && (
      <Dialog open={open} onClose={()=>setOpen(false)} className="fixed inset-0 z-50">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.17 }}
            className="bg-brand-blue rounded-lg p-8 max-w-md w-full relative"
          >
            <button onClick={()=>setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white font-bold text-xl">✕</button>
            <h2 className="text-2xl font-bold text-center mb-6 text-brand-orange">Book Your Free Trial!</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-brand-dark text-white"/>
              <input type="tel" placeholder="Your Phone Number" className="w-full p-3 rounded-md bg-brand-dark text-white"/>
              <select className="w-full p-3 rounded-md bg-brand-dark text-white">
                <option>Select a class...</option>
                <option>Power Strength Training</option>
                <option>Vinyasa Flow Yoga</option>
                <option>HIIT Cardio Blast</option>
              </select>
              <button type="submit" className="w-full bg-brand-orange text-white py-3 rounded-full hover:bg-opacity-80 font-bold">
                Claim My Free Pass
              </button>
            </form>
          </motion.div>
        </motion.div>
      </Dialog>
    )}
    </AnimatePresence>
  );
}
