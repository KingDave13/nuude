'use client';

import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';

const Application = () => {
  return (
    <section className="md:min-h-[1100px] ss:min-h-[700px] min-h-[700px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex items-center w-full md:mb-10">
                <h1 className="text-secondary font-bold md:text-[50px]
                ss:text-[47px] text-[35px] md:mr-14">
                    Membership Application Form
                </h1>
            </motion.div>
        
            <motion.div variants={textVariant()}
            className='flex items-start w-full md:mb-10'>
                <p className='text-white md:text-[17px] ss:text-[18px] 
                text-[14px] md:max-w-[750px] md:leading-[22px]'>
                Please read the terms and conditions carefully before 
                completing and submitting this membership application 
                form. An email will be sent to you upon successful 
                payment and completion of the form as well as on approval 
                of your membership.
                </p>
            </motion.div>

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
            className='flex md:flex-row w-full md:mt-12 gap-20'>
                <div className='w-1/2'>
                    <form className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
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
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
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
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
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
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
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
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[18px] text-[14px]">
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
                            placeholder:text-white-4 font-manier
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[14px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                        </div>

                        <div className="col-span-2">
                            <button
                            type="submit"
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[16px] ss:text-[16px] text-[13px] py-4 px-20
                            text-primary md:rounded-[3px] border-none
                            font-manier cursor-pointer"
                            >
                            {/* {Loading ? 'Sending...' : 'Send'} */} Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className='bg-primaryalt flex flex-col rounded-md
                md:p-10 w-1/2'>
                    <p className='text-white md:text-[16px] text-justify
                    md:leading-[22px]'>
                        By submitting an application for membership or
                        event attendance with Nuude! (referred to as 
                        "Nuude" or "the club" herein), you acknowledge
                        and agree to the following terms and conditions:

                        <ol className='text-white md:text-[15px] text-justify
                    md:mt-4 md:leading-[22px]'>
                        <li>
                            Application Process: To gain entry into Nuude!, 
                            all individuals must apply. An Aurum-level 
                            annual membership, at a minimum, is required 
                            for single gentlemen to attend any Nuude! 
                            event. Approved non-member couples or singles 
                            who have not previously attended may be 
                            invited to join for Dinner to establish 
                            familiarity.
                        </li>

                        <li>
                            Membership Screening: Nuude! values the 
                            quality of its community and carefully curates 
                            its guests. We screen applicants for aesthetic 
                            appeal, professional status, and their 
                            potential contribution to the Nuude! community. 
                            All applications are treated with the utmost 
                            confidentiality and reviewed exclusively by our 
                            Council to maintain the highest caliber of 
                            guests at our events.
                        </li>

                        <li>
                            Approval Process: If an applicant meets 
                            Nuude!'s professional, reputational and 
                            aesthetic criteria, they may be granted the 
                            status of an Approved Non-Member and will be 
                            contacted directly by our team.
                        </li>

                        <li>
                            Discretion: For individuals requiring the 
                            highest level of discretion, Nuude! offers 
                            the option to forego the standard application 
                            process and be interviewed directly by our 
                            team. This ensures your privacy and 
                            confidentiality.
                        </li>

                        <li>
                            Age and Consent: Applicants must be of legal 
                            age to participate in adult-themed events in 
                            their respective jurisdiction. By applying 
                            for membership or attending Nuude! events, 
                            you confirm your legal eligibility and 
                            consent to participate in such activities.
                        </li>

                        <li>
                            Respect and Conduct: All members and guests 
                            are expected to treat each other with respect, 
                            dignity, and consent. Any form of harassment, 
                            discrimination, or non-consensual behavior 
                            will not be tolerated and may result in 
                            immediate removal from Nuude! events and 
                            potential membership revocation.
                        </li>

                        <li>
                            Event Details: Nuude! reserves the right to 
                            modify or cancel events, change event 
                            locations, or adjust event details as needed.
                            Members will be notified of any changes in 
                            advance whenever possible.
                        </li>

                        <li>
                            Membership Fees: Membership fees are 
                            non-refundable and non-transferable. You are 
                            responsible for keeping your membership 
                            information up to date.
                        </li>

                        <li>
                            Termination of Membership: Nuude! reserves the 
                            right to terminate or suspend a member's 
                            membership at its discretion for violations 
                            of these terms and conditions or for any 
                            other reason deemed necessary.
                        </li>

                        <li>
Liability: You understand and acknowledge that participation in Nuude! events is at your own risk. Nuude! and its affiliates are not responsible for any injuries, damages, or losses that may occur during events.

The privacy and safety of Nuude! and our guests is of paramount importance and confidentiality is required of all members, guests, performers, employees, and officers.
To participate in any Nuude! Event, you hereby also agree to the following instructions:

(i) You will not disclose identifying information of any Nuude! member, guest, participant, performer, employee, or officer to the media;
(ii) You will not use or attempt to use photography or video recording at a Nuude! Event;
(iii) You will treat everyone with respect;
(iv) You will ask before you touch;
(v) You will immediately notify Nuude! security or staff if at any time you are aware or have reasonable cause to suspect that anyone's safety or ability to consent is at risk;
(vi) You acknowledge that any violation of this agreement will result in immediate removal from the event, without refund, and a permanent ban from all future events.
(vil) There are no refunds.

By submitting an application, you affirm that you have read, understood, and agree to abide by these terms and conditions. Nuude! reserves the right to update or modify these terms and conditions at any time, and it is your responsibility to review them periodically.
                        </li>
                    </ol>
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Application, '');