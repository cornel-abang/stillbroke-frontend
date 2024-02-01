"use client"

import Link from "next/link"
import { MdKeyboardArrowDown } from "react-icons/md";

import { CategoryItems, FilterItems, SortByItems } from "../../constants/index";

function ProductFilter() {

  return (
    <nav className="hidden sm:flex items-center text-xs z-50">
      <ul className="filter_dropdown_container">
        <li className="filter_dropdown">
          <button className="mr-4 h-[40px] filter_dropdownTitle">
            <span className="relative overflow-hidden">
              Category
            </span>
            <MdKeyboardArrowDown className="text-black text-base filter_svg" />
          </button>
                
          <ul role="menu" className="filter_menu min-w-[185px]">
            {CategoryItems.map((item) => (
              <li key={item.text}>
                <Link className="w-full h-full block py-[10px] px-[14px]" role="menuitem" href="/#">
                  {item.text}<span className="filter_total_count">&nbsp;- {item.totalCount}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="filter_dropdown">
          <button className="mr-4 h-[40px] filter_dropdownTitle">
            <span className="relative overflow-hidden">
              Filter
            </span>
            <MdKeyboardArrowDown className="text-black text-base filter_svg" />
          </button>

          <ul role="menu" className="filter_menu">
            {FilterItems.map((item) => (
              <li key={item.text}>
                <Link className="w-full h-full block py-[10px] px-[14px]" role="menuitem" href="/#">
                  {item.text}<span className="filter_total_count">&nbsp;- {item.totalCount}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="filter_dropdown">
          <span className="text-xs font-normal lg:inline hidden">Sort by: </span>
          <button className="h-[40px] filter_dropdownTitle">
            <span className="relative overflow-hidden lg:inline-block hidden">
              Newest
            </span>
            <span className="relative overflow-hidden lg:hidden inline-block">
              Sort By
            </span>
            <MdKeyboardArrowDown className="text-black text-base filter_svg" />
          </button>

          <ul role="menu" className="filter_menu min-w-[140px]">
            {SortByItems.map((item) => (
              <li key={item.text}>
                <Link className="w-full h-full block py-[10px] px-[14px]" role="menuitem" href="/#">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default ProductFilter