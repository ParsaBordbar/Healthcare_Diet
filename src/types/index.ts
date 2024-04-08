import { ReactElement } from "react";

export interface NavElementType{
   text: string,
   link: string,
}

export interface HeroButtonType{
   text:string,
}

export interface TextBoxType{
   id:any
   title:string,
   bodyText:string,
   img: any| ReactElement
}