'use client';

import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import scrollToSection from '../constants/scrollToSection';
import { useRouter } from 'next/navigation';

const Membership = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/membershipapplication');
      };

  return (
    <section className="md:min-h-[750px] ss:min-h-[700px] min-h-[800px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular md:pb-10 md:mb-0 ss:mb-0 mb-8'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="flex justify-between items-center w-full md:gap-12
            ss:gap-8 gap-5 md:mb-10 ss:mb-8 mb-6">
                <div className="flex-grow">
                    <div className='bg-white w-full h-[1px]' />
                </div>

                <h1 className="text-white font-manierMedium md:text-[55px]
                ss:text-[40px] text-[33px]">
                    Membership
                </h1>

                <div className="flex-grow">
                    <div className='bg-white w-full h-[1px]' />
                </div>
            </motion.div>

            <motion.div variants={textVariant()}
            className='flex-col justify-center items-center'>
                <p className='text-white md:text-[17px] ss:text-[16px] 
                text-[15px] text-center font-manierBold'>
                    Important Information Before Applying
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-4 mt-4
                md:leading-[22px] text-center'>
                    To gain entry into Nuude!, one must apply. An 
                    Aurum-level annual membership, at minimum, 
                    is required for any single gentleman to attend a 
                    Nuude! event. Approved non-member couples or singles 
                    who have never attended will have the opportunity to 
                    join us for dinner.
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-4 mt-4
                md:leading-[22px] text-center'>
                    This is a way for us to get to know our guests, and 
                    also to ensure every Nuude! event is a singular 
                    evening with a carefully curated crowd. We screen 
                    for aesthetic appeal, professional status and what 
                    one will contribute to the Nuude! community.
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-4 mt-4
                md:leading-[22px] text-center'>
                    All submissions are confidential and reviewed solely 
                    by our Council for the purpose of maintaining the 
                    highest calibre of guests at our events. If an 
                    applicant meets Nuude!'s professional, reputational, 
                    and aesthetic criteria the applicant will be granted 
                    the status of Approved Non-Member and contacted 
                    directly.
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-4 mt-4
                md:leading-[22px] text-center'>
                    Applicant's requiring the greatest level of discretion 
                    may forego our application and be interviewed directly 
                    by Nuude!.
                </p>

                <div className='flex md:mt-12 ss:mt-10 mt-6 md:gap-6 ss:gap-5 
                    gap-3 items-center font-manierRegular buttonfull
                    justify-center'>
                        <button
                            className='grow4 bg-secondary border-none buttonhalf
                            md:text-[17px] ss:text-[15px] text-[14px] md:py-3.5
                            ss:py-3 py-3 md:px-10 ss:px-5 px-2 text-primary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium font-manier cursor-pointer'
                            onClick={handleClick}
                        >
                            Apply for Membership
                        </button>

                        <button
                            className='border-[1px] grow2 border-secondary 
                            md:text-[17px] ss:text-[15px] text-[14px] md:py-3.5 
                            ss:py-3 py-3 md:px-20 ss:px-16 px-6 text-secondary 
                            md:rounded-[6px] ss:rounded-[3px] rounded-[3px] 
                            font-medium bg-transparent font-manier cursor-pointer
                            buttonhalf'
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Us
                        </button>
                    </div>   
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Membership, 'membership');