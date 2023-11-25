'use client';

import { useState, useEffect, useRef } from 'react';
import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { event } from "@public/assets";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import scrollToSection from '@constants/scrollToSection';

const Modal = ({ onClose }) => {
    const router = useRouter();
    const modalRef = useRef(null);

    const enableScroll = () => {
      document.body.style.overflow = 'auto';
      document.body.style.top = '0';
    };
  
    const handleEventClick = () => {
      router.push('/ticketapplication');
      onClose();
      enableScroll();
    };

    const handleClick = () => {
        onClose();
        enableScroll();
        scrollToSection('membership');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
                enableScroll();
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
  
    return (
      <div className="fixed inset-0 flex items-center justify-center
       bg-black bg-opacity-80 z-50">
        <div ref={modalRef} 
        className="bg-primary md:p-12 ss:p-10 p-5 rounded-md shadow-xl 
        flex flex-col justify-center w-auto h-auto font-manierRegular">
            <div className='flex flex-row w-full justify-between md:gap-10
            ss:gap-10 gap-4 items-center'>
                <h1 className='text-white md:text-[18px] ss:text-[16px]
                text-[14px]'>
                    Apply for event through one-time ticket
                </h1>
                <button
                onClick={handleEventClick}
                className='grow4 bg-secondary border-none
                md:text-[16px] ss:text-[15px] text-[13px] md:py-2
                ss:py-2 py-2 md:px-8 ss:px-7 px-5 text-primary 
                md:rounded-[3px] ss:rounded-[3px] rounded-[3px] 
                font-medium font-manier cursor-pointer'
                >
                    Here
                </button>
            </div>

            <div className="flex relative items-center justify-center
            md:mt-5 ss:mt-5 mt-3">
                <div className='bg-secondary w-full h-[1px]' />
            </div>

            <div className='flex flex-row w-full justify-between md:gap-10 
            ss:gap-10 gap-4 md:mt-5 ss:mt-5 mt-3 items-center'>
                <h1 className='text-white md:text-[18px] ss:text-[16px]
                text-[14px]'>
                    Apply for event through membership
                </h1>
                <button
                onClick={handleClick}
                className='grow4 bg-secondary border-none
                md:text-[16px] ss:text-[15px] text-[13px] md:py-2
                ss:py-2 py-2 md:px-8 ss:px-7 px-5 text-primary 
                md:rounded-[3px] ss:rounded-[3px] rounded-[3px] 
                font-medium font-manier cursor-pointer'
                >
                    Here
                </button>
            </div>
        </div>
      </div>
    );
  };

const Events = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const disableScroll = () => {
    setScrollPosition(window.pageYOffset);
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
  };

  return (
    <section className="md:min-h-[900px] ss:min-h-[700px] min-h-[1030px] 
    mx-auto flex items-center">

        {modalOpen && (
            <Modal onClose={() => setModalOpen(false)} />
        )}

        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular md:mb-0 ss:mb-0 mb-8'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-20 
            ss:mb-10 mb-8">
                <h1 className="text-secondary font-manierMedium md:text-[55px]
                ss:text-[40px] text-[33px] md:mr-14 ss:mr-6 mr-5">
                    Upcoming Events
                </h1>
                <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-secondary w-full h-[1px]' />
                </motion.div>
            </motion.div>
            
            <motion.div variants={slideIn('down', 'tween', 0.2, 0.5)}
            className="flex md:flex-row ss:flex-row flex-col w-full 
            items-center md:gap-28 ss:gap-12 gap-8">
                <motion.div 
                variants={slideIn('down', 'tween', 0.2, 0.5)}
                className='justify-center items-start'>
                    <Image src={event} alt='event'
                    className='md:w-[420px] ss:w-[700px] h-auto'
                    />
                </motion.div>

                <motion.div variants={textVariant()}>
                    <h1 className='text-white md:text-[40px] ss:text-[30px] 
                    text-[23px] font-manierMedium md:mb-5 ss:mb-3 mb-3'>
                        Nuude!
                    </h1>

                    <p className='text-white md:text-[18px] ss:text-[15px] 
                    text-[14px] md:max-w-[700px] md:leading-[22px] 
                    ss:leading-[20px] md:mb-5 ss:mb-3 mb-3'>
                        Step into a world of fine dining, intrigue and 
                        sensuality where we hand you the key to your dreams.
                    </p>

                    <p className='text-white md:text-[17px] ss:text-[15px] 
                    text-[14px] md:mb-5 ss:mb-5 mb-3'>
                        Featuring: Connect, pool party, fine dining.
                    </p>

                    <div className="relative items-center justify-center
                    md:mb-5 ss:mb-5 mb-3">
                        <div className='bg-secondary w-full h-[1px]' />
                    </div>

                    <h1 className='text-white md:text-[40px] ss:text-[25px] 
                    text-[23px] font-manierMedium'>
                        Saturday, 16th December, 2023.
                    </h1>

                    <p className='text-white md:text-[16px] ss:text-[14px] 
                    text-[14px] max-w-[750px] md:mt-5 md:leading-[22px]
                    ss:leading-[20px] ss:mt-3 mt-3'>
                        Other details including time and venue will be 
                        communicated privately via email after successful 
                        screening and approval.
                    </p>    

                    <div className='flex md:mt-8 ss:mt-6 mt-6 md:gap-8 ss:gap-5 
                    gap-3 items-center font-manierRegular buttonfull'>
                        <button
                            className='grow4 bg-secondary border-none buttonhalf
                            md:text-[17px] ss:text-[15px] text-[14px] md:py-4
                            ss:py-3 py-3 md:px-16 ss:px-5 px-3 text-primary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer'
                            onClick={() => {
                                setModalOpen(true);
                                disableScroll();
                            }}
                        >
                            Apply for Event
                        </button>

                        <button
                            className='border-[1px] grow2 border-secondary 
                            md:text-[17px] ss:text-[15px] text-[14px] md:py-4 
                            ss:py-3 py-3 md:px-20 ss:px-10 px-6 text-secondary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium bg-transparent font-manier cursor-pointer
                            buttonhalf'
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Us
                        </button>
                    </div>
                </motion.div>

                
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(Events, 'events');