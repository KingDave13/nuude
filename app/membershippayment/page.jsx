'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { useRouter } from "next/navigation";

const MembershipPayment = () => {

    const router = useRouter();

  return (
    <section className="relative w-full">
      <div className="flex hero">
        <div className='items-center justify-center w-full mx-auto
          max-w-[95rem] flex flex-col md:pt-16 ss:pt-20 pt-20' 
          >
            <h1 className='text-secondary md:text-[50px] font-manierBold
            ss:text-[40px] text-[35px] ss:leading-[70px] leading-[55px] 
            md:text-center ss:text-center'>
                Membership Fee Payment
            </h1>

            <p className='md:mt-6 ss:mt-5 mt-6 md:text-[18px] ss:text-[18px]
            text-[16px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[20px] 
            md:font-manierRegular ss:font-manierRegular font-manierLight'>
             When the "Pay Now" button is clicked, an authorized payment
             gateway will open with various online payment methods. Select
             the one you wish to use.
            </p>

            <p className='md:mt-6 ss:mt-5 mt-6 md:text-[16px] ss:text-[16px]
            text-[14px] text-white md:text-center ss:text-center 
            md:font-manierRegular ss:font-manierRegular font-manierLight'>
             You are about to pay the sum of
            </p>

            <h1 className='text-white md:text-[50px] font-manierBold
            ss:text-[40px] text-[35px] ss:leading-[70px] leading-[55px] 
            md:text-center ss:text-center'>
                ₦1,000,000
            </h1>

            <p className='md:mt-6 ss:mt-5 mt-6 md:text-[16px] ss:text-[16px]
            text-[14px] text-white md:text-center ss:text-center 
            md:font-manierRegular ss:font-manierRegular font-manierLight'>
             for the Nuude! annual membership
            </p>

            <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-8 ss:gap-5 
            gap-3 items-center font-manierRegular buttonfull'>
              <button
                className='grow4 bg-secondary border-none buttonhalf
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                ss:py-3 py-3 md:px-12 ss:px-7 px-3 text-primary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                font-medium font-manier cursor-pointer'
                // onClick={() => scrollToSection('membership')}
              >
                Pay Now
              </button>

              <button
                className='border-[1px] grow2 border-secondary 
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                ss:py-3 py-3 md:px-20 ss:px-14 px-6 text-secondary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                font-medium bg-transparent font-manier cursor-pointer
                buttonhalf'
                // onClick={() => scrollToSection('contact')}
              >
                Go Back
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(MembershipPayment, '');