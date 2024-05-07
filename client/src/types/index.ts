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
  firstName: string;
  lastName: string;
  gender: string;
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

export type IdentifyUserType = {
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
  questionOne: string;
};
