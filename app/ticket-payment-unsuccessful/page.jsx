'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { useRouter } from "next/navigation";

const TicketPaymentUnsuccessful = () => {

    const router = useRouter();

    const handleClick = () => {
      router.push(`/#contact`);
    };

    const handlePayment = () => {
      // router.push('/');
    }

  return (
    <section className="relative w-full">
      <div className="flex hero2 sm:px-16 px-6">
        <div className='md:items-center ss:items-center justify-center w-full mx-auto
          max-w-[95rem] flex flex-col md:pt-16 ss:pt-20 pt-20 font-manierRegular' 
          >
            <h1 className='text-secondary md:text-[52px] font-manierMedium
            ss:text-[47px] text-[35px] md:text-center ss:text-center
            md:leading-[20px] ss:leading-[20px] leading-[45px]'>
                Payment Unsuccessful!
            </h1>

            <p className='md:mt-14 ss:mt-12 mt-6 md:text-[18px] ss:text-[18px]
            text-[15px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[22px] 
            md:max-w-[700px] ss:max-w-[700px] max-w-[350px]'>
             Looks like there was a bit of a hiccup while attempting to
             receive your payment. Not to worry! If you were debited, the
             transaction will be reversed within 48hrs.
            </p>

            <p className='md:mt-6 ss:mt-6 mt-4 md:text-[18px] ss:text-[18px]
            text-[15px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[22px] 
            md:max-w-[700px] ss:max-w-[700px] max-w-[350px]'>
             If you were not refunded, please do contact us using the 
             button below. You can also attempt the transaction again if
             it was a network issue from your end.
            </p>

            <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-6 ss:gap-5 
            gap-3 items-center font-manierRegular buttonfull'>
              <button
                className='grow4 bg-secondary border-none buttonhalf
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                ss:py-3 py-3 md:px-16 ss:px-10 px-3 text-primary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                cursor-pointer'
                onClick={handlePayment}
              >
                Retry Payment
              </button>

              <button
                className='border-[1px] grow2 border-secondary 
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                ss:py-3 py-3 md:px-20 ss:px-16 px-6 text-secondary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                bg-transparent cursor-pointer buttonhalf'
                onClick={handleClick}
              >
                Contact Us
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TicketPaymentUnsuccessful;