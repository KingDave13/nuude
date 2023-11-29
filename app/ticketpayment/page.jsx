'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";

const TicketPayment = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        setFormData(storedFormData);
    }, []);

    const config = {
      reference: new Date().getTime().toString(),
      email: formData.email || 'user@example.com',
      amount: 150000 * 100,
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    };
    
    const onSuccess = (reference) => {
      console.log('Payment successful:', reference);

      router.push(`/ticket-payment-confirmation-success/${reference.reference}`);
   };

    const onClose = () => {
      router.push('/ticket-payment-unsuccessful');
    };

    const handleClick = () => {
      router.push('/ticketapplication');
    };

  return (
    <section className="relative w-full">
      <div className="flex hero1 sm:px-16 px-6">
        <div className='md:items-center ss:items-center justify-center w-full mx-auto
          max-w-[95rem] flex flex-col md:pt-16 ss:pt-20 pt-20 font-manierRegular
          fade-in-from-bottom' 
          >
            <h1 className='text-secondary md:text-[52px] font-manierMedium
            ss:text-[47px] text-[35px] md:text-center ss:text-center
            md:leading-[20px] ss:leading-[20px] leading-[45px]'>
                Event Registration Fee
            </h1>

            <p className='md:mt-12 ss:mt-12 mt-6 md:text-[18px] ss:text-[18px]
            text-[15px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[22px] 
            md:max-w-[700px] ss:max-w-[700px] max-w-[350px]'>
             When the "Pay Now" button is clicked, an authorized payment
             gateway will open with various online payment methods. Select
             the one you wish to use.
            </p>

            <p className='md:mt-8 ss:mt-6 mt-6 md:text-[16px] ss:text-[16px]
            text-[14px] text-white md:text-center ss:text-center 
            font-manierLight'>
             You are about to pay the sum of
            </p>

            <h1 className='text-white md:text-[55px] font-manierBold
            ss:text-[50px] text-[45px] ss:leading-[70px] leading-[55px] 
            md:text-center ss:text-center'>
                ₦150,000
            </h1>

            <p className='md:mt-1 ss:mt-1 mt-1 md:text-[16px] ss:text-[16px]
            text-[14px] text-white md:text-center ss:text-center 
            font-manierLight'>
             for ticket and registration for Nuude! event 01
            </p>

            <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-6 ss:gap-5 
            gap-3 items-center font-manierRegular buttonfull'>
              <PaystackButton
                className='grow4 bg-secondary border-none buttonhalf
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                ss:py-3 py-3 md:px-20 ss:px-16 px-3 text-primary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                cursor-pointer'
                text="Pay Now"
                {...config}
                onSuccess={onSuccess}
                onClose={onClose}
              />

              <button
                className='border-[1px] grow2 border-secondary 
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                ss:py-3 py-3 md:px-20 ss:px-16 px-6 text-secondary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                bg-transparent cursor-pointer buttonhalf'
                onClick={handleClick}
              >
                Go Back
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TicketPayment;