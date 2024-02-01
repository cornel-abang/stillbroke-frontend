import Image from "next/image"

import About_Bg from '../../../public/images/about_bg.webp'
import Transition from "../../components/animations/transition"

function Hero() {
  return (
    <header className="hero_small">
      <div className="hero_background_image_small_wrapper">
        <Image 
          src={About_Bg}
          width={1000}
          height={327}
          alt="about stillbroke" 
          priority
          className="w-full h-full object-cover opacity-100 z-0" 
        />
      </div>

      <div 
        className="pt-0 md:pt-[65px] lg:pt-[120px] px-[30px] absolute md:translate-y-0 translate-y-[-50%] 
        md:top-0 top-[50%] right-0 left-0 bottom-0 text-center z-20 w-full before:inline-block 
        before:h-full before:align-middle"
      >
        <div className="w-full inline-block align-middle">
          <Transition>
            <h1 className="hero_title">Contact Us</h1>
          </Transition>
        </div>
      </div>
    </header>
  )
}

export default Hero