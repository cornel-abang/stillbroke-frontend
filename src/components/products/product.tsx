"use client"

import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";

function Product() {
  
  return (
    <div className="lg:basis-[25%] md:basis-[33.333%] sm:basis-[50%] lg:max-w-[25%] md:max-w-[33.333%] sm:max-w-[50%] px-1 basis-full max-w-full">
      <div className="block w-full">
        <div>
          <div className="relative">
            {/* <div 
              className="z-10 absolute top-2 left-2 bg-white text-black 
              whitespace-nowrap text-xs font-medium capitalize py-1 px-2 h-[25px] md:mb-0 mb-[2px]"
            >
              New Arrival
            </div> */}
            <Link 
              href=""
              className="block md:top-5 top-[10px] md:right-5 right-[10px] absolute text-black z-10 
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" 
            >
              <MdFavoriteBorder className="lg:text-2xl md:text-xl text-lg" />
              {/* <MdOutlineFavorite className="lg:text-2xl md:text-xl text-lg" /> */}
            </Link>

            <div className="group relative overflow-hidden bg-[#dcdbdb] aspect-[3/3.95257] select-none touch-pan-y">
              <Link href="/shop/categories/1">
                <div
                  style={{ backgroundImage: `url(/images/product1.png)` }}
                  className='w-full h-full bg-center bg-contain bg-no-repeat duration-300 bg-none group-hover:hidden'
                ></div>
                <div
                  style={{ backgroundImage: `url(/images/product2.png)` }}
                  className='w-full h-full bg-center bg-contain bg-no-repeat duration-300 bg-none opacity-0 absolute top-0 
                  left-0 z-[-1] transition-opacity group-hover:opacity-100 group-hover:z-0'
                ></div>
              </Link>
              <div className="absolute bottom-0 text-center w-full p-[10px] bg-[#ffffffb3] hidden group-hover:block">
                <Link href="/shop/categories/1" className="font-medium static text-xs hover:underline">
                  QUICK SHOP
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 pb-12">
          <div className="text-ellipsis overflow-hidden">
            <Link href="/shop/categories/1" className="mb-2 text-black">
              <span className="text-product_card_text hover:text-black capitalize text-xs font-medium">
                Intense Power Micro 3-Pack Low Rise Trunk
              </span>
            </Link>
          </div>

          <div className="mb-[10px]">
            {/* Slash Price */}
            <del className="font-medium text-xs inline-block text-product_card_text line-through">
              <span>$64.50</span>
            </del>
            
            {/* Current Price */}
            <span className="font-medium text-xs text-black mx-1">
              <span>$48.37</span>
            </span>
            
            {/* Discount */}
            <span className="font-medium text-xs text-discount">
              <span>25% off</span>
            </span>
          </div>

          <div>
            <div className="text-[10px] text-product_card_text h-4">3 Colors Available</div>
            
            {/* Color available */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product