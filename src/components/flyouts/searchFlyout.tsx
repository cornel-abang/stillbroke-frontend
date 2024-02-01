"use client";

import { useState } from 'react';
import Link from "next/link";
import { MdOutlineClose, MdOutlineSearch } from "react-icons/md";
import Image from "next/image";

import { useVisibility } from "../../context/visibility.context";
import { PopularCategories } from "../../constants";

const SearchFlyout = () => {
  const { searchFlyout, toggleSearch } = useVisibility();

  const [inputValue, setInputValue] = useState('');

  return (
    <>  
      <div 
        onClick={toggleSearch}
        className={`search_flyout_overlay 
        ${searchFlyout ? 'search_flyout_overlay_active' : 'search_flyout_overlay_inactive'}`}
      ></div>

      <div 
        className={`search_flyout xl:w-[40%] lg:w-[50%] md:w-[60%] w-full md:p-5 p-4 
        ${searchFlyout ? 'search_flyout_active' : 'search_flyout_inactive'}`}
      >
        <form>
          <div className="flex items-center">
          <button className="">
            <MdOutlineSearch  className="text-2xl" />
          </button>

          <input 
            type="text" 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What are you looking for..."
            className="text-black ml-2 h-auto font-medium placeholder:text-clip inline-block 
            max-w-[70%] w-full left-0 relative border-white outline-none placeholder:opacity-60" 
          />
          
          {inputValue && (
            <button 
              type="reset" 
              name="reset-button" 
              className="relative left-0 text-xs ml-[10px]" 
              aria-label="Clear search keywords" 
            >
              Clear
            </button>
          )}
          </div>

          <div className="search_flyout_content h-screen mt-11 overflow-x-hidden">
            <div>
              {/* <div className="text-[13px] mb-5">
                Sorry, we couldn&apos;t find what you are looking for.
                <br />
                Please try again.
              </div> */}

              <div className="text-left pb-11">
                <div className="capitalize font-medium text-[15px]">
                  Popular Categories
                </div>
                  
                {PopularCategories.map((item, index) => (
                  <div key={index} className="pt-6">
                    <Link 
                      className="text-black text-[13px] capitalize font-medium opacity-60 hover:opacity-100" 
                      href="/#"
                    >
                      {item.text}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-left mb-[100px]">
                <div className="capitalize font-medium text-[15px] mb-6">
                  Top Results for Women&apos;s Bras + Bralettes
                </div>

                <div className="flex flex-wrap justify-between">
                  <div className="mb-6 flex flex-wrap gap-2">
                    <div className="w-[calc(50%-4px)]">
                      <div className="mb-4">
                        <Link href="/#">
                          <div>
                            <span>
                              <Image
                                width={300} 
                                height={300} 
                                className="mb-2 w-full h-auto object-cover"
                                alt="" 
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" 
                              />    
                            </span>
                            <div className="font-medium text-[13px] capitalize text-black opacity-60 hover:opacity-100">
                              <span>Modern Cotton Unlined Bralette</span>
                            </div>
                          </div>

                          <div className="product-detail__prices seapro-prices body-font sm"> 
                            <span>
                              <div className="price ds-product-price">
                                <span className="text-black text-[13px] font-medium">
                                  $22.50
                                </span>
                              </div>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="w-[calc(50%-4px)]">
                      <div className="mb-4">
                        <Link href="/#">
                          <div>
                            <span>
                              <Image
                                width={300} 
                                height={300} 
                                className="mb-2 w-full h-auto object-cover"
                                alt="" 
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" 
                              />    
                            </span>
                            <div className="font-medium text-[13px] capitalize text-black opacity-60 hover:opacity-100">
                              <span>Modern Cotton Unlined Bralette</span>
                            </div>
                          </div>

                          <div className="product-detail__prices seapro-prices body-font sm"> 
                            <span>
                              <div className="price ds-product-price">
                                <span className="text-black text-[13px] font-medium">
                                  $22.50
                                </span>
                              </div>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="w-[calc(50%-4px)]">
                      <div className="mb-4">
                        <Link href="/#">
                          <div>
                            <span>
                              <Image
                                width={300} 
                                height={300} 
                                className="mb-2 w-full h-auto object-cover"
                                alt="" 
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" 
                              />    
                            </span>
                            <div className="font-medium text-[13px] capitalize text-black opacity-60 hover:opacity-100">
                              <span>Modern Cotton Unlined Bralette</span>
                            </div>
                          </div>

                          <div className="product-detail__prices seapro-prices body-font sm"> 
                            <span>
                              <div className="price ds-product-price">
                                <span className="text-black text-[13px] font-medium">
                                  $22.50
                                </span>
                              </div>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="w-[calc(50%-4px)]">
                      <div className="mb-4">
                        <Link href="/#">
                          <div>
                            <span>
                              <Image
                                width={300} 
                                height={300} 
                                className="mb-2 w-full h-auto object-cover"
                                alt="" 
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" 
                              />    
                            </span>
                            <div className="font-medium text-[13px] capitalize text-black opacity-60 hover:opacity-100">
                              <span>Modern Cotton Unlined Bralette</span>
                            </div>
                          </div>

                          <div className="product-detail__prices seapro-prices body-font sm"> 
                            <span>
                              <div className="price ds-product-price">
                                <span className="text-black text-[13px] font-medium">
                                  $22.50
                                </span>
                              </div>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="sr-only">
                Found 9 items from search.
              </span>

              <span className="sr-only">
                Use Up and Down arrow keys to navigate search results.
              </span>
            </div>
          </div>
        </form>

        <div
          onClick={toggleSearch} 
          className="cursor-pointer inline-block absolute md:right-5 right-4 md:top-[21px] top-[17px]"
        >
          <MdOutlineClose className="text-[22px]" />
        </div>
      </div>
    </>
  )
}

export default SearchFlyout