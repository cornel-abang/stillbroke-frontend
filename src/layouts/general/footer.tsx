"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

import { MayWeHelpYouItems, StillbrokeServicesItems, TheCompanyItems } from "../../constants/index";

function Footer() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const handleToggler1 = () => {
    if (toggle2 === true) setToggle2(false)
    if (toggle3 === true) setToggle3(false)
    setToggle1(!toggle1)
  }

  const handleToggler2 = () => {
    if (toggle1 === true) setToggle1(false)
    if (toggle3 === true) setToggle3(false)
    setToggle2(!toggle2)
  }

  const handleToggler3 = () => {
    if (toggle1 === true) setToggle1(false)
    if (toggle2 === true) setToggle2(false)
    setToggle3(!toggle3)
  }
  
  return (
    <footer className="w-full h-full bg-black text-white">
      <section className="container xl:px-16 md:px-6 px-4 py-0">
        <div className="lg:py-20 py-12 relative">
          <div className="lg:gap-x-6 gap-x-2 lg:gap-y-0 gap-y-20 custom_grid">
            <div className="block col_lg_6 col_12">
              <section className="lg:gap-y-20 gap-y-2 lg:gap-x-6 gap-x-2 custom_grid">
                {/* Display_MobileAndTabletView */}
                <div className="col_12 lg:hidden block">
                  <div className={`footer_dropdown_wrapper ${toggle1 ? 'active' : ''}`}>
                    <div className="footer_text_header_wrapper mb-6" onClick={handleToggler1}>
                      <h3 className="footer_text_header">MAY WE HELP YOU?</h3>

                      <MdKeyboardArrowDown className="dropdown_svg" />
                    </div>

                    <div className="footer_text_wrapper">
                      {MayWeHelpYouItems.map((item, index) => (
                        <div key={item.text} className={`${index === MayWeHelpYouItems.length - 1 ? 'pb-12' : 'pb-6'}`}>
                          <Link href={item.href} className="footer_text text_hover_underline text_hover_underline_white">
                            {item.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Display_DesktopView */}
                <div className="col_lg_6 lg:block hidden">
                  <div>
                    <h3 className="footer_text_header mb-6">MAY WE HELP YOU?</h3>

                    <div className="lg:pb-0 pb-6">
                      {MayWeHelpYouItems.map((item) => (
                        <div key={item.text} className="pb-6">
                          <Link href={item.href} className="footer_text text_hover_underline text_hover_underline_white">
                            {item.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Display_MobileAndTabletView */}
                <div className="col_12 lg:hidden block">
                  <div className={`footer_dropdown_wrapper ${toggle2 ? 'active' : ''}`}>
                    <div className="footer_text_header_wrapper mb-6" onClick={handleToggler2}>
                      <h3 className="footer_text_header">THE COMPANY</h3>

                      <MdKeyboardArrowDown className="dropdown_svg" />
                    </div>

                    <div className="footer_text_wrapper">
                      {TheCompanyItems.map((item, index) => (
                        <div key={item.text} className={`${index === TheCompanyItems.length - 1 ? 'pb-12' : 'pb-6'}`}>
                          <Link href={item.href} className="footer_text text_hover_underline text_hover_underline_white">
                            {item.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Display_DesktopView */}
                <div className="col_lg_6 lg:block hidden">
                  <div>
                    <h3 className="footer_text_header mb-6">THE COMPANY</h3>

                    <div className="lg:pb-0 pb-6">
                      {TheCompanyItems.map((item) => (
                        <div key={item.text} className="pb-6">
                          <Link href={item.href} className="footer_text text_hover_underline text_hover_underline_white">
                            {item.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Display_MobileAndTabletView */}
                <div className="col_12 lg:hidden block">
                  <div className={`footer_dropdown_wrapper ${toggle3 ? 'active' : ''}`}>
                    <div className="footer_text_header_wrapper mb-6" onClick={handleToggler3}>
                      <h3 className="footer_text_header">STILLBROKE SERVICES</h3>

                      <MdKeyboardArrowDown className="dropdown_svg" />
                    </div>

                    <div className="footer_text_wrapper">
                      {StillbrokeServicesItems.map((item, index) => (
                        <div key={item.text} className={`${index === StillbrokeServicesItems.length - 1 ? 'pb-12' : 'pb-6'}`}>
                          <Link href={item.href} className="footer_text text_hover_underline text_hover_underline_white">
                            {item.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Display_DesktopView */}
                <div className="col_lg_6 lg:block hidden">
                  <div>
                    <h3 className="footer_text_header mb-6">STILLBROKE SERVICES</h3>

                    <div className="lg:pb-0 pb-6">
                      {StillbrokeServicesItems.map((item) => (
                        <div key={item.text} className="pb-6">
                          <Link href={item.href} className="footer_text text_hover_underline text_hover_underline_white">
                            {item.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="block col_lg_6 col_12 relative">
              <div className="lg:mb-12 mb-8 flex flex-col">
                <h3 className="footer_text_header mb-2">SIGN UP FOR STILLBROKE UPDATES</h3>

                <div className="mb-2">
                  <div className="text-xs font-medium">
                    <p className="my-4 leading-5">
                      By entering your email address below, you consent to receiving our newsletter with access 
                      to our latest collections, events and initiatives. More details on this are provided in our 
                      <Link 
                        href="/privacy-policy" 
                        className="footer_text ml-1 text_hover_underline text_hover_underline_white"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>

                <form className="w-full relative footer_form_control">
                  <div className="footer_form_input_wrapper h-11 w-full relative flex flex-col justify-center">
                    <input type="text" className="footer_form_input" />
                    <div className="underline"></div>
                    <label htmlFor="" className="footer_form_label">Email</label>
                  </div>
                  
                  <span className="submit_btn_wrapper">
                    <button className="cursor-pointer" type="submit">
                      <MdKeyboardArrowRight />
                    </button>
                  </span>
                </form>
              </div>

              <div className="flex flex-col">
                <h3 className="footer_text_header mb-2">COUNTRY/REGION</h3>
              </div>
            </div>
          </div>

          <div className="lg:pt-[104px] pt-20">
            <div className="social_links_group">
              <div className="inline-flex items-center justify-start">
                <a 
                  href="https://www.instagram.com/YourInstagramPage/" 
                  className="inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="md:w-8 w-6 md:h-8 h-6 hover:opacity-50" />
                </a>
              </div>
              <div className="inline-flex items-center justify-start">
                <a 
                  href="https://www.facebook.com/YourFacebookPage" 
                  className="inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiFacebook className="md:w-8 w-6 md:h-8 h-6 hover:opacity-50" />
                </a>
              </div>
              <div className="inline-flex items-center justify-start">
                <a 
                  href="https://twitter.com/YourTwitterHandle" 
                  className="inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiTwitter className="md:w-8 w-6 md:h-8 h-6 hover:opacity-50" />
                </a>
              </div>
            </div>

            <div className="md:mt-10 mt-16 w-full">
              <div className="w-full flex md:flex-row flex-col items-center justify-between">
                <div className="text-center md:text-left md:mb-0 mb-4">
                  <p className="text-sm">© 2024 Stillbroke. Powered by Stillbroke</p>
                </div> 

                <div className="text-center md:text-right inline-flex items-center space-x-4">
                  <Image src="/icons/visa-icon.svg" alt="visa icon" width={40} height={40} />
                  <Image src="/icons/mastercard-icon.svg" alt="visa icon" width={40} height={40} />
                  <Image src="/icons/discover-icon.svg" alt="visa icon" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
