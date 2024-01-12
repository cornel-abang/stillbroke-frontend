"use client"

import { useRef, useState } from "react";
import Link from "next/link";
import { BsPauseFill, BsPlayFill  } from "react-icons/bs";
import { FiVolume2, FiVolumeX  } from "react-icons/fi";

function Services() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayPause = () => {
    const video = videoRef.current;
    if(video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  }

  const toggleMute = () => {
    const video = videoRef.current;
    if(video) {
      setIsMuted((prevMuted) => !prevMuted);
      videoRef.current.muted = !isMuted;
    }
  }

  return (
    <section className="w-full h-full">
      <div className="pt-20 pb-4 lg:pb-8 lg:px-16 px-4 text-center m-auto flex items-center justify-center">
        <h2 className="section_text_title max-w-[800px] text-black">
          Stillbroke Services
        </h2>
      </div>
      
      <div className="container custom_grid gap-2 pt-4 lg:pt-8 pb-12 lg:px-16 md:px-8 px-4 overflow-x-auto">
        <div className="services_cardWrapper col_12 flex flex-row overflow-x-auto gap-8 w-full">
          <section className="services_card">
            <figure className="bg-white m-0">
              <div className="w-full m-auto relative">
                <Link 
                  className="linkWrapper" 
                  href="/#" 
                  aria-label="" 
                  aria-hidden="true"
                >
                  <span className="sr-only"></span>
                </Link>

                <div>
                  <div className="services_card_videoContainer">
                    <div className="services_card_videoControl">
                      <div className="videoControl_button" onClick={togglePlayPause}>
                        <button>
                          {isPaused ? (
                            <BsPlayFill />
                          ) : (
                            <BsPauseFill />
                          )}
                        </button>
                      </div>
                      <div className="videoControl_button" onClick={toggleMute}>
                        <button>
                          {isMuted ? (
                            <FiVolumeX />
                          ) : (
                            <FiVolume2 />
                          )}
                        </button>
                      </div>
                    </div>

                    <video 
                      className="services_card_video"
                      width="100%" 
                      autoPlay 
                      playsInline
                      loop
                      src="/images/video.mp4"
                      aria-label="" 
                      tabIndex={0} 
                      ref={videoRef}
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
              className="flex flex-col lg:items-center items-start flex-grow-[2] flex-shrink basis-[0%]"
            >
              <h5 className="uppercase font-bold lg:text-base text-sm lg:leading-normal leading-none whitespace-break-spaces">
                Personalization
              </h5>

              <div 
                className="flex flex-col mt-4 flex-grow-[2] flex-shrink basis-[0%] whitespace-break-spaces 
                max-w-[800px] lg:text-center text-left font-light leading-normal text-base"
              >
                Emboss select bags, luggage, belts, leather accessories, and items from 
                the pet’s collection with initials to create a truly unique piece.
              </div>

              <div className="mt-8 flex flex-col lg:items-center items-start">
                <span className="inline-block max-w-fit">
                  <Link href="/#" className="cta bg-black text-white opacity-100 py-4 px-6">
                    Explore Now
                  </Link>
                </span>
              </div>
            </div>
          </section>

          <section className="services_card">
            <figure className="bg-white m-0">
              <div className="w-full m-auto relative">
                <Link 
                  className="linkWrapper" 
                  href="/#" 
                  aria-label="" 
                  aria-hidden="true"
                >
                  <span className="sr-only"></span>
                </Link>

                <div>
                  <div className="services_card_videoContainer">
                    <div className="services_card_videoControl">
                      <div className="w-8 h-8">
                        <button className=""></button>
                      </div>
                      <div className="w-8 h-8">
                        <button className=""></button>
                      </div>
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
              className="flex flex-col lg:items-center items-start flex-grow-[2] flex-shrink basis-[0%]"
            >
              <h5 className="uppercase font-bold lg:text-base text-sm lg:leading-normal leading-none whitespace-break-spaces">
                Packaging
              </h5>

              <div 
                className="flex flex-col mt-4 flex-grow-[2] flex-shrink basis-[0%] whitespace-break-spaces 
                max-w-[800px] lg:text-center text-left font-light leading-normal text-base"
              >
                Choose our online exclusive tote or add a gift message at checkout to enjoy the 
                boutique shopping bag.
              </div>

              <div className="mt-8 flex flex-col lg:items-center items-start">
                <span className="inline-block max-w-fit">
                  <Link href="/#" className="cta bg-black text-white opacity-100 py-4 px-6">
                    Explore Now
                  </Link>
                </span>
              </div>
            </div>
          </section>

          <section className="services_card">
            <figure className="bg-white m-0">
              <div className="w-full m-auto relative">
                <Link 
                  className="linkWrapper" 
                  href="/#" 
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
                      poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/754680ac-ecbe-4461-ac4e-4b1a78557617/main/1280x720/2s346ms/match/image.jpg" 
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
              className="flex flex-col lg:items-center items-start flex-grow-[2] flex-shrink basis-[0%]"
            >
              <h5 className="uppercase font-bold lg:text-base text-sm lg:leading-normal leading-none whitespace-break-spaces">
                Collect In Store
              </h5>

              <div 
                className="flex flex-col mt-4 flex-grow-[2] flex-shrink basis-[0%] whitespace-break-spaces 
                max-w-[800px] lg:text-center text-start font-light leading-normal text-base"
              >
                Order online and collect your order from your preferred Gucci boutique.
              </div>

              <div className="mt-8 flex flex-col lg:items-center items-start">
                <span className="inline-block max-w-fit">
                  <Link href="/#" className="cta bg-black text-white opacity-100 py-4 px-6">
                    Explore Now
                  </Link>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Services

