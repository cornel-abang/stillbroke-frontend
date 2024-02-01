import { MdOutlineClose } from "react-icons/md";

function RemoveProductComfirmation() {
  return (
    <aside className="remove_overlay">
      <div className="remove_overlay_container_wrapper">
        <div className="remove_wrapper">
          <div className="remove_overlay_wrapper">
            <div>
              <div className="remove_overlay_content_header">
                <div className="remove_overlay_content_title">
                  Are you sure you want to remove this item?
                </div>
              </div>

              <div className="remove_overlay_content_body">
                <div className="remove_overlay_content_product">
                  <div className="remove_overlay_content_product_title">
                    117 Joslyn Clair, Gloss à Lèvres lip gloss
                  </div>
                </div>

                <div className="pt-5 lg:px-[50px] px-0 md:pt-0">
                  <div className="md:w-full w-[80%] relative mx-auto flex items-center justify-center gap-4 md:flex-row flex-col">
                    <button 
                      className="cta bg-black text-white opacity-100 py-4 px-6 w-full"
                    >
                      Cancel
                    </button>
                    <button 
                      className="cta bg-white text-black opacity-100 py-4 px-6 
                      border border-solid border-black w-full"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <button className="button_close_overlay_remove">
                <MdOutlineClose className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RemoveProductComfirmation