import axios from "axios";
import { fetchImagesUrl } from "./contants";


export function rem(px: number, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}

 export const getCharacterUrl = ({
   page,
   queryString,
 }: {
   page?: number;
   queryString?: string;
 }  = {
   page :1,
   queryString:'',
 }  ) => `${fetchImagesUrl}?page=${page}&name=${queryString}`;

export const request = async (url: string) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    throw err;
  }
}