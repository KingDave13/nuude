import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export const navLinks = [
    {
      id: "about",
      title: "About the club",
      route: "/about",
    },
    {
      id: "membership",
      title: "Membership",
      route: "/membership",
    },
    {
      id: "events",
      title: "Events",
      route: "/events",
    },
    {
      id: "contact",
      title: "Contact Us",
      route: "/contact",
    },
  ];
  
  export const socialMedia = [
    {
      id: "twitter",
      Icon: AiFillTwitterCircle,
      link: ""
    },
    {
      id: "instagram",
      Icon: AiOutlineInstagram,
      link: ""
    },
    {
      id: "facebook",
      Icon: FaFacebook,
      link: ""
    },
    {
      id: "linkedin",
      Icon: FaLinkedinIn,
      link: ""
    }
  ];

  export const footerLinks =[
    {
      id: 'link1',
      name: 'About Us',
      route: '',
    },
    {
      id: 'link2',
      name: 'Membership',
      route: '',
    },
    {
      id: 'link3',
      name: 'Events',
      route: '',
    },
    {
      id: 'link4',
      name: 'Contact Us',
      route: '',
    },
  ];