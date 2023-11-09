interface NavLink {
  title: string;
  href: string;
}

interface BannerItem {
  title: string;
}
interface SportCategories {
  title: string;
}

export const navLinks: Array<NavLink> = [
  { title: "What we do", href: "/" },
  { title: "How it works", href: "/" },
  { title: "Case studies", href: "/" },
  { title: "About", href: "/" },
  { title: "Contact", href: "/" },
];

export const floatingEvent = "Basketball Championship Registration";

export const bannerText: Array<BannerItem> = [
  {
    title: "Register Now",
  },
  {
    title: ".",
  },
  {
    title: "Secure  your slot",
  },
  {
    title: ".",
  },
  {
    title: "TBL Basketball",
  },
  {
    title: ".",
  },
  {
    title: "Register Now",
  },
  {
    title: ".",
  },
  {
    title: "Secure  your slot",
  },
  {
    title: ".",
  },
  {
    title: "TBL Basketball",
  },
  {
    title: ".",
  },
];

export const sportCategories: Array<SportCategories> = [
  { title: "University Men" },
  { title: "University Women" },
  { title: "Rotaract Men" },
  { title: "Rotaract Women" },
];
