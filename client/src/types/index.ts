import { ReactElement } from "react";

export type NavElementType = {
   text: string,
   link: string,
}

export type HeroButtonType = {
   text:string,
}

export type TextBoxType = {
   id:any
   title:string,
   bodyText:string,
   img: any| ReactElement
}

export type BmiDataType = {
   firstName:string
   lastName:string
   phoneNumber:string
   gender:string
   age:number
   weight:number
}