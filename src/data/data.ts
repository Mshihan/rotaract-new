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

export interface StepOneFields {
  organization: string;
  clubName: string;
  playingCategory: string;
  captainName: string;
  captainPhone: string;
  captainNic: string;
  captainEmail: string;
  playerFiveName: string;
  playerFiveNic: string;
  playerTwoName: string;
  playerTwoNic: string;
  playerThreeName: string;
  playerThreeNic: string;
  playerFourName: string;
  playerFourNic: string;
  substituteOneName: string;
  substituteOneNic: string;
  substituteTwoName: string;
  substituteTwoNic: string;
  substituteThreeName: string;
  substituteThreeNic: string;
}

export const InitialFormData: StepOneFields = {
  organization: "",
  clubName: "",
  playingCategory: "",
  captainName: "",
  captainPhone: "",
  captainNic: "",
  captainEmail: "",
  playerFiveName: "",
  playerFiveNic: "",
  playerTwoName: "",
  playerTwoNic: "",
  playerThreeName: "",
  playerThreeNic: "",
  playerFourName: "",
  playerFourNic: "",
  substituteOneName: "",
  substituteOneNic: "",
  substituteTwoName: "",
  substituteTwoNic: "",
  substituteThreeName: "",
  substituteThreeNic: "",
};

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
