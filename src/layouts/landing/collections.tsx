import Image from "next/image"
import Link from "next/link"

function Collections() {
  return (
    <section className="collections">
      <figure className="w-full text-center relative m-0 bg-white" tabIndex={-1}>
        <h2 className="collection_categoryTag">Men</h2>

        <div className="relative">
          <Link href="/#" className="linkWrapper">
            <span className="sr_only"></span>
          </Link>

          <div className="imageWrapper">
            <Image 
              src="/images/men_collections.webp"
              width={1000}
              height={1500} 
              alt="men collections" 
            />
          </div>
        </div>

        <div className="collection_ctaAndTitle_container">
          <div className="md:h-[25vh] md:w-full"></div>
          <div className="lg:bottom-10 lg:sticky relative text-center w-[calc(100vw-2rem)] lg:mb-20 lg:w-auto mt-auto mx-auto mb-8">
            <h3 className="section_text_title collection_text_title">Shoes</h3>
            <Link href="/#" className="cta bg-white text-black opacity-100 py-4 px-6">
              Explore The Collection
            </Link>
          </div>
        </div>
      </figure>
      
      <figure className="w-full text-center relative m-0 bg-white" tabIndex={-1}>
        <h2 className="collection_categoryTag">Women</h2>

        <div className="relative">
          <Link href="/#" className="linkWrapper">
            <span className="sr_only"></span>
          </Link>

          <div className="imageWrapper">
            <Image 
              src="/images/women_collections.webp" 
              width={1000}
              height={1500}
              alt="women collections" 
            />
          </div>
        </div>

        <div className="collection_ctaAndTitle_container">
          <div className="md:h-[25vh] md:w-full"></div>
          <div className="lg:bottom-10 lg:sticky relative text-center w-[calc(100vw-2rem)] lg:mb-20 lg:w-auto mt-auto mx-auto mb-8">
            <h3 className="section_text_title collection_text_title">Clothings</h3>
            <Link href="/#" className="cta bg-white text-black opacity-100 py-4 px-6">
              Explore The Collection
            </Link>
          </div>
        </div>
      </figure>
    </section>
  )
}

export default Collections