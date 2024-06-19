'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";

const Modal = ({ onClose }) => {

  const router = useRouter();
  const modalRef = useRef(null);

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.top = '0';
  };

  const handleClick = () => {
      router.push('/ticketapplication');
      onClose();
      enableScroll();
  };

  return (
      <AnimatePresence>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center
        bg-black bg-opacity-80 z-50">
            <motion.div 
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.1 }}
            ref={modalRef} 
            className="bg-primaryalt md:p-10 ss:p-10 p-6 rounded-md shadow-xl 
            flex flex-col justify-center w-auto h-auto font-manierRegular
            items-center">
                <div className='flex flex-col w-full justify-center 
                items-center'>
                    <h1 className='text-white md:text-[20px] ss:text-[20px]
                    text-[17px] text-center md:mb-6 ss:mb-6 mb-5'>
                      Please fill out the one-time ticket <br></br>
                      application form first
                    </h1>

                    <button
                    onClick={handleClick}
                    className='grow4 bg-secondary border-none w-full
                    md:text-[16px] ss:text-[15px] text-[13px] md:py-4
                    ss:py-4 py-3 md:px-20 ss:px-7 px-5 text-primary 
                    md:rounded-[3px] ss:rounded-[3px] rounded-[3px] 
                    font-manierMedium cursor-pointer'
                    >
                      OK
                    </button>
                </div>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

const TicketPayment = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const disableScroll = () => {
      setScrollPosition(window.pageYOffset);
      document.body.style.overflow = 'hidden';
      document.body.style.top = `-${scrollPosition}px`;
    };

    useEffect(() => {
      const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
      setFormData(storedFormData);

      const checkSession = async () => {
        try {
          const response = await fetch('/api/check-session', {
            method: 'POST',
            body: JSON.stringify(storedFormData),
          });
          
          if (!response.ok) {
            console.log('Invalid session. Redirecting...');
            setModalOpen(true);
            router.push("/ticketapplication");
          }
        } catch (error) {
          console.error('Error during API call:', error);
        }
      };
  
      checkSession();
    }, []);

    const isFormDataEmpty = Object.keys(formData).length === 0;

    const config = {
      reference: new Date().getTime().toString(),
      email: formData.email || 'user@example.com',
      amount: 150000 * 100,
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      paymentType: 'Guest Ticket',
    };
    
    const writeFormDataToDatabase = async () => {
      try {
        const response = await fetch('api/database/formdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            birthdate: formData.birthdate,
            gender: formData.gender,
            employer: formData.employer,
            occupation: formData.occupation,
            instagram: formData.instagram,
            twitter: formData.twitter,
            facebook: formData.facebook,
            turnons: formData.turnons,
            trait: formData.trait,
            contribution: formData.contribution,
            mode: formData.mode,
            paymentType: config.paymentType,
            reference: config.reference,
          }),
        });
    
        if (response.ok) {
          console.log('Form data written successfully')
          localStorage.removeItem('formData');

        } else {
          console.error('Failed to write form data to the database');
        }
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    const onSuccess = () => {
      writeFormDataToDatabase();
      router.push('/ticket-payment-confirmation-success');
    };
    
    const onClose = () => {
      localStorage.removeItem('formData');
      router.push('/ticket-payment-unsuccessful');
    };

    const handleCloseClick = () => {
      localStorage.removeItem('formData');
      router.push('/ticketapplication');
    };

  return (
    <section className="relative w-full">
      <div className="flex hero1 sm:px-16 px-6">
        {modalOpen && (
            <Modal onClose={() => setModalOpen(false)} />
        )}
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

            <p className='md:mt-12 ss:mt-12 mt-6 md:text-[18px] ss:text-[18px]
            text-[15px] text-white md:text-center ss:text-center 
            md:leading-[25px] ss:leading-[25px] leading-[22px] 
            md:max-w-[700px] ss:max-w-[700px] max-w-[350px]'>
             <span className="text-secondary">Please note </span>that 
             payment services are offered by Plugg Resources and 
             Technologies via Paystack.
            </p>

            <div className='flex md:mt-8 ss:mt-8 mt-6 md:gap-6 ss:gap-5 
            gap-3 items-center font-manierRegular buttonfull'>
              {isFormDataEmpty ? (
                <button
                  className='grow4 bg-secondary border-none buttonhalf
                  md:text-[17px] ss:text-[17px] text-[14px] md:py-4
                  ss:py-3 py-3 md:px-20 ss:px-16 px-3 text-primary 
                  md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                  cursor-pointer'
                  onClick={() => {
                    setModalOpen(true);
                    disableScroll();
                  }}
                >
                  Pay Now
                </button>
              ) : (
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
              )}
              
              <button
                className='border-[1px] grow2 border-secondary 
                md:text-[17px] ss:text-[17px] text-[14px] md:py-4 
                ss:py-3 py-3 md:px-20 ss:px-16 px-6 text-secondary 
                md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                bg-transparent cursor-pointer buttonhalf'
                onClick={handleCloseClick}
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