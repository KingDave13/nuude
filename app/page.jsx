'use client';

import About from "@components/About";
import Luxury from "@components/Luxury";
import Events from "@components/Events";
import Membership from "@components/Membership";

const Home = () => {
  return (
    <section className="relative w-full">
      <div className="flex hero">
        <div className='items-center justify-center w-full mx-auto
          max-w-[95rem] flex flex-col md:mt-20' 
          >
            <h1 className='text-white font-bold md:text-[80px]
            ss:text-[50px] text-[40px] md:leading-[90px] 
            ss:leading-[55px] leading-[45px] text-center'>
                The world's <span className="text-mainRed">
                  most exclusive </span> <br></br>
                members-only <br></br>club!
            </h1>

            <p className='md:mt-6 ss:mt-5 mt-3 md:text-[18px] ss:text-[20px]
            text-[14px] text-white text-center md:leading-[25px] 
            ss:leading-[55px] leading-[45px] font-regular'>
              We are a society of like-minded libertines with the highest 
              standards of <br></br>taste and style. We embrace unrestrained 
              indulgence with <br></br>one golden rule - consent.
            </p>

            <div className='flex mt-8 md:gap-8 ss:gap-5 gap-2 items-center'>
              <button
                className='grow4 bg-secondary
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                ss:py-3 py-2 md:px-10 ss:px-14 px-6 text-primary 
                rounded-[6px] font-medium font-manier cursor-pointer'
              >
                Become a Member
              </button>

              <button
                className='border-[1px] grow2 border-secondary 
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                ss:py-3 py-2 md:px-16 ss:px-14 px-6 text-secondary 
                rounded-[6px] font-medium bg-transparent font-manier
                cursor-pointer'
              >
                Contact Us
              </button>
            </div>
        </div>
      </div>
      
      <div className="bg-primary">
        <About />
      </div>

      <div className="luxury">
        <Luxury />
      </div>
      
      <div className="bg-primary">
        <Events />
      </div>

      <div className="membership">
        <Membership />
      </div>

      <div className="contact">
        <Contact />
      </div>

    </section>
  )
};

export default Home;