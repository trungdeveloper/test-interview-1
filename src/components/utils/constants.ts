import { msg } from "@lingui/core/macro";

export const NavItem = {
  aboutUs: {
    title: msg`About Us`,
    href: "#aboutus",
    id: "aboutus",
  },
  games: {
    title: msg`Games`,
    href: "#games",
    id: "games",
  },
  partners: {
    title: msg`Partners`,
    href: "#partners",
    id: "partners",
  },
  contactUs: {
    title: msg`Contact Us`,
    href: "#contactus",
    id: "contactus",
  },
};

export const NAVS = Object.values(NavItem).map((item) => item);
