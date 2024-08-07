import { ReactElement } from "react";

export type NavElementType = {
  text: string;
  link: string;
};

export type HeroButtonType = {
  text: string;
};

export type TextBoxType = {
  id: any;
  title: string;
  bodyText: string;
  img: any | ReactElement;
  url?: string | any;
};

export type BmiLandingDataType = {
  phoneNumber: string;
  height: number;
  weight: number;
};

export type BmiDataType = BmiLandingDataType & {
  name: string;
  lastName: string;
  city: string;
  gender: string;
  abdominalCircumference: number;
  age: number;
  autoIncrementId?: number;
  hipcircumference: number;
};

export type SignUpDataType = {
  username: string;
  password: string;
  phoneNumber: string;
  email: string;
};

export type LoginDataType = {
  phoneNumber: string;
};

export type IdentifyCodeType = {
  codeOne: string;
  codeTwo: string;
  codeThree: string;
  codeFour: string;
  codeFive: string;
};

export type LoginFormType = {
  type?: string;
};

export type AdminDataType = {
  username: string;
  password: string;
};

export type MediterranealDataType = {
  //??????
  questionOne: string;
};

export interface BmiType {
  className?: string;
  height?: number;
  weight?: number;
  bmi?: number;
  linkTo: string;
  abdominalCircumference?: number;
  hipcircumference?: number;
  whr?: number;
  autoIncrementId?: number;
  name?: string;
  lastName?: string;
  city?: string;
  phoneNumber?: string;
  gender?: string;
  age?: number;
  joinedAtGregorian?: string;
  joinedAtJalali?: string;
}

export type WelcomeBoxType = {
  doctorName: string;
};

export interface MediterraneanFormType {
  dailyFruit?: string;
  dailyVegetable?: string;
  Cereals?: string;
  dailyCereals?: string;
  potatoAndStarchWeekly?: string;
  oliveAndOliveOilDaily?: string;
  nutsDaily?: string;
  dairyDaily?: string;
  beans?: string;
  eggWeekly?: string;
  fishWeekly?: string;
  chickensWeekly?: string;
  redMeatWeekly?: string;
  sugarWeekly?: string;
  alcoholWeekly?: string;
  fermentationWeekly?: string;
  supplements: string | [];
  appetite: string,
  physicalActivityHours: string,
  sport: string,
  preferredDrink: string,
  physicalActivity?: string;
  diabetes?: string;
  anemia?: string;
  bloodPressure?: string;
  digestiveProblems?: string;
  selfSafety?: string;
  stroke?: string;
  fattyLiver?: string;
  kidneyProblems?: string;
  thyroid?: string;
  cancer?: boolean;
  Migraine?: boolean;
  otherSickness?: string;
  medicine?: string;
  foodAllergies: string;
  pregnancyWeeks: string;
  breastfeeding: string;
  weightBeforePregnancy: string;
  phoneNumber: string;
  isChecked: boolean;
  createdAtGregorian?: string;
  createdAtJalali?: string;
  files?: FileType[];
  dietBmi?: {
    height?: number;
    weight?: number;
    bmi?: number;
    age: number;
    linkTo?: string;
    abdominalCircumference?: number;
    whr: number;
    hipcircumference: number;
  };
  payment?: FileType;
  _id: string;
}


export type ModalMediterraneanFormType = {
  className: string;
  isShow: Function;
  show: boolean;
  dailyFruit?: string;
  dailyVegetable?: string;
  Cereals?: string;
  dailyCereals?: string;
  potatoAndStarchWeekly?: string;
  oliveAndOliveOilDaily?: string;
  nutsDaily?: string;
  dairyDaily?: string;
  beans?: string;
  eggWeekly?: string;
  fishWeekly?: string;
  chickensWeekly?: string;
  redMeatWeekly?: string;
  sugarWeekly?: string;
  alcoholWeekly?: string;
  fermentationWeekly?: string;
  supplements: string | [];
  appetite: string,
  physicalActivityHours: string,
  sport: string,
  preferredDrink: string,
  physicalActivity?: string;
  diabetes?: string;
  anemia?: string;
  bloodPressure?: string;
  digestiveProblems?: string;
  selfSafety?: string;
  stroke?: string;
  fattyLiver?: string;
  kidneyProblems?: string;
  thyroid?: string;
  cancer?: boolean;
  Migraine?: boolean;
  otherSickness?: string;
  medicine?: string;
  foodAllergies: string;
  pregnancyWeeks: string;
  breastfeeding: string;
  weightBeforePregnancy: string;
  phoneNumber: string;
  isChecked: boolean;
  createdAtGregorian?: string;
  createdAtJalali?: string;
  dietBmi?: {
    height?: number;
    weight?: number;
    bmi?: number;
    age: number;
    linkTo?: string;
    abdominalCircumference?: number;
    whr: number;
    hipcircumference: number;
  };
  _id: string;
};

export interface FileType {
  originalName: string;
  filename: string;
  path: string;
  size: number;
  mimetype: string;
}
export interface CommentType {
  className?: string;
  sender?: string;
  body: string;
  receiver?: string;
  createdAtGregorian?: string;
  createdAtJalali?: string;
  isDoctor?: boolean;
  files?: FileType[];
  _id: string;
}

export interface CommentTypeHook {
  sender: string;
  body: string;
  receiver: string;
  files?: FileType[];
}
export interface QuickLinkBoxType {
  tittle: string;
  desc: string;
  url: string;
  counter: number;
}

export interface DietStatusType {
  tick?: string;
  phoneNumber: string;
  direction: string;
}

export interface CustomCardType {
  title: string;
  oldPrice: string;
  newPrice: string;
  imageUrl: string;
  desc: string;
}
