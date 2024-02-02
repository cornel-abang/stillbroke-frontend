import Link from "next/link"

import { MobileViewItems } from "../../constants"

interface Props {
  toggleMobileView: () => void
}

function MobileViewFlyout(props: Props) {
  const { toggleMobileView } = props;

  return (
    <div className="block">
      <div className="fixed top-0 right-0 bottom-0 left-0 z-[5]" onClick={toggleMobileView}></div>
      <div
        className="shadow-[#0000001a_0px_8px_25px] sm:mx-0 mx-4 translate-x-0 translate-y-[40px] 
        sm:min-w-[220px] z-10 sm:absolute fixed sm:left-[unset] right-0 left-0 bg-white text-black 
        block rounded" 
      >
        <ul className="py-8 px-4 flex flex-col">
          {MobileViewItems.map((item, index) => (
            <li 
              key={item.text} 
              className={`${index === MobileViewItems.length - 1 ? 'mb-0' : 'mb-5'}`}
            >
              <Link 
                href={item?.href || ''}
                aria-label={item.text}
                onClick={toggleMobileView}
                className="text-black hover:text-opacity-50 text-sm lg:leading-6 
                leading-4 font-semibold uppercase inline-block py-[6px] px-[6px]"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileViewFlyout