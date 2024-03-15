import { ReactElement } from "react";

export interface NavElementType{
   text: string,
   link: string,
}

export interface HeroButtonType{
   text:string,
}

export interface TextBoxType{
   tittle:string,
   bodyText:string,
   img: any| ReactElement
}