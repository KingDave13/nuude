'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import SectionWrapper from '@hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '@utils/motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormik } from "formik";
import * as Yup from 'yup';

const TicketApplication = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            birthdate: '',
            gender: '',
            employer: '',
            occupation: '',
            instagram: '',
            twitter: '',
            facebook: '',
            turnons: '',
            trait: '',
            contribution: '',
            mode: '',
            age: false,
            terms: false,
        },

        validationSchema: Yup.object({
            firstname: Yup.string().required('First Name is required.'),
            lastname: Yup.string().required('Last Name is required.'),
            email: Yup.string().email('Invalid email address.').required('Email is required.'),
            phone: Yup.string().required('Phone number is required.'),
            birthdate: Yup.string().required('Birth date is required.'),
            gender: Yup.string().required('Gender is required.'),
            employer: Yup.string().required('Employer is required.'),
            occupation: Yup.string().required('Occupation is required.'),
            instagram: Yup.string().required('Instagram is required.'),
            twitter: Yup.string().required('Twitter is required.'),
            facebook: Yup.string().required('Facebook is required.'),
            turnons: Yup.string().required('This is required.'),
            trait: Yup.string().required('This is required.'),
            contribution: Yup.string().required('This is required.'),
            mode: Yup.string().required('This is required.'),
            age: Yup.boolean().oneOf([true], 'Required.'),
            terms: Yup.boolean().oneOf([true], 'Required.'),
        }),

        onSubmit: async (values) => {
            localStorage.setItem('formData', JSON.stringify(values));
            router.push("/confirmticketapplication");
        },
    });

    useEffect(() => {
        if (router.query && router.query.edit) {
            const storedFormData = JSON.parse(localStorage.getItem('formData'));
            if (storedFormData) {
                formik.setValues(storedFormData);
            }
        }
    }, [router.query]);

  return (
    <section className="md:min-h-[2450px] ss:min-h-[3200px] min-h-[4200px] 
    mx-auto flex items-center">
        <div className='items-center w-full mx-auto flex flex-col 
        font-manierRegular'>
            <motion.div variants={slideIn('up', 'tween', 0.2, 0.5)}
            className="flex items-center w-full md:mb-10 ss:mb-8 mb-5">
                <h1 className="text-secondary font-manierMedium 
                md:text-[50px] ss:text-[40px] text-[33px] md:mr-14">
                    Event Ticket Application Form
                </h1>
            </motion.div>
        
            <motion.div variants={textVariant()}
            className='flex items-start w-full md:mb-10 ss:mb-8 mb-8'>
                <p className='text-white md:text-[17px] ss:text-[15px] 
                text-[14px] md:max-w-[750px] ss:max-w-[600px] 
                md:leading-[22px]'>
                    Please read the terms and conditions carefully before 
                    completing and submitting this ticket application 
                    form. An email will be sent to you upon successful 
                    payment and completion of the form as well as on 
                    approval of your application.
                </p>
            </motion.div>

            <motion.div variants={slideIn('down', 'tween', 0.2, 1)}>
            <form onSubmit={formik.handleSubmit} 
            className='flex md:flex-row flex-col w-full md:mt-12 md:gap-20
            ss:gap-8 gap-12'>
                <div className='md:w-1/2 w-full'>
                    <div className="grid grid-cols-2 md:gap-8 ss:gap-4 gap-5">
                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                First Name
                            </label>
                            <input
                            type="text"
                            name="firstname"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your first name"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt focus:outline-none
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.firstname && formik.errors.firstname}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Last Name
                            </label>
                            <input
                            type="text"
                            name="lastname"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your last name"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.lastname && formik.errors.lastname}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Email Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your email address"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.email && formik.errors.email}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Phone Number
                            </label>
                            <PhoneInput
                            type="text"
                            name="phone"
                            defaultCountry="NG"
                            value={formik.values.phone}
                            onChange={(value) => {
                            const numericValue = value?.replace(/[^0-9]/g, '') ?? '';

                            if (numericValue.length <= 13) {
                                formik.handleChange({
                                target: {
                                    name: 'phone',
                                    value: numericValue,
                                },
                                });
                            }
                            }}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your phone number"
                            className="md:py-3 ss:py-3 py-3 px-4 
                            border-none outline-none md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px] text-white 
                            bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.phone && formik.errors.phone}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Date of Birth
                            </label>
                            <input
                            type="date"
                            name="birthdate"
                            value={formik.values.birthdate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="DD/MM/YYYY"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-textalt md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.birthdate && formik.errors.birthdate}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Gender
                            </label>
                            <select
                            type="text"
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-white-4 cursor-pointer
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            >
                                <option value="" disabled hidden>Select a gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>I prefer not to say</option>
                                <option>Other</option>
                            </select>
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.gender && formik.errors.gender}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Employer
                            </label>
                            <input
                            type="text"
                            name="employer"
                            value={formik.values.employer}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Where do you work?"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.employer && formik.errors.employer}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Occupation
                            </label>
                            <input
                            type="text"
                            name="occupation"
                            value={formik.values.occupation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="What do you work as?"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.occupation && formik.errors.occupation}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Instagram Handle
                            </label>
                            <input
                            type="text"
                            name="instagram"
                            value={formik.values.instagram}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="www.instagram.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.instagram && formik.errors.instagram}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Twitter Handle
                            </label>
                            <input
                            type="text"
                            name="twitter"
                            value={formik.values.twitter}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="www.twitter.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.twitter && formik.errors.twitter}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                Facebook Username
                            </label>
                            <input
                            type="text"
                            name="facebook"
                            value={formik.values.facebook}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="www.facebook.com/your username"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.facebook && formik.errors.facebook}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What turns you on the most?
                            </label>
                            <textarea
                            rows="4"
                            name="turnons"
                            value={formik.values.turnons}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.turnons && formik.errors.turnons}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                If you could amplify an erotic trait within yourself, what would it be?
                            </label>
                            <textarea
                            rows="4"
                            name="trait"
                            value={formik.values.trait}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px] 
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.trait && formik.errors.trait}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                What would you contribute to the Nuude! community?
                            </label>
                            <textarea
                            rows="4"
                            name="contribution"
                            value={formik.values.contribution}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="You can be brief or very expressive. No pressure!"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-textalt
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            />
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.contribution && formik.errors.contribution}
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <label className="text-white md:mb-3 ss:mb-2 mb-2 
                            md:text-[16px] ss:text-[15px] text-[13px]">
                                And finally, how did you find us?
                            </label>
                            <select
                            type="text"
                            name="mode"
                            value={formik.values.mode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Please select an option"
                            className="md:py-3 ss:py-2 py-2 px-4 border-none 
                            outline-none text-white md:rounded-[3px]
                            ss:rounded-[3px] rounded-[3px]
                            placeholder:text-white-4 cursor-pointer
                            md:placeholder:text-[14px] 
                            ss:placeholder:text-[12px] 
                            placeholder:text-[12px] bg-primaryalt"
                            >
                                <option value="" disabled hidden>Select an option</option>
                                <option>Social Media</option>
                                <option>From a friend</option>
                                <option>Other</option>
                            </select>
                            <p className="text-mainRed md:text-[12px] 
                            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                            >
                                {formik.touched.mode && formik.errors.mode}
                            </p>
                        </div>

                        <div className="col-span-2 md:mt-5 ss:mt-3 
                        md:flex hidden">
                            <button
                            type="submit"
                            className="bg-secondary grow2 w-fit shadow-md 
                            md:text-[16px] ss:text-[14px] text-[13px] 
                            md:py-4 ss:py-3 md:px-20 ss:px-8
                            text-primary md:rounded-[6px] ss:rounded-[3px] 
                            border-none
                            cursor-pointer"
                            > 
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 w-full h-auto ss:mt-5'>
                    <div className='flex flex-col bg-primaryalt 
                    rounded-md md:p-10 ss:p-5 p-5'>
                        <div>
                            <p className='text-white md:text-[15px] ss:text-[14px] 
                            text-[14px] text-justify md:leading-[22px]'>
                                By submitting an application for 
                                event attendance with Nuude! (referred to as 
                                "Nuude" or "the club" herein), you acknowledge
                                and agree to the following terms and conditions:
                            </p>
                            
                            <div className='md:pl-6 ss:pl-6 pl-5'>
                                <ol className='text-white md:text-[15px] ss:text-[14px] 
                                text-[13px] text-justify md:mt-6 ss:mt-4 mt-4 md:leading-[22px] 
                                font-manierLight'>
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
                                        Liability: You understand and acknowledge 
                                        that participation in Nuude! events is at 
                                        your own risk. Nuude! and its affiliates are 
                                        not responsible for any injuries, damages, or 
                                        losses that may occur during events.
                                    </li>           
                                </ol>
                            </div>
                            

                            <p className='text-white md:text-[15px] ss:text-[14px] 
                            text-[13px] text-justify md:mt-6 ss:mt-4 mt-4 md:leading-[22px]'>
                                The privacy and safety of Nuude! and our guests 
                                is of paramount importance and confidentiality is 
                                required of all members, guests, performers, 
                                employees, and officers.<br></br>
                                To participate in any Nuude! Event, you hereby 
                                also agree to the following instructions:
                            </p>
                        
                            <ol className='text-white md:text-[15px] ss:text-[14px] 
                            text-[13px] text-justify md:mt-6 ss:mt-4 mt-4 md:leading-[22px] list-inside 
                            font-manierLight list-roman-brackets'>
                                <li>
                                    You will not disclose identifying information 
                                    of any Nuude! member, guest, participant, 
                                    performer, employee, or officer to the media;
                                </li>

                                <li>
                                    You will not use or attempt to use photography 
                                    or video recording at a Nuude! Event;
                                </li>

                                <li>
                                    You will treat everyone with respect;
                                </li>

                                <li>
                                    You will ask before you touch;
                                </li>

                                <li>
                                    You will immediately notify Nuude! security or 
                                    staff if at any time you are aware or have 
                                    reasonable cause to suspect that anyone's 
                                    safety or ability to consent is at risk;
                                </li>

                                <li>
                                    You acknowledge that any violation of this 
                                    agreement will result in immediate removal 
                                    from the event, without refund, and a 
                                    permanent ban from all future events.
                                </li>

                                <li>
                                    There are no refunds.
                                </li>
                            </ol>

                            <p className='text-white md:text-[15px] ss:text-[14px] 
                            text-[13px] text-justify md:mt-6 ss:mt-4 mt-4 md:leading-[22px]'>
                                By submitting an application, you affirm that you 
                                have read, understood, and agree to abide by 
                                these terms and conditions. Nuude! reserves the 
                                right to update or modify these terms and 
                                conditions at any time, and it is your 
                                responsibility to review them periodically.
                            </p>
                        </div>
                        

                        <div className='text-white text-justify md:mt-12 
                        ss:mt-6 mt-5'>
                            <div className="flex md:gap-3 ss:gap-3 gap-3 items-center">
                                <input
                                type="checkbox"
                                name="age"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='md:w-5 ss:w-5 w-5 h-5 cursor-pointer 
                                rounded-md'
                                />
                                <label className="text-white md:text-[15px] 
                                ss:text-[14px] text-[12px]">
                                    I confirm and consent that I am over the 
                                    age of 18
                                </label>
                                <p className="text-mainRed md:text-[12px] 
                                ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                                >
                                    {formik.touched.age && formik.errors.age}
                                </p>
                            </div>

                            <div className="flex md:gap-3 ss:gap-3 gap-3 md:mt-3 
                            ss:mt-3 mt-3 items-center">
                                <input
                                type="checkbox"
                                name="terms"
                                value={formik.values.terms}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className='md:w-5 ss:w-5 w-5 h-5 cursor-pointer 
                                rounded-md'
                                />
                                <label className="text-white md:text-[15px] 
                                ss:text-[14px] text-[12px]">
                                    I agree to the above terms and conditions
                                </label>
                                <p className="text-mainRed md:text-[12px] 
                                ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                                >
                                    {formik.touched.terms && formik.errors.terms}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:hidden flex col-span-2 ss:mt-8 mt-8">
                            <button
                            type="submit"
                            className="bg-secondary grow2 w-fit shadow-md 
                            ss:text-[14px] text-[13px] ss:py-3 py-3 ss:px-16
                            px-12 text-primary ss:rounded-[3px] rounded-[3px]
                            border-none"
                            >
                                Submit
                            </button>
                    </div>
                </div>
                </form>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(TicketApplication, '');