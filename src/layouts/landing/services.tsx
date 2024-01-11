import Link from "next/link"

function Services() {
  return (
    <section className="w-full h-full">
      <div className="pt-20 pb-4 lg:pb-8 lg:px-16 px-4 text-center m-auto flex items-center justify-center">
        <h2 className="section_text_title max-w-[800px] text-black">
          Stillbroke Services
        </h2>
      </div>
      
      <div className="container custom_grid gap-2 pt-4 lg:pt-8 pb-12 lg:px-16 md:px-8 px-4 overflow-x-auto">
        <div className="col_12 flex flex-row overflow-x-auto gap-10 w-full">
          <section className="services_card">
            <figure className="bg-white m-0">
              <div className="w-full m-auto relative">
                <Link 
                  className="services_card_linkWrapper" 
                  href="/" 
                  aria-label="" 
                  aria-hidden="true"
                >
                  <span className="sr-only"></span>
                </Link>
                <div>
                  <div className="services_card_videoContainer">
                    <div className="services_card_videoControl">
                      <div></div>
                      <div></div>
                    </div>

                    <video 
                      className="services_card_video"
                      width="100%" 
                      autoPlay={true} 
                      playsInline={true} 
                      loop={true}
                      src="" 
                      poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/263494f8-b784-459f-980e-ca55a1a67c4e/main/1280x720/2s440ms/match/image.jpg" 
                      aria-label="" 
                      tabIndex={0} 
                    >
                      <track kind="captions" />
                    </video>

                    <div 
                      aria-label="" 
                      className="services_card_videoDescription"
                      tabIndex={0}
                    >
                      <p 
                        aria-hidden="true" 
                        tabIndex={-1}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </figure>

            <div 
              tabIndex={-1} 
              className="flex flex-col items-center flex-grow-[2] flex-shrink basis-[0%] mb-8"
            >
              <h5 className="uppercase font-bold lg:text-base text-sm lg:leading-normal leading-none whitespace-break-spaces">
                Personalization
              </h5>

              <div 
                className="flex flex-col mt-4 flex-grow-[2] flex-shrink basis-[0%] whitespace-break-spaces 
                max-w-[800px] text-center font-light leading-normal text-base"
              >
                Emboss select bags, luggage, belts, leather accessories, and items from 
                the pet’s collection with initials to create a truly unique piece.
              </div>

              <div className="mt-8 flex flex-col items-center">
                <Link 
                  className="text_hover_underline text_hover_underline_black font-medium text-base leading-normal" 
                  href="/" 
                  title="Discover The Collection" 
                  aria-label="Discover The Collection" 
                  aria-hidden="false" 
                >
                  Discover The Collection
                </Link>
              </div>
            </div>
          </section>

          <section className="services_card">
            <figure className="bg-white m-0">
              <div className="w-full m-auto relative">
                <Link 
                  className="services_card_linkWrapper" 
                  href="/" 
                  aria-label="" 
                  aria-hidden="true"
                >
                  <span className="sr-only"></span>
                </Link>
                <div>
                  <div className="services_card_videoContainer">
                    <div className="services_card_videoControl">
                      <div></div>
                      <div></div>
                    </div>

                    <video 
                      className="services_card_video"
                      width="100%" 
                      autoPlay={true} 
                      playsInline={true} 
                      loop={true}
                      src="" 
                      poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/173576bf-5064-4de3-8872-cd33fef117aa/main/1280x720/2s560ms/match/image.jpg" 
                      aria-label="" 
                      tabIndex={0} 
                    >
                      <track kind="captions" />
                    </video>

                    <div 
                      aria-label="" 
                      className="services_card_videoDescription"
                      tabIndex={0}
                    >
                      <p 
                        aria-hidden="true" 
                        tabIndex={-1}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </figure>

            <div 
              tabIndex={-1} 
              className="flex flex-col items-center flex-grow-[2] flex-shrink basis-[0%] mb-8"
            >
              <h5 className="uppercase font-bold lg:text-base text-sm lg:leading-normal leading-none whitespace-break-spaces">
                Packaging
              </h5>

              <div 
                className="flex flex-col mt-4 flex-grow-[2] flex-shrink basis-[0%] whitespace-break-spaces 
                max-w-[800px] text-center font-light leading-normal text-base"
              >
                Choose our online exclusive tote or add a gift message at checkout to enjoy the 
                boutique shopping bag.
              </div>

              <div className="mt-8 flex flex-col items-center">
                <Link 
                  className="text_hover_underline text_hover_underline_black font-medium text-base leading-normal" 
                  href="/" 
                  title="Explore Gucci’s Packaging" 
                  aria-label="Explore Gucci’s Packaging" 
                  aria-hidden="false" 
                >
                  Explore Gucci’s Packaging
                </Link>
              </div>
            </div>
          </section>

          <section className="services_card">
            <figure className="bg-white m-0">
              <div className="w-full m-auto relative">
                <Link 
                  className="services_card_linkWrapper" 
                  href="/us/en/nst/monogramming" 
                  aria-label="An artisan applies gold colored embossing to the strap of the black leather Jackie 1961 handbag by Gucci." 
                  aria-hidden="true"
                >
                  <span className="sr-only">
                    An artisan applies gold colored embossing to the strap of the black leather Jackie 1961 handbag by Gucci.
                  </span>
                </Link>
                <div>
                  <div className="services_card_videoContainer">
                    <div className="services_card_videoControl">
                      <div></div>
                      <div></div>
                    </div>

                    <video 
                      className="services_card_video"
                      width="100%" 
                      autoPlay={true} 
                      playsInline={true} 
                      loop={true}
                      src="" 
                      poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/754680ac-ecbe-4461-ac4e-4b1a78557617/main/1280x720/2s346ms/match/image.jpg" 
                      aria-label="" 
                      tabIndex={0} 
                    >
                      <track kind="captions" />
                    </video>

                    <div 
                      aria-label="An artisan applies gold colored embossing to the strap of the black leather Jackie 1961 handbag by Gucci." 
                      className="services_card_videoDescription"
                      tabIndex={0}
                    >
                      <p 
                        aria-hidden="true" 
                        tabIndex={-1}
                      >
                        An artisan applies gold colored embossing to the strap of the black leather Jackie 1961 handbag by Gucci.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </figure>

            <div 
              tabIndex={-1} 
              className="flex flex-col items-center flex-grow-[2] flex-shrink basis-[0%] mb-8"
            >
              <h5 className="uppercase font-bold lg:text-base text-sm lg:leading-normal leading-none whitespace-break-spaces">
                Collect In Store
              </h5>

              <div 
                className="flex flex-col mt-4 flex-grow-[2] flex-shrink basis-[0%] whitespace-break-spaces 
                max-w-[800px] text-center font-light leading-normal text-base"
              >
                Order online and collect your order from your preferred Gucci boutique.
              </div>

              <div className="mt-8 flex flex-col items-center">
                <Link 
                  className="text_hover_underline text_hover_underline_black font-medium text-base leading-normal" 
                  href="/" 
                  title="Discover How" 
                  aria-label="Discover How" 
                  aria-hidden="false" 
                >
                  Discover How
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Services

