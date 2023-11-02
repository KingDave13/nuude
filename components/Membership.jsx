'use client';

import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, textVariant } from '@utils/motion';

const Membership = () => {
  return (
    <section className="md:min-h-[700px] ss:min-h-[600px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular md:pb-10'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex justify-between items-center w-full md:gap-12
            ss:gap-8 md:mb-10 ss:mb-8">
                <div className="flex-grow">
                    <div className='bg-white w-full md:h-[1px] ss:h-[1px] h-[2px]' />
                </div>

                <h1 className="text-white font-manierMedium md:text-[55px]
                ss:text-[40px] text-[35px]">
                    Membership
                </h1>

                <div className="flex-grow">
                    <div className='bg-white w-full md:h-[1px] ss:h-[1px] h-[2px]' />
                </div>
            </motion.div>

            <motion.div variants={textVariant()}
            className='flex-col justify-center items-center'>
                <p className='text-white md:text-[17px] ss:text-[16px] 
                text-[14px] text-center'>
                    Important Information Before Applying
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-3 
                md:leading-[22px] text-center'>
                    To gain entry into Nuude!, one must apply. An 
                    Aurum-level annual membership, at minimum, 
                    is required for any single gentleman to attend a 
                    Nuude! event. Approved non-member couples or singles 
                    who have never attended will have the opportunity to 
                    join us for dinner.
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-3 
                md:leading-[22px] text-center'>
                    This is a way for us to get to know our guests, and 
                    also to ensure every Nuude! event is a singular 
                    evening with a carefully curated crowd. We screen 
                    for aesthetic appeal, professional status and what 
                    one will contribute to the Nuude! community.
                </p>

                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-3 
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
                text-[14px] md:max-w-[850px] md:mt-5 ss:mt-3 
                md:leading-[22px] text-center'>
                    Applicant's requiring the greatest level of discretion 
                    may forego our application and be interviewed directly 
                    by Nuude!.
                </p>    
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Membership, 'membership');