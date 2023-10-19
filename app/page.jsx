'use client';

const Hero = () => {
  return (
    <section className="relative w-full flex hero">
      <div className='items-center justify-center w-full
        max-w-[95rem] flex flex-col gap-5' 
        >
          <h1 className='text-secondary font-bold md:text-[65px]
          ss:text-[50px] text-[40px] md:leading-[78px] 
          ss:leading-[55px] leading-[45px]
          tracking-tight md:max-w-[750px]'>
              No. 1 <span className='text-primary'>
              foam accessories and general </span> 
              industrial materials supplier.
          </h1>

          <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[19px]
          ss:text-[20px] text-[14px] md:max-w-[600px] ss:max-w-[620px]
          max-w-[320px]'>
            We are the number one suppliers of top quality industrial
            materials for various applications including mattress 
            making, PVCs and lots more.
          </p>              
        </div>
    </section>
  )
};

export default Hero;