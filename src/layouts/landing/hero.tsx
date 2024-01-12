import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <section 
      className="lg:pt-10 pt-12 w-full text-center relative mx-auto 
      flex flex-col bg-white lg:pb-12 justify-center items-center"
    >
      <div className="lg:pb-0 pb-12 bg-white h-fit w-fit m-auto relative">
        <div className="hero_mediaContainer">
          <div className="w-screen flex justify-center">
            <div className="relative">
              <Link href="/#" className="linkWrapper">
                <span className="sr_only"></span>
              </Link>

              <div className="hero_imageWrapper">
                <Image 
                  src="/images/hero_image.webp" 
                  alt="hero" 
                  className="w-full h-full object-cover" 
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <h2 className="section_text_title hero_text_title">Stillbroke Valigeria</h2>

            <span className="inline-block max-w-fit">
              <Link href="/#" className="cta bg-black text-white opacity-100 py-4 px-6">
                Explore Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero