import Link from "next/link";
import Image from "next/image";

import HeroDarkBg from '../../../public/images/hero_dark_bg.webp';
import HeroMobileBg from '../../../public/images/hero_mobile_bg.webp';

function Hero() {
  return (
    <>
      {/* Desktop View */}
      <section className="md:block hidden">
        <Link href="/#" className="block relative h-[100vh]">
          {/* <Link className="linkWrapper">
            <span className="sr_only"></span>
          </Link> */}

          <div className="h-full flex">
            <Image 
              src={HeroDarkBg} 
              priority
              alt="hero" 
              className="max-w-full w-2/4 h-full object-cover object-[50%_50%] transition-all opacity-100" 
            />
            <video 
              preload="auto" 
              autoPlay 
              playsInline 
              loop 
              muted 
              className="max-w-full w-2/4 h-full object-cover object-[50%_50%] transition-all opacity-100" 
            >
              <source 
                src="/images/video.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>

          <div className="text-white flex flex-col justify-end absolute top-4 bottom-4 left-16 right-16">
            <p className="md:absolute top-2/4 text-sm">
              EXPLORE OUR SHOP
            </p>

            {/* <p className="md:absolute top-2/4 right-0 text-sm">
              <span className="">SHOP NOW</span>
            </p> */}
          </div>
        </Link>
      </section>
      
      {/* Mobile View */}
      <section className="block md:hidden">
        <Link href="/#" className="block relative h-[90vh]">
          {/* <Link className="linkWrapper">
            <span className="sr_only"></span>
          </Link> */}

          <div className="h-full flex">
            <Image 
              src={HeroMobileBg} 
              alt="hero" 
              className="max-w-full w-full h-full object-cover object-[50%_50%] transition-all opacity-100" 
            />
          </div>

          <div className="text-white flex flex-col justify-end absolute top-4 bottom-4 left-4 right-4">
            <p className="text-sm">
              EXPLORE OUR SHOP
            </p>

            {/* <p className="text-sm">
              <span className="">SHOP NOW</span>
            </p> */}
          </div>
        </Link>
      </section>
    </>
  )
}

export default Hero