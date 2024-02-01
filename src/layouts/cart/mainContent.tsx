"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import RemoveProductComfirmation from "../../components/modals/removeProductComfirmation";
import Transition from "../../components/animations/transition";

function MainContent() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="py-[14px] px-[14px] mx-auto text-left bg-white relative">
      <Transition>
        <div className="mx-auto max-w-[1200px] py-[53px] px-[20px] flex items-start justify-center">
          <div className="inline-block mr-[24px] relative w-[calc(100%-370px)]">
            <div className="w-full relative">
              <h2 className="text-black is_title_xs pb-[10px]">
                Selected Items
              </h2>

              <ul>
                {/* Add border-Top to only the first child */}
                <li 
                  className="w-full relative pb-[35px] border-b border-t border-solid border-[#c8c6c5] after:clear-both 
                  before:block before:h-0 before:overflow-hidden after:block after:h-0 after:overflow-hidden"
                >
                  <div className="opacity-100 relative table w-full after:table after:clear-both">
                    <div 
                      className="h-[230px] md:text-left md:w-[35%] clear-none md:table-cell align-middle 
                      md:mt-0 mt-[35px] w-full text-center block"
                    >
                      <Link href="/#">
                        <Image 
                          src="/images/shoe_product1.jpg" 
                          alt="product" 
                          className="max-w-full w-full h-full"
                          width={200} 
                          height={200} 
                        />
                      </Link>
                    </div>

                    <div className="clear-none md:table-cell block float-none align-middle">
                      <div className="pt-[20px] w-full clear-none">
                        <h3 className="font-light text-black text-base leading-6 mb-3">
                          <Link href="/#">526 Teresina Red, Gloss à Lèvres lip gloss</Link>
                        </h3>

                        <div className="w-full relative">
                          <span className="block w-full mb-3">
                            <span className="text-base">$ 42</span>
                          </span>

                          <div className="inline-block">
                            <div className="relative flex items-center space-x-4">
                              <button 
                                className="w-[30px] text-black rounded border border-solid border-[#c8c6c5]"
                                onClick={handleDecrease}
                              >
                                -
                              </button>
                              <span className="text-base border border-solid border-[#c8c6c5] w-10 text-center rounded">
                                {quantity}
                              </span>
                              <button 
                                className="w-[30px] text-black rounded border border-solid border-[#c8c6c5]"
                                onClick={handleIncrease}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="w-full mt-[25px] mb-[15px] text-xs">
                          <p className="font-semibold mb-1 text-[#313131] uppercase">Available for purchase</p>
                          <div className="mt-[5px]">Your selection is available for immediate purchase online.</div>
                        </div>

                        <div className="w-full">
                          <span 
                            className="inline-block text-xs uppercase leading-3 cursor-pointer text_hover_underline 
                            text_hover_underline_black font-medium"
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <RemoveProductComfirmation />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[345px] inline-block">
            <div className="border border-solid border-[#e7e7e7] mb-7 bg-white px-[25px]">
              <div className="block">
                <h2 className="text-black pt-7 pb-4 is_title_xs border-b border-solid border-[#e7e7e7]">
                  Purchase Summary
                </h2>

                <ul className="pt-5 pb-8">
                  <li className="is_text_s_medium">
                    Subtotal
                    <span className="float-right">
                      <span>$ 2,222</span>
                    </span>
                  </li>

                  <li className="mt-[30px] is_text_s_medium">
                    Estimated Total
                    <span className="float-right inline-block">
		              	  <span className="text-xl leading-[18px]">$ 2,222</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pb-5 relative">
                <Link 
                  href="/#" 
                  className="cta bg-black text-white opacity-100 py-4 px-6 w-full mb-[10px]"
                >
                  Checkout
                </Link>
                <span className="text-xs uppercase mt-[2px] mb-[7px] text-center block">Or</span>
                <Link 
                  href="/#" 
                  className="cta bg-white text-black opacity-100 py-4 px-6 mb-[10px] 
                  border border-solid border-black w-full"
                >
                  <span>Pay with</span>
                </Link>
                <Link 
                  href="/#" 
                  className="cta bg-white text-black opacity-100 py-4 px-6 
                  border border-solid border-black w-full"
                >
                  <span>Pay with</span>
                </Link>
              </div>
            </div>

            <div className="border border-solid border-[#e7e7e7] bg-white block mt-[30px]"></div>
          </div>
        </div>
      </Transition>
    </section>
  )
}

export default MainContent