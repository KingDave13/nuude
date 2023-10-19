'use client';

const Hero = () => {
  return (
    <section className="relative w-full flex hero">
      <div className='items-center justify-center w-full mx-auto
        max-w-[95rem] flex flex-col gap-5' 
        >
          <h1 className='text-white font-bold md:text-[90px]
          ss:text-[50px] text-[40px] md:leading-[105px] 
          ss:leading-[55px] leading-[45px] text-center'>
              The world's <span className="text-mainRed">
                most exclusive </span> <br></br>
              members-only <br></br>club!
          </h1>

          <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[19px]
          ss:text-[20px] text-[14px]'>
            We are the number one suppliers of top quality industrial
            materials for various applications including mattress 
            making, PVCs and lots more.
          </p>              
        </div>
    </section>
  )
};

export default Hero;