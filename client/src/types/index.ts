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
};

export type BmiLandingDataType = {
  phoneNumber: string;
  height: number;
  weight: number;
};

export type BmiDataType = BmiLandingDataType & {
  name: string;
  lastName: string;
  gender: string;
  abdominalCircumference: number;
  age: number;
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
  className?:string
  height?: number;
  weight?: number;
  bmi?: number;
  linkTo?: string;
  abdominalCircumference?: number;
  name?: string;
  lastName?: string;
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
  dailyFruit?: String;
  dailyVegetable?: String;
  Cereals?: String;
  dailyCereals?: String;
  potatoAndStarchWeekly?: String;
  oliveAndOliveOilDaily?: String;
  nutsDaily?: String;
  dairyDaily?: String;
  beans?: String;
  eggWeekly?: String;
  fishWeekly?: String;
  chickensWeekly?: String;
  redMeatWeekly?: String;
  sugarWeekly?: String;
  alcoholWeekly?: String;
  fermentationWeekly?: String;
  supplements?: String;
  physicalActivity?: String;
  diabetes?: String;
  anemia?: String;
  bloodPressure?: String;
  digestiveProblems?: String;
  selfSafety?: String;
  stroke?: String;
  fattyLiver?: String;
  kidneyProblems?: String;
  thyroid?: String;
  cancer?: boolean;
  Migraine?: boolean;
  otherSickness?: String;
  medicine?: String;
  phoneNumber: string;
  isChecked: boolean;
  createdAtGregorian?: string;
  createdAtJalali?: string;
  files?: FileType[];
  dietBmi?: {
    height?: number;
    weight?: number;
    bmi?: number;
    age:number;
    linkTo?: string;
    abdominalCircumference?: number;
  };
  payment?: FileType;
  _id: string;
}

export interface FileType {
  originalName: string;
  filename: string;
  path: string;
  size: number;
  mimetype: string;
}
export interface CommentType {
  className?: string;
  sender: string;
  body: string;
  receiver?: string;
  createdAtGregorian?: string;
  createdAtJalali?: string;
  isDoctor?: boolean;
  files?: FileType[];
  _id: string;
}

export interface QuickLinkBoxType {
  tittle: string;
  desc: string;
  url: string;
  counter: number;
}

export interface DietStatusType{
  tick?:string
  phoneNumber: string, 
  direction : string
}