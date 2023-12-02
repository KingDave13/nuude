import { 
  twitter, 
  instagram, 
  facebook, 
  linkedin, 
  requests,
  guests,
  members,
  announcements,
} from "@public/assets";

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
  
  export const sideLinks = [
    {
      id: 'requests',
      title: 'Requests',
      route: '/admin/requests',
      Icon: requests,
    },
    {
      id: 'guests',
      title: 'Guest List',
      route: '/admin/guests',
      Icon: guests,
    },
    {
      id: 'members',
      title: 'Members',
      route: '/admin/members',
      Icon: members,
    },
    {
      id: 'announcements',
      title: 'Announcements',
      route: '/admin/announcements',
      Icon: announcements,
    },
  ];

  export const socialMedia = [
    {
      id: "twitter",
      Icon: twitter,
      link: ""
    },
    {
      id: "instagram",
      Icon: instagram,
      link: ""
    },
    {
      id: "facebook",
      Icon: facebook,
      link: ""
    },
    {
      id: "linkedin",
      Icon: linkedin,
      link: ""
    }
  ];

  export const footerLinks =[
    {
      id: 'about',
      name: 'About Us',
      route: '/about',
    },
    {
      id: 'membership',
      name: 'Membership',
      route: '/membership',
    },
    {
      id: 'events',
      name: 'Events',
      route: '/events',
    },
    {
      id: 'contact',
      name: 'Contact Us',
      route: '/contact',
    },
  ];