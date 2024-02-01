"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import AccountFlyout from '../../components/flyouts/accountFlyout';
import CartFlyout from '../../components/flyouts/cartFlyout';
import { useVisibility } from "../../context/visibility.context";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [accountFlyout, setAccountFlyout] = useState(false);
  const [cartFlyout, setCartFlyout] = useState(false);
  const pathname = usePathname();

  const { toggleSearch } = useVisibility();

  const toggleAccount = () => setAccountFlyout(!accountFlyout);
  const toggleCart = () => setCartFlyout(!cartFlyout);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    // Add an event listener to the window for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header 
        className={`top-0 fixed z-[998] left-0 right-0 opacity-100 transition-all 
          ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`
        }
      >
        <nav className="block">
          <div className="w-full py-4 xl:px-16 md:px-6 px-4 mx-auto">
            <div className="lg:min-h-[5.1875px] h-auto flex justify-between items-center">
              <div className={`md:flex hidden`}>
                <div 
                  className={`flex items-center uppercase ${pathname.startsWith('/auth') || pathname.startsWith('/shop') 
                    ? 'text-black' 
                    : `${scrolled ? 'text-black' : 'text-white'}`}`
                  }
                >
                  <span className="mr-8">
                    <Link 
                      href="/about-stillbroke" 
                      className={`text-xs text_hover_underline font-medium 
                        ${pathname.startsWith('/auth') || pathname.startsWith('/shop') ? 'text_hover_underline_black' 
                        : `${scrolled ? 'text_hover_underline_black' : 'text_hover_underline_white'}`}`
                      }
                    >
                      ABOUT
                    </Link>
                  </span>
                  <span className="mr-8">
                    <Link 
                      href="/shop/categories" 
                      className={`text-xs text_hover_underline font-medium 
                        ${pathname.startsWith('/auth') || pathname.startsWith('/shop') ? 'text_hover_underline_black' 
                        : `${scrolled ? 'text_hover_underline_black' : 'text_hover_underline_white'}`}`
                      }
                    >
                      SHOP
                    </Link>
                  </span>
                </div>
              </div>

              <Link 
                href="/" 
                className="block"
              >
                <Image 
                  src="/images/stillbroke_banner_logo2.webp" 
                  alt="stillbroke banner logo"
                  width={48} 
                  height={40}
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                  className={`object-contain w-full`}
                  priority
                />
              </Link>

              <div className="flex relative">
                <>
                  <ul className="flex items-center relative">
                    <li className="lg:pl-5 pl-4 flex items-center">
                      <button 
                        onClick={toggleAccount}
                        className="text-black inline-flex items-center justify-center relative w-6 h-6"
                      >
                        <svg 
                          className="inline-flex" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          aria-hidden="true"
                        >
                          <path 
                            d="M12 14C14.76 14 17 11.76 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9C7 
                            11.76 9.24 14 12 14ZM12 5.5C13.93 5.5 15.5 7.07 15.5 9C15.5 10.93 13.93 
                            12.5 12 12.5C10.07 12.5 8.5 10.93 8.5 9C8.5 7.07 10.07 5.5 12 5.5ZM18.75 
                            18V20H17.25V18C17.25 17.31 16.69 16.75 16 16.75H8C7.31 16.75 6.75 17.31 
                            6.75 18V20H5.25V18C5.25 16.48 6.48 15.25 8 15.25H16C17.52 15.25 18.75 16.48 18.75 18Z" 
                            className={`text-lg ${pathname.startsWith('/auth') || pathname.startsWith('/shop') 
                              ? 'fill-black' 
                              : `${scrolled ? 'fill-black' : 'fill-white'}`}`
                            }
                          ></path>
                        </svg>
                      </button>

                      {accountFlyout && <AccountFlyout toggleAccount={toggleAccount} />}
                    </li>

                    <li className="lg:pl-5 pl-4 flex items-center relative">
                      <button 
                        onClick={toggleSearch}
                        className="text-black inline-flex items-center justify-center relative w-6 h-6"
                      >
                        <svg 
                          className="" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          aria-hidden="true"
                        >
                          <path 
                            d="M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C13.94 20 
                            15.72 19.31 17.1 18.16L18.94 20L20 18.94L18.16 17.1C19.31 15.72 20 13.94 20 12ZM12 
                            18.5C8.42 18.5 5.5 15.58 5.5 12C5.5 8.42 8.42 5.5 12 5.5C15.58 5.5 18.5 8.42 18.5 
                            12C18.5 15.58 15.58 18.5 12 18.5Z" 
                            className={`text-lg ${pathname.startsWith('/auth') || pathname.startsWith('/shop') 
                              ? 'fill-black' 
                              : `${scrolled ? 'fill-black' : 'fill-white'}`}`
                            }
                          ></path>
                        </svg>
                      </button>
                    </li>

                    <li className="lg:pl-5 pl-4 flex items-center">
                      <button 
                        onClick={toggleCart}
                        className="text-black inline-flex relative"
                      >
                        <span className="w-6 h-6 relative inline-flex items-center justify-center">
                          <svg 
                            className="" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true"
                          >
                            <path d="M18.0002 7H15.7502V5.75C15.7502 4.79 14.9702 4 14.0002 4H9.99023C9.03023 4 8.24023 
						                  4.78 8.24023 5.75V7H5.99023C4.89023 7 3.99023 7.89 3.99023 9V18C3.99023 19.1 4.88023 20 
						                  5.99023 20H17.9902C19.0902 20 19.9902 19.11 19.9902 18V9C19.9902 7.9 19.1002 7 17.9902 
						                  7H18.0002ZM9.75023 5.75C9.75023 5.61 9.86023 5.5 10.0002 5.5H14.0102C14.1502 5.5 14.2602 
						                  5.61 14.2602 5.75V7H9.76023V5.75H9.75023ZM18.5002 18.01C18.5002 18.28 18.2802 18.51 18.0002 
						                  18.51H6.00023C5.73023 18.51 5.50023 18.29 5.50023 18.01V9.01C5.50023 8.74 5.72023 8.51 6.00023 
						                  8.51H8.25023V10.01H9.75023V8.51H14.2502V10.01H15.7502V8.51H18.0002C18.2702 8.51 18.5002 8.73 
						                  18.5002 9.01V18.01Z" 
                              className={`text-lg ${pathname.startsWith('/auth') || pathname.startsWith('/shop') 
                                ? 'fill-black' 
                                : `${scrolled ? 'fill-black' : 'fill-white'}`}`
                              }
                            ></path>
                          </svg>
                     
                          <span 
                            className={`text-[9px] font-bold absolute top-[5.5px] right-1 w-4 h-4 leading-4 cursor-pointer 
                              ${pathname.startsWith('/auth') || pathname.startsWith('/shop') 
                              ? 'text-black' : `${scrolled ? 'text-black' 
                              : 'text-white'}`}`
                            }
                          >
                            {/* 3 */}
                          </span>
                        </span>
                      </button>

                      {cartFlyout && <CartFlyout toggleCart={toggleCart}  />}
                    </li>
                  </ul>
                </>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <header className=""></header>
    </>
  )
}

export default Header