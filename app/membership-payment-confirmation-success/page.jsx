'use client';

import { useRouter } from "next/navigation";

const MembershipPaymentSuccess = () => {
    const router = useRouter();

    const handleClick = () => {
      router.push(`/#contact`);
    };

    const handleHomeClick = () => {
      router.push('/');
    }

  return (
    <section className="relative w-full">
      <div className="flex hero1 sm:px-16 px-6">
        <div className='md:items-center ss:items-center justify-center w-full mx-auto
          max-w-[95rem] flex flex-col md:pt-16 ss:pt-20 pt-20 font-manierRegular' 
          >
            <h1 className='text-secondary md:text-[52px] font-manierMedium
            ss:text-[47px] text-[35px] md:text-center ss:text-center
            md:leading-[20px] ss:leading-[20px] leading-[45px]'>
              Payment Successful!
            </h1>

            <p className='md:mt-14 ss:mt-12 mt-6 md:text-[18px] ss:text-[18px]
            text-[15px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[22px] 
            md:max-w-[700px] ss:max-w-[700px] max-w-[350px]'>
              Your payment has been received successfully and thus, validated
              your application. A payment receipt will be sent to you via the
              provided email as well as other communications including your
              membership number, concise details of events, marketing
              info, etc. upon approval.
            </p>

            <p className='md:mt-6 ss:mt-6 mt-4 md:text-[18px] ss:text-[18px]
            text-[15px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[22px] 
            md:max-w-[700px] ss:max-w-[700px] max-w-[350px]'>
              Be sure to check your email regularly- including spam- for
              information from us regarding your membership.
            </p>

            <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-6 ss:gap-5 
            gap-3 items-center font-manierRegular buttonfull'>
              <button
                className='grow4 bg-secondary border-none buttonhalf
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                ss:py-3 py-3 md:px-14 ss:px-10 px-3 text-primary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                cursor-pointer'
                onClick={handleHomeClick}
              >
                Go Back to Home
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

export default MembershipPaymentSuccess;