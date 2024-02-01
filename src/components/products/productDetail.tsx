"use client"

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Link from "next/link";

const colors = [ '#000000', '#FFFFFF', '#FF0000', '#0000FF'];
const sizes = ['S', 'M', 'L', 'XL'];
const quantities = [1, 2, 3, 4, 5];

function ProductDetail() {
  const [color, setColor] = useState<string>(colors[0])
  const [size, setSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState<number | null>(null);

  const slides = [
    {
      url: '/images/product1.png',
    },
    {
      url: '/images/product2.png',
    },
    {
      url: '/images/product1.png',
    },
    {
      url: '/images/product2.png',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="mb-20 md:px-2 px-0 py-16 mt-20">
        <div className="flex md:flex-row flex-col flex-wrap">
          <div className="lg:basis-[70%] md:basis-[60%] basis-full lg:max-w-[70%] md:max-w-[60%] max-w-full relative w-full md:px-2 px-0">
            {/* Product Images */}
            <div className="md:block hidden w-full">
              <div className="flex flex-row flex-wrap mx-[-8px]">
                {slides.map((item, index) => (
                  <div key={index} className="mb-2 md:basis-[50%] md:max-w-[50%] relative px-1 w-full">
                    <picture className="block w-full">
                      <Image 
                        src={item.url} 
                        alt="" 
                        className="bg-[#dcdbdb] aspect-[3/3.95257] w-full block object-contain object-center" 
                        width={500}
                        height={700}
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden block mb-5 w-full">
              <div className="relative">
                <div className="group relative overflow-hidden bg-[#dcdbdb] aspect-[3/3.95257] select-none touch-pan-y">
                  {/* Left Arrow */}
                  <div 
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 
                    text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                  >
                    <BsChevronCompactLeft onClick={prevSlide} size={20} />
                  </div>

                  {/* Slick List */}
                  <Link href="/#">
                    <div
                      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                      className='w-full h-full bg-center bg-cover duration-500'
                    ></div>
                  </Link>
              
                  {/* Right Arrow */}
                  <div 
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
                    text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                  >
                    <BsChevronCompactRight onClick={nextSlide} size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:basis-[30%] md:basis-[40%] basis-full lg:max-w-[30%] md:max-w-[40%] max-w-full relative w-full px-2">
            <div className="block mb-5">
              <div className="flex flex-wrap">
                <div className="relative px-2 w-full basis-full max-w-full">
                  <div className="w-full text-sm">
                    <div className="mb-5">
                      <Link href="/">Home</Link>
                      <span className="mx-1 inline-block">/</span>
                      <Link href="/#">Men</Link>
                    </div>
                  </div>

                  <div className="mb-2">
                    <h1 className="text-black mb-1 lg:text-2xl text-lg font-normal capitalize">
                      Intense Power Micro 3-Pack Low Rise Trunk
                    </h1>
                  </div>

                  {/* Rating */}
                  <div className=""></div>

                  <div className="mb-2">
                    {/* Slash Price */}
                    <del className="font-medium text-sm inline-block text-product_card_text line-through">
                      <span>$64.50</span>
                    </del>
            
                    {/* Current Price */}
                    <span className="font-medium text-sm text-black mx-1">
                      <span>$48.37</span>
                    </span>
            
                    {/* Discount */}
                    <span className="font-medium text-sm text-discount">
                      <span>25% off</span>
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap mx-[-8px]">
                      <div className="basis-full max-w-full relative w-full px-2">
                        <div className="mb-6">
                          <label className="mb-4 text-sm font-medium inline-block">
                            <span className="text-[#696969] pr-2">Color</span>
                            <span className="text-black">
                              {colors.map((currentColor, colorIndex) => (
                                <span key={colorIndex}>{color === currentColor && currentColor}</span>
                              ))}
                            </span>
                          </label>

                          <div className="mb-2">
                            <div className="flex flex-row gap-2 flex-wrap bg-[#dcdbdb] rounded py-2 px-1">
                              {colors.map((currentColor, colorIndex) => (
                                <div 
                                  key={colorIndex} 
                                  onClick={() => setColor(currentColor)}
                                  className={`border border-solid hover:border-black/40 p-1 rounded duration-300 
                                  ${color === currentColor ? 'border-black' : 'border-[#fafafa]'} cursor-pointer`}
                                >
                                  <button  
                                    style={{ backgroundColor: currentColor}}
                                    className="flex justify-center items-center rounded w-7 h-7"
                                  >
                                    <span className={`${color === currentColor ? 'block' : 'hidden'}`}>
                                      <svg
                                        className={`w-4 h-4 ${currentColor === '#FFFFFF' ? 'text-black' : 'text-white'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M5 13l4 4L19 7"
                                        ></path>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-8px]">
                    <div className="basis-full max-w-full relative w-full px-2">
                      <div className="mb-6">
                        <div className="inline-flex">
                          {size === null ? (
                            <label className="mb-4 text-sm font-medium inline-block">
                              <span className="text-[#696969] pr-2">Select Size</span>
                            </label>
                          ) : (
                            <label className="mb-4 text-sm font-medium inline-block">
                              <span className="text-[#696969] pr-2">Size</span>
                              <span className="text-black">
                                {sizes.map((currentSize, sizeIndex) => (
                                  <span key={sizeIndex}>{size === currentSize && currentSize}</span>
                                ))}
                              </span>
                            </label>
                          )}
                        </div>

                        <div className="flex flex-row gap-2 bg-[#dcdbdb] rounded py-2 px-1">
                          {sizes.map((currentSize, sizeIndex) => (
                            <div 
                              key={sizeIndex} 
                              onClick={() => setSize(currentSize)}
                              className={`border border-solid hover:border-black/40 p-1 rounded duration-300 
                              ${size === currentSize ? 'border-black bg-black' : 'border-[#fafafa]'} cursor-pointer`}
                            >
                              <button  
                                className="flex justify-center items-center rounded w-7 h-7"
                              >
                                <span className={`${size === currentSize ? 'text-white' : 'text-black'}`}>
                                  {currentSize}
                                </span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-8px]">
                    <div className="basis-full max-w-full relative w-full px-2">
                      <div className="flex flex-wrap">
                        <div className="mb-4 text-sm font-medium">
                          <span className="text-[#696969]">In Stock</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-8px] mt-4">
                    <div className="mb-8 px-2 lg:basis-[40%] basis-full lg:max-w-[40%] max-w-full">
                      <div className="relative">
                        <div className="mb-5 relative">
                          <select 
                            value={quantity ? quantity : ''} 
                            onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
                            className={`h-14 text-black pt-5 px-4 pb-[5px] border border-solid border-[#696969] rounded 
                            bg-transparent relative text-sm font-medium block w-full appearance-none outline-none 
                            ${size === null ? 'pointer-events-none' : 'pointer-events-auto'}`}
                          >
                            {size !== null && (
                              quantities.map((quantity) => (
                                <option key={quantity} value={quantity}>
                                  {quantity}
                                </option>
                              ))
                            )}
                          </select>

                          <label 
                            className={`text-[13px] font-medium inline-block absolute left-4 
                            pointer-events-none text-[#696969] ${size === null ? 'top-5' : 'top-[5px]'}`} 
                          >
                            Qty
                          </label>

                          <MdKeyboardArrowDown 
                            className="text-lg absolute top-5 right-3 text-[#696969] pointer-events-none inline-block" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8 px-2 lg:basis-[60%] basis-full lg:max-w-[60%] max-w-full">
                      <div>
                        <button className="cta h-14 bg-black text-white py-4 px-6 w-full">Add to Bag</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Description Mobile */}
                  <div className="block w-full">
                    <div>
                      <div className="mt-5 flex flex-wrap">
                        <span className="">
                          <h3 className="font-semibold text-lg mb-1">Overview</h3>
                          <span className="inline-block text-sm font-normal text-black max-w-full basis-full mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dicta, assumenda velit earum iure non, rem similique praesentium autem 
                            alias numquam debitis maiores rerum necessitatibus eaque ab temporibus 
                            iste laudantium. Quod?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dicta, assumenda velit earum iure non, rem similique praesentium autem 
                            alias numquam debitis maiores rerum necessitatibus eaque ab temporibus 
                            iste laudantium. Quod?
                          </span>
                        </span>

                        <span className="">
                          <h3 className="font-semibold text-lg mb-1">Shipping and Returns</h3>
                          <span className="inline-block text-sm font-normal text-black max-w-full basis-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dicta, assumenda velit earum iure non, rem similique praesentium autem 
                            alias numquam debitis maiores rerum necessitatibus eaque ab temporibus 
                            iste laudantium. Quod?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dicta, assumenda velit earum iure non, rem similique praesentium autem 
                            alias numquam debitis maiores rerum necessitatibus eaque ab temporibus 
                            iste laudantium. Quod?
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail