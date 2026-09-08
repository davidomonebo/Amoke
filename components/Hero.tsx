import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onOrder }: { onOrder?: () => void }) {
  return (
    <section className="bg-gradient-to-b from-amokeCream to-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-amokeGreen">
            Your Favourite Amoke Oge Meal, Just a Few Clicks Away.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-gray-700 mt-4 max-w-xl">
            Select your branch, choose your meal, customize your order, pay online, and enjoy your food without unnecessary queues.
          </motion.p>
          <div className="mt-6 flex gap-4">
            <button onClick={onOrder} className="px-6 py-3 rounded-md bg-amokeGreen text-white font-semibold shadow">Order Now</button>
            <a href="#menu" className="px-6 py-3 rounded-md border border-gray-200 text-gray-800">Explore Our Menu</a>
          </div>
        </div>
        <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img alt="Nigerian food" src="/images/hero.png" className="w-full h-80 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
