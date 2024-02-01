import Image from "next/image";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";

import shoeProduct from "../../../public/images/shoe_product1.jpg" 

interface Props {
  toggleCart: () => void
}

function CartFlyout(props: Props) {
  const { toggleCart } = props;

  return (
    <div className="block">
      <div className="fixed top-0 right-0 bottom-0 left-0 z-[5]" onClick={toggleCart}></div>
      <div 
        className="shadow-[#0000001a_0px_8px_25px] md:mx-0 mx-4 translate-x-0 translate-y-[40px] 
        md:w-[488px] w-[calc(100%-2rem)] z-10 md:absolute fixed right-0 bg-white text-black 
        block rounded"
      >
        <div className="flex px-[30px] items-center border-b border-solid border-[#ccc]">
          <div 
            role="heading" 
            aria-level={2} 
            className="grow py-5 text-center lg:text-base text-sm font-bold lg:leading-[1.5rem] 
            leading-[1rem] uppercase"
          >
            Added to Shopping Bag
          </div>
          <button 
            aria-label="close" 
            className="text-black cursor-pointer h-6"
          >
            <IoIosClose className="text-2xl" onClick={toggleCart} />
          </button>
        </div>

        <ul 
          className="border-b border-solid border-[#ccc] max-h-[260px] overflow-x-hidden 
          overflow-y-auto pt-5 px-[10px]"
        >
          <li className="pb-5">
            <Link href="/#" className="block">
              <div className="flex">
                <picture>
                  <Image 
                    src={shoeProduct}
                    alt="product" 
                    width={150}
                    height={150}
                    className="lg:w-auto lg:h-auto w-[150px] h-[150px]"
                    priority
                  />
                </picture>

                <div className="text-left ml-[15px]">
                  <strong className="block text-xs font-bold leading-4 uppercase">526 Teresina Red, Gloss à Lèvres lip gloss</strong>
                  <span className="block mt-3 text-base font-light leading-6">$ 42</span>
                  <ul className="mt-5 text-xs font-medium leading-4">
                    <li className="mb-3 list-item">Style: 770767 9PRD9 9414</li>
                    <li className="mb-3 list-item">Quantity: 1</li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        
        <p className="flex flex-row items-center justify-between px-6 py-2 border-b border-solid border-[#ccc]">
		      <strong>Subtotal:</strong> 
          <span className="">
            <bdi><span className="">$</span>274.98</bdi>
          </span>	
        </p>

        <div className="flex flex-col my-4 mx-6 gap-4">
          <Link 
            href="/#" 
            className="cta bg-black text-white opacity-100 py-4 px-6"
          >
            Checkout
          </Link>
          <Link 
            href="/#" 
            className="cta bg-white text-black opacity-100 py-4 px-6 
            border border-solid border-black"
          >
            View Shopping Bag
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartFlyout