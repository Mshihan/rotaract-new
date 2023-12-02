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
  S_name: string;
  S_phone: string;
  S_nic: string;
  S_email: string;
  S_uni_id: string;
  // playerFiveNic: string;
  // playerTwoName: string;
  // playerTwoNic: string;
  // playerThreeName: string;
  // playerThreeNic: string;
  // playerFourName: string;
  // playerFourNic: string;
  // substituteOneName: string;
  // substituteOneNic: string;
  // substituteTwoName: string;
  // substituteTwoNic: string;
  // substituteThreeName: string;
  // substituteThreeNic: string;
}

export const InitialFormData: StepOneFields = {
  organization: "",
  clubName: "",
  playingCategory: "",
  S_name: "",
  S_phone: "",
  S_nic: "",
  S_email: "",
  S_uni_id: "",
  // playerFiveNic: "",
  // playerTwoName: "",
  // playerTwoNic: "",
  // playerThreeName: "",
  // playerThreeNic: "",
  // playerFourName: "",
  // playerFourNic: "",
  // substituteOneName: "",
  // substituteOneNic: "",
  // substituteTwoName: "",
  // substituteTwoNic: "",
  // substituteThreeName: "",
  // substituteThreeNic: "",
};

export interface GroupEventInterface {
  organization: string;
  clubName: string;
  playingCategory: string;
  player1_name_100_4: string;
  player1_phone_100_4: string;
  player1_nic_100_4: string;
  player2_name_100_4: string;
  player2_nic_100_4: string;
  player3_name_100_4: string;
  player3_nic_100_4: string;
  sub_name_100_4: string;
  sub_nic_100_4: string;
}

export const initialGroupFormData: GroupEventInterface = {
  organization: "",
  clubName: "",
  playingCategory: "",
  player1_name_100_4: "",
  player1_phone_100_4: "",
  player1_nic_100_4: "",
  player2_name_100_4: "",
  player2_nic_100_4: "",
  player3_name_100_4: "",
  player3_nic_100_4: "",
  sub_name_100_4: "",
  sub_nic_100_4: "",
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

export interface IndividualEventsInterface {
  S_100: boolean;
  S_200: boolean;
  S_400: boolean;
  S_800: boolean;
  Long_jump: boolean;
  High_jump: boolean;
  Putt_shot: boolean;
}

export const individualEvents: IndividualEventsInterface = {
  S_100: false,
  S_200: false,
  S_400: false,
  S_800: false,
  Long_jump: false,
  High_jump: false,
  Putt_shot: false,
};

export interface GroupEventsInterface {
  G_100_4: boolean;
  G_200_4: boolean;
  G_200_4_mix: boolean;
  G_tug_of_war: boolean;
}

export const groupEvents: GroupEventsInterface = {
  G_100_4: false,
  G_200_4: false,
  G_200_4_mix: false,
  G_tug_of_war: false,
};
