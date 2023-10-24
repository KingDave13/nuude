'use client';

import SectionWrapper from "@hoc/SectionWrapper";
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import { layout } from "@styles/styles";

const Contact = () => {
  return (
    <section className="md:min-h-[800px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex flex-row items-center w-full md:mb-10">
                <h1 className="text-white font-bold md:text-[55px]
                ss:text-[47px] text-[35px] md:mr-14">
                    Contact Us
                </h1>
                <motion.div variants={slideIn('right', 'tween', 0.2, 0.5)}
                className="flex-1 relative items-center justify-center">
                    <div className='bg-white md:w-full ss:w-[300px]
                        w-[80px] md:h-[1px] ss:h-[1px] h-[2px]' />
                </motion.div>
            </motion.div>
        
            <motion.div variants={textVariant()}
            className='flex items-start w-full'>
                <p className='text-white md:text-[17px] ss:text-[18px] 
                text-[14px] md:max-w-[600px] md:leading-[22px]'>
                Got any more inquiries, complaints, sponsorship 
                proposals, payment disputes and any other general 
                info? Contact us today and we'll get back to you 
                very, very swiftly.
                </p>
            </motion.div>

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
                className='flex-1 bg-primary bg-opacity-40 p-8 md:mt-0 ss:mt-5
                mt-0 items-start'>
                <form 
                className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
                        md:text-[20px] ss:text-[18px] text-[14px]">
                        Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        // value={form.name}
                        // onChange={handleChange}
                        placeholder="Enter your name"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg placeholder:text-black-100 
                        md:placeholder:text-[15px] ss:placeholder:text-[14px] 
                        placeholder:text-[12px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
                        md:text-[20px] ss:text-[18px] text-[14px]">
                        Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        // value={form.email}
                        // onChange={handleChange}
                        placeholder="Enter your email"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg placeholder:text-black-100 
                        md:placeholder:text-[15px] ss:placeholder:text-[14px] 
                        placeholder:text-[12px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
                        md:text-[20px] ss:text-[18px] text-[14px]">
                        Phone Number
                        </label>
                        <input
                        type="text"
                        name="phone"
                        // value={form.phone}
                        // onChange={handleChange}
                        placeholder="Enter your phone(WhatsApp) number"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg placeholder:text-black-100 
                        md:placeholder:text-[15px] ss:placeholder:text-[14px] 
                        placeholder:text-[12px]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
                        md:text-[20px] ss:text-[18px] text-[14px]">
                        Subject
                        </label>
                        <input
                        type="text"
                        name="subject"
                        // value={form.subject}
                        // onChange={handleChange}
                        placeholder="Enter a subject"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg placeholder:text-black-100 
                        md:placeholder:text-[15px] ss:placeholder:text-[14px] 
                        placeholder:text-[12px]"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-primary font-bold md:mb-4 ss:mb-2 mb-2 
                        md:text-[20px] ss:text-[18px] text-[14px]">
                        Message
                        </label>
                        <textarea
                        rows="5"
                        name="message"
                        // value={form.message}
                        // onChange={handleChange}
                        placeholder="Your message"
                        className="md:py-3 ss:py-3 py-2 px-6 border-[1px] 
                        outline-none text-black rounded-lg placeholder:text-black-100 
                        md:placeholder:text-[15px] ss:placeholder:text-[14px] 
                        placeholder:text-[12px]"
                        />
                    </div>

                    <div className="col-span-2">
                        <button
                        type="submit"
                        className="bg-primary grow2 mr-5 w-fit shadow-md 
                        md:text-[16px] ss:text-[16px] text-[13px] py-2 px-12 
                        text-white rounded-lg font-medium border-none hover:text-white"
                        >
                        {/* {Loading ? 'Sending...' : 'Send'} */} Submit
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Contact, 'contact');