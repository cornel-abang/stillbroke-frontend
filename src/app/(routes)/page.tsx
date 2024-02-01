"use client"

import { motion } from "framer-motion";
import localFont from 'next/font/local'

import { fadeIn } from "../../components/animations/variants";
import Collections from "../../layouts/landing/collections";
import Featured from "../../layouts/landing/featured";
import Hero from "../../layouts/landing/hero";

const beyondFont = localFont({
  src: '../font/beyond-wonderland/Beyond-Wonderland.ttf',
  display: 'swap',
})

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-white text-center">
        <div className="container">
          <div className="lg:py-[200px] md:py-[140px] py-20 px-4">
            <motion.div 
              variants={fadeIn('up', 0.2)} 
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0.7}}
            >
              <h4 className="md:text-3xl text-2xl mb-5">STYLE . ATTITUDE . STREET . CULTURE</h4>
              <p className={`md:text-3xl text-2xl font-light ${beyondFont.className}`}>
                Hustle like you’re 
                <span className="text-[#FF0000] font-medium"> Still </span> 
                damn 
                <span className="text-black font-medium"> Broke </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Collections />
      <Featured />
    </main>
  )
}
