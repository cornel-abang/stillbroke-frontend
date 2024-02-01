import Transition from "../../components/animations/transition";

function MainContent() {
    return (
      <section className="md:py-20 py-10 px-[14px] mx-auto text-left bg-white relative">
        <div className="md:px-[14px] px-0 mx-auto max-w-[570px] md:w-auto w-full">
          <div className="text-sm leading-6 text-black font-normal">
            <Transition>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sit
                accusamus tenetur iure laboriosam ab dolor autem mollitia
                perspiciatis enim est sint facere temporibus tempora dolorem.
                Laborum veniam officiis eligendi.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sit
                accusamus tenetur iure laboriosam ab dolor autem mollitia
                perspiciatis enim est sint facere temporibus tempora dolorem.
                Laborum veniam officiis eligendi.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sit
                accusamus tenetur iure laboriosam ab dolor autem mollitia
                perspiciatis enim est sint facere temporibus tempora dolorem.
                Laborum veniam officiis eligendi.
              </p>
            </Transition>
          </div>
        </div>
      </section>
    )
  }
  
  export default MainContent