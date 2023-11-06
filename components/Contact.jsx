'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';

const Contact = () => {
  return (
    <section className="md:min-h-[1200px] ss:min-h-[900px] min-h-[900px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-10 ss:mb-5
            mb-4">
                <h1 className="text-white font-manierMedium md:text-[55px]
                ss:text-[45px] text-[35px] md:mr-14 ss:mr-6 mr-6">
                    Contact Us
                </h1>
                <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-white w-full h-[1px]' />
                </motion.div>
            </motion.div>
        
            <motion.div variants={textVariant()}
            className='flex items-start w-full md:mb-10 ss:mb-5 mb-10'>
                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[600px] ss:max-w-[600px] 
                md:leading-[22px]'>
                Got any more inquiries, complaints, sponsorship 
                proposals, payment disputes and any other general 
                info? Contact us today and we'll get back to you 
                very, very swiftly.
                </p>
            </motion.div>

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
            className='w-full'>
                <div className='md:bg-primary ss:bg-primary md:p-12 
                ss:p-6 md:w-1/2'>
                <form 
                className="grid grid-cols-2 md:gap-8 ss:gap-6 gap-5">
                    <div className="flex flex-col">
                        <label className="text-white md:mb-3 ss:mb-2 mb-2 
                        md:text-[16px] ss:text-[15px] text-[14px]">
                        First Name
                        </label>
                        <input
                        type="text"
                        name="firstname"
                        // value={form.name}
                        // onChange={handleChange}
                        placeholder="Enter your first name"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-white md:rounded-[3px]
                        ss:rounded-[3px] rounded-[3px]
                        md:placeholder:text-[14px] 
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-white md:mb-3 ss:mb-2 mb-2 
                        md:text-[16px] ss:text-[15px] text-[14px]">
                        Last Name
                        </label>
                        <input
                        type="text"
                        name="lastname"
                        // value={form.name}
                        // onChange={handleChange}
                        placeholder="Enter your last name"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-white md:rounded-[3px]
                        ss:rounded-[3px] rounded-[3px]
                        md:placeholder:text-[14px] 
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-white md:mb-3 ss:mb-2 mb-2 
                        md:text-[16px] ss:text-[15px] text-[14px]">
                        Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        // value={form.email}
                        // onChange={handleChange}
                        placeholder="Enter your email address"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-white md:rounded-[3px]
                        ss:rounded-[3px] rounded-[3px]
                        md:placeholder:text-[14px] 
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-white md:mb-3 ss:mb-2 mb-2 
                        md:text-[16px] ss:text-[15px] text-[14px]">
                        Subject
                        </label>
                        <input
                        type="text"
                        name="subject"
                        // value={form.subject}
                        // onChange={handleChange}
                        placeholder="Enter a subject"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-white md:rounded-[3px]
                        ss:rounded-[3px] rounded-[3px]
                        md:placeholder:text-[14px] 
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-white md:mb-3 ss:mb-2 mb-2 
                        md:text-[16px] ss:text-[15px] text-[14px]">
                        Message
                        </label>
                        <textarea
                        rows="6"
                        name="message"
                        // value={form.message}
                        // onChange={handleChange}
                        placeholder="You can be brief or very expressive. No pressure!"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-white md:rounded-[3px]
                        ss:rounded-[3px] rounded-[3px]
                        md:placeholder:text-[14px] 
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                    </div>

                    <div className="col-span-2">
                        <button
                        type="submit"
                        className="bg-secondary grow2 w-fit shadow-md 
                        md:text-[16px] ss:text-[14px] text-[13px] md:py-4 
                        ss:py-3 py-0 md:px-20 ss:px-16
                        text-primary md:rounded-[3px] ss:rounded-[3px] 
                        rounded-[3px] border-none cursor-pointer"
                        >
                        {/* {Loading ? 'Sending...' : 'Send'} */} Submit
                        </button>
                    </div>
                </form>
                </div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Contact, 'contact');