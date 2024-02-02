import Image from "next/image"
import Link from "next/link"

function Collections() {
  return (
    <div>
      <section className="collections">
        <figure className="w-full text-center relative bg-white">
          <div className="relative">
            <Link href="/#" className="linkWrapper">
              <span className="sr_only"></span>
            </Link>

            <div className="imageWrapper">
              <Image 
                src="/images/collection1.jpg"
                width={1000}
                height={1500} 
                alt="collections 1" 
              />
            </div>
          </div>

          <div className="collection_ctaAndTitle_container">
            <div className="md:h-[25vh] md:w-full"></div>
            <div className="lg:bottom-10 lg:sticky relative text-center w-[calc(100vw-2rem)] lg:mb-20 lg:w-auto mt-auto mx-auto mb-8">
              <h3 className="section_text_title collection_text_title">Collection 1</h3>
              <Link href="/shop/categories" className="text_hover_underline text_hover_underline_white text-white">
                Explore The Collection
              </Link>
            </div>
          </div>
        </figure>

        <figure className="w-full text-center relative m-0 bg-white">
          <div className="relative">
            <Link href="/#" className="linkWrapper">
              <span className="sr_only"></span>
            </Link>

            <div className="imageWrapper">
              <Image 
                src="/images/collection2.jpg" 
                width={1000}
                height={1500}
                alt="collections 2" 
              />
            </div>
          </div>

          <div className="collection_ctaAndTitle_container">
            <div className="md:h-[25vh] md:w-full"></div>
            <div className="lg:bottom-10 lg:sticky relative text-center w-[calc(100vw-2rem)] lg:mb-20 lg:w-auto mt-auto mx-auto mb-8">
              <h3 className="section_text_title collection_text_title">Collection 2</h3>
              <Link href="/shop/categories" className="text_hover_underline text_hover_underline_white text-white">
                Explore The Collection
              </Link>
            </div>
          </div>
        </figure>
      </section>
      
      <section className="collections">
        <figure className="w-full text-center relative bg-white">
          <div className="relative">
            <Link href="/#" className="linkWrapper">
              <span className="sr_only"></span>
            </Link>

            <div className="imageWrapper">
              <Image 
                src="/images/collection3.jpg"
                width={1000}
                height={1500} 
                alt="collections 3" 
              />
            </div>
          </div>

          <div className="collection_ctaAndTitle_container">
            <div className="md:h-[25vh] md:w-full"></div>
            <div className="lg:bottom-10 lg:sticky relative text-center w-[calc(100vw-2rem)] lg:mb-20 lg:w-auto mt-auto mx-auto mb-8">
              <h3 className="section_text_title collection_text_title">Collection 3</h3>
              <Link href="/shop/categories" className="text_hover_underline text_hover_underline_white text-white">
                Explore The Collection
              </Link>
            </div>
          </div>
        </figure>
      
        <figure className="w-full text-center relative m-0 bg-white">
          <div className="relative">
            <Link href="/#" className="linkWrapper">
              <span className="sr_only"></span>
            </Link>

            <div className="imageWrapper">
              <Image 
                src="/images/collection1.jpg" 
                width={1000}
                height={1500}
                alt="collections 4" 
              />
            </div>
          </div>

          <div className="collection_ctaAndTitle_container">
            <div className="md:h-[25vh] md:w-full"></div>
            <div className="lg:bottom-10 lg:sticky relative text-center w-[calc(100vw-2rem)] lg:mb-20 lg:w-auto mt-auto mx-auto mb-8">
              <h3 className="section_text_title collection_text_title">Collection 4</h3>
              <Link href="/shop/categories" className="text_hover_underline text_hover_underline_white text-white">
                Explore The Collection
              </Link>
            </div>
          </div>
        </figure>
      </section>
    </div>
  )
}

export default Collections