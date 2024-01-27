import { getThemeBackgroundColor, getThemeTextColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {

 return {
   container: {
     paddingLeft: rem(20),
     paddingRight: rem(20),
     backgroundColor: getThemeBackgroundColor(theme),
     color: getThemeTextColor(theme),
     paddingTop: rem(20)
   },

   switch: {
     display: "flex",
     justifyContent: "flex-end",
   },
 };
};
