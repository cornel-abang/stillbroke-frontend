"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";

import { CartIcon, UserIcon } from "../../constants/icons";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="block">
      <div className={`header ${scrolling ? 'header_after_scroll' : 'header_before_scroll'}`}>
        <span aria-hidden="true"></span>
        <div className="header_fixed_container">
          <div className="container lg:px-16 md:px-8 px-4 py-6">
            {/* Header Content */}
            <div className="flex items-center lg:justify-between justify-end h-[34px] relative">
              <div className={`${scrolling ? 'contact_drawer_button_after_scroll' : 'contact_drawer_button_before_scroll'}`}>
                <button className="inline-flex items-center text-xs font-bold uppercase gap-2 relative text-black">
                  <BsPlus className="text-base" />
                  <span className="capitalize">Contact Us</span>
                </button>
              </div>
              
              {/* ContactUs Drawer */}
              <div className=""></div>

              <ul className="flex items-baseline relative">
                <li className="lg:pl-6 pl-4 flex items-center">
                  <button className="text-black inline-flex relative w-6 h-6">
                    <UserIcon />
                  </button>
                </li>
                <li className="lg:pl-6 pl-4 flex items-center">
                  <button className="text-black inline-flex relative">
                    <span className="w-6 h-6 relative">
                      <CartIcon />

                      <span className="cart_icon_bag">0</span>
                    </span>

                    <span className="inline-block font-semibold ml-2 pl-1">
                      <span>
                        <bdi className="leading-7"><span>$</span>0.00</bdi>
                      </span>
					          </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Header Logo */}
            <div className={`${scrolling ? 'header_logo_container_after_scroll' : 'header_logo_container_before_scroll'}`}>
              <Link href="/" className="header_logo">
                <Image 
                  src="/images/stillbroke_banner_logo.webp" 
                  alt="stillbroke banner logo"
                  width={915} 
                  height={215}
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header