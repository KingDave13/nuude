'use client';

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full flex hero">
      <div className='items-center justify-center w-full mx-auto
        max-w-[95rem] flex flex-col' 
        >
          <h1 className='text-white font-bold md:text-[90px]
          ss:text-[50px] text-[40px] md:leading-[100px] 
          ss:leading-[55px] leading-[45px] text-center'>
              The world's <span className="text-mainRed">
                most exclusive </span> <br></br>
              members-only <br></br>club!
          </h1>

          <p className='md:mt-6 ss:mt-5 mt-3 md:text-[18px] ss:text-[20px]
           text-[14px] text-white text-center md:leading-[22px] 
           ss:leading-[55px] leading-[45px] font-regular'>
            We are a society of like-minded libertines with the highest 
            standards of <br></br>taste and style. We embrace unrestrained 
            indulgence with <br></br>one golden rule - consent.
          </p>

          <div className='flex flex-row mt-5 md:gap-5 ss:gap-5 gap-2'>
            <Link href=''
              className='border-[1px] grow2 border-secondary 
              md:text-[17px] ss:text-[17px] text-[14px] md:py-3 
              ss:py-3 py-2 md:px-14 ss:px-14 px-6 text-secondary 
              rounded-[3px] font-medium hover:text-white'
            >
                Become a Member
            </Link>

            <Link href=''
              className='border-[1px] grow2 border-secondary 
              md:text-[17px] ss:text-[17px] text-[14px] md:py-3 
              ss:py-3 py-2 md:px-14 ss:px-14 px-6 text-secondary 
              rounded-[3px] font-medium hover:text-white'
            >
                Contact Us
            </Link>
          </div>          
      </div>
    </section>
  )
};

export default Hero;