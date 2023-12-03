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
  player1_email_100_4: string;
  player1_uni_id_100_4: string;
  player2_name_100_4: string;
  player2_nic_100_4: string;
  player2_uni_id_100_4: string;

  player3_name_100_4: string;
  player3_nic_100_4: string;
  player3_uni_id_100_4: string;

  player4_name_100_4: string;
  player4_nic_100_4: string;
  player4_uni_id_100_4: string;

  sub_name_100_4: string;
  sub_nic_100_4: string;
  sub_uni_id_100_4: string;

  player1_name_200_4: string;
  player1_phone_200_4: string;
  player1_nic_200_4: string;
  player1_email_200_4: string;
  player1_uni_id_200_4: string;
  player2_name_200_4: string;
  player2_nic_200_4: string;
  player2_uni_id_200_4: string;
  player3_name_200_4: string;
  player3_nic_200_4: string;
  player3_uni_id_200_4: string;

  player4_name_200_4: string;
  player4_nic_200_4: string;
  player4_uni_id_200_4: string;

  sub_name_200_4: string;
  sub_nic_200_4: string;
  sub_uni_id_200_4: string;

  player1_name_100_4_mix: string;
  player1_phone_100_4_mix: string;
  player1_nic_100_4_mix: string;
  player1_email_100_4_mix: string;
  player1_uni_id_100_4_mix: string;
  player2_name_100_4_mix: string;
  player2_nic_100_4_mix: string;
  player2_uni_id_100_4_mix: string;
  player3_name_100_4_mix: string;
  player3_nic_100_4_mix: string;
  player3_uni_id_100_4_mix: string;

  player4_name_100_4_mix: string;
  player4_nic_100_4_mix: string;
  player4_uni_id_100_4_mix: string;

  sub_name_100_4_mix: string;
  sub_nic_100_4_mix: string;
  sub_uni_id_100_4_mix: string;

  player1_name_tug_of_war: string;
  player1_phone_tug_of_war: string;
  player1_nic_tug_of_war: string;
  player1_email_tug_of_war: string;
  player1_uni_id_tug_of_war: string;
  player2_name_tug_of_war: string;
  player2_nic_tug_of_war: string;
  player2_uni_id_tug_of_war: string;
  player3_name_tug_of_war: string;
  player3_nic_tug_of_war: string;
  player3_uni_id_tug_of_war: string;

  player4_name_tug_of_war: string;
  player4_nic_tug_of_war: string;
  player4_uni_id_tug_of_war: string;

  player5_name_tug_of_war: string;
  player5_nic_tug_of_war: string;
  player5_uni_id_tug_of_war: string;

  player6_name_tug_of_war: string;
  player6_nic_tug_of_war: string;
  player6_uni_id_tug_of_war: string;

  player7_name_tug_of_war: string;
  player7_nic_tug_of_war: string;
  player7_uni_id_tug_of_war: string;

  player8_name_tug_of_war: string;
  player8_nic_tug_of_war: string;
  player8_uni_id_tug_of_war: string;

  sub_1_name_tug_of_war: string;
  sub_1_nic_tug_of_war: string;
  sub_1_uni_id_tug_of_war: string;

  sub_2_name_tug_of_war: string;
  sub_2_nic_tug_of_war: string;
  sub_2_uni_id_tug_of_war: string;
}

export const initialGroupFormData: GroupEventInterface = {
  organization: "",
  clubName: "",
  playingCategory: "",

  player1_name_100_4: "",
  player1_phone_100_4: "",
  player1_nic_100_4: "",
  player1_email_100_4: "",
  player1_uni_id_100_4: "",
  player2_name_100_4: "",
  player2_nic_100_4: "",
  player2_uni_id_100_4: "",
  player3_name_100_4: "",
  player3_nic_100_4: "",
  player3_uni_id_100_4: "",

  player4_name_100_4: "",
  player4_nic_100_4: "",
  player4_uni_id_100_4: "",

  sub_name_100_4: "",
  sub_nic_100_4: "",
  sub_uni_id_100_4: "",

  player1_name_200_4: "",
  player1_phone_200_4: "",
  player1_nic_200_4: "",
  player1_email_200_4: "",
  player1_uni_id_200_4: "",
  player2_name_200_4: "",
  player2_nic_200_4: "",
  player2_uni_id_200_4: "",
  player3_name_200_4: "",
  player3_nic_200_4: "",
  player3_uni_id_200_4: "",

  player4_name_200_4: "",
  player4_nic_200_4: "",
  player4_uni_id_200_4: "",

  sub_name_200_4: "",
  sub_nic_200_4: "",
  sub_uni_id_200_4: "",

  player1_name_100_4_mix: "",
  player1_phone_100_4_mix: "",
  player1_nic_100_4_mix: "",
  player1_email_100_4_mix: "",
  player1_uni_id_100_4_mix: "",
  player2_name_100_4_mix: "",
  player2_nic_100_4_mix: "",
  player2_uni_id_100_4_mix: "",
  player3_name_100_4_mix: "",
  player3_nic_100_4_mix: "",
  player3_uni_id_100_4_mix: "",

  player4_name_100_4_mix: "",
  player4_nic_100_4_mix: "",
  player4_uni_id_100_4_mix: "",

  sub_name_100_4_mix: "",
  sub_nic_100_4_mix: "",
  sub_uni_id_100_4_mix: "",

  player1_name_tug_of_war: "",
  player1_phone_tug_of_war: "",
  player1_nic_tug_of_war: "",
  player1_email_tug_of_war: "",
  player1_uni_id_tug_of_war: "",
  player2_name_tug_of_war: "",
  player2_nic_tug_of_war: "",
  player2_uni_id_tug_of_war: "",
  player3_name_tug_of_war: "",
  player3_nic_tug_of_war: "",
  player3_uni_id_tug_of_war: "",

  player4_name_tug_of_war: "",
  player4_nic_tug_of_war: "",
  player4_uni_id_tug_of_war: "",

  player5_name_tug_of_war: "",
  player5_nic_tug_of_war: "",
  player5_uni_id_tug_of_war: "",

  player6_name_tug_of_war: "",
  player6_nic_tug_of_war: "",
  player6_uni_id_tug_of_war: "",

  player7_name_tug_of_war: "",
  player7_nic_tug_of_war: "",
  player7_uni_id_tug_of_war: "",

  player8_name_tug_of_war: "",
  player8_nic_tug_of_war: "",
  player8_uni_id_tug_of_war: "",

  sub_1_name_tug_of_war: "",
  sub_1_nic_tug_of_war: "",
  sub_1_uni_id_tug_of_war: "",

  sub_2_name_tug_of_war: "",
  sub_2_nic_tug_of_war: "",
  sub_2_uni_id_tug_of_war: "",
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
  G_100_4_mix: boolean;
  G_tug_of_war: boolean;
}

export const groupEvents: GroupEventsInterface = {
  G_100_4: false,
  G_200_4: false,
  G_100_4_mix: false,
  G_tug_of_war: false,
};
