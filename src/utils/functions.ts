import axios from "axios";
import { color } from "./colors";
import { fetchImagesUrl, themes } from "./contants";
import { IObject } from "./types";


export function rem(px: number, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}

 export const getCharacterUrl = (
   {
     page,
     queryString,
     url,
   }: {
     page?: number;
     queryString?: string;
     url?:string;
   } = {
     page: 1,
     queryString: "",
   }
 ) => url || `${fetchImagesUrl}?page=${page}&name=${queryString}`;

export const request = async (url: string) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}

// function to change the text color based on the theme
export const getThemeTextColor = (theme: IObject) =>theme?.palette?.mode === themes.dark ? color.white : color.black;

// function to change the background color based on the theme
export const getThemeBackgroundColor = (theme: IObject) =>
  theme?.palette?.mode === themes.dark ? color.darkGray : color.white;



