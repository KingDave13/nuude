import { RxTwitterLogo } from 'react-icons/rx';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';

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
      Icon: RxTwitterLogo,
      link: ""
    },
    {
      id: "instagram",
      Icon: AiOutlineInstagram,
      link: ""
    },
    {
      id: "facebook",
      Icon: FiFacebook,
      link: ""
    },
    {
      id: "linkedin",
      Icon: SlSocialLinkedin,
      link: ""
    }
  ];

  export const footerLinks =[
    {
      id: 'link1',
      name: 'About Us',
      route: '/about',
    },
    {
      id: 'link2',
      name: 'Membership',
      route: '/membership',
    },
    {
      id: 'link3',
      name: 'Events',
      route: '/events',
    },
    {
      id: 'link4',
      name: 'Contact Us',
      route: '/contact',
    },
  ];