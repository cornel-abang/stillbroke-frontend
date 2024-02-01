import Link from "next/link";

import ProductFilter from "../../components/products/productFilter";
import Product from "../../components/products/product";

function MainContent() {
    return (
      <div className="block w-full bg-white mt-[150px]">
        <div className="xl:px-16 md:px-6 px-4 container">
          <div className="md:mt-[1.875rem] w-full mx-auto">
            <div className="flex justify-center">
              <ol className="flex items-center justify-center mb-2 flex-wrap text-sm">
                <li className="breadcrumb-item">
                  <Link 
                    href="/"
                    className="mr-1"
                    title="Home"
                  >
                    Home
                  </Link>
                  /
                </li>
              </ol>
            </div>

            <h1 className="text-center md:text-2xl text-lg">
              New Arrivals
            </h1>
          </div>

          {/* Search Result Count */}
          <div className="flex item-center justify-between py-8">
            <div className="flex items-center h-[40px]">
              <span className="text-sm text-black block font-medium">
                52 Items
              </span>
            </div>

            <ProductFilter />
          </div>

          {/* No Search Results */}
          <div className=""></div>

          {/* Search Results  */}
          <div className="block w-full">
            <div className="flex flex-row flex-wrap mx-[-8px]">
              <div className="max-w-full basis-full px-2">
                <div className="flex flex-row flex-wrap mx-[-8px]">
                  {/* Desktop Filter */}
                  <div className=""></div>

                  {/* Product Listing */}
                  <div className="basis-full max-w-full px-2">
                    <div className="block w-full">
                      {/* Mobile Filter */}
                      <div className=""></div>

                      <div className="flex flex-wrap mx-[-8px]">
                        {/* Product */}
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
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
  
  export default MainContent