'use client';

import About from "@components/About";
import Luxury from "@components/Luxury";
import Events from "@components/Events";
import Membership from "@components/Membership";
import Contact from "@components/Contact";
import Application from "@components/Application";

const Home = () => {
  return (
    <section className="relative w-full">
      <div className="flex hero sm:px-12 px-6">
        <div className='items-center justify-center w-full mx-auto
          max-w-[95rem] flex flex-col md:mt-16 ss:mt-20 mt-10' 
          >
            <h1 className='text-white md:text-[80px] font-manierBold
            ss:text-[70px] text-[52px] md:leading-[90px]
            ss:leading-[70px] leading-[55px] md:text-center ss:text-center'>
                The world's <span className="text-mainRed">
                most exclusive </span> <br></br>
                members-only <br className="ss:flex hidden"></br>club!
            </h1>

            <p className='md:mt-6 ss:mt-5 mt-6 md:text-[18px] ss:text-[18px]
            text-[16px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[20px] 
            md:font-manierRegular ss:font-manierRegular font-manierLight'>
              We are a society of like-minded libertines with the highest 
              standards of <br className="ss:flex hidden"></br>taste and style. We embrace unrestrained 
              indulgence with <br className="ss:flex hidden"></br>one golden rule - consent.
            </p>

            <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-8 ss:gap-5 
            gap-3 items-center font-manierRegular buttonfull'>
              <button
                className='grow4 bg-secondary border-none buttonhalf
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                ss:py-3 py-3 md:px-10 ss:px-7 px-3 text-primary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                font-medium font-manier cursor-pointer'
              >
                Become a Member
              </button>

              <button
                className='border-[1px] grow2 border-secondary 
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                ss:py-3 py-3 md:px-16 ss:px-14 px-6 text-secondary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                font-medium bg-transparent font-manier cursor-pointer
                buttonhalf'
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

      <div className="bg-primary">
        <Application />
      </div>

      <div className="contact">
        <Contact />
      </div>   
    </section>
  )
};

export default Home;