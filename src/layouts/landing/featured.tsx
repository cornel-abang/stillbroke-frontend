import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { fadeIn } from "../../components/animations/variants"

function Featured() {
  return (
    <section className="bg-white text-center">
      <div className="container">
        <h3 
          className="md:pt-40 pt-20 text-black mx-auto 
          lg:text-lg text-base uppercase font-bold"
        >
          Featured
        </h3>

        <figure 
          className="flex lg:flex-row flex-col gap-10 justify-center relative lg:mt-32 
          mt-16 lg:mx-16 mx-4 lg:pb-40 pb-20 lg:w-[calc(100%-8rem)] w-[calc(100%-2rem)]"
        >
          <div className="flex flex-col gap-y-6 md:gap-y-16 text-left pt-5 lg:w-[50%] w-full">
            <div>
              <Image 
                src="/images/featured1.jpg" 
                alt="featured" 
                width="564" 
                height="751" 
                className="rounded-sm w-full h-full" 
              />
            </div>
            <div className="border-r-2 border-[#FF0000]">
              <motion.div 
                variants={fadeIn('up', 0.2)} 
                initial='hidden'
                whileInView='show'
                viewport={{once: false, amount: 0.7}}
              >
                <h2 className="text-2xl font-semibold">New Arrivals.</h2>
                <p className="text-base font-normal">
                  <Link href="/#" className="underline cursor-pointer">
                    Explore
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 md:gap-y-20 text-left lg:w-[50%] w-full">
            <div className="border-l-2 border-[#FF0000] md:px-6">
              <motion.div 
                variants={fadeIn('up', 0.2)} 
                initial='hidden'
                whileInView='show'
                viewport={{once: false, amount: 0.7}}
              >
                <p className="text-lg font-normal text-right md:text-left">
                  Prepare to ignite the streets with our newest *URBANPACE arrivals, 
                  where we&apos;ve revolutionized streetwear with an audacious and daring flair.
                </p>
              </motion.div>
            </div>
            <div>
              <Image 
                src="/images/featured2.jpg" 
                alt="featured" 
                width="564" 
                height="751" 
                className="rounded w-full h-full object-cover object-center" 
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Featured