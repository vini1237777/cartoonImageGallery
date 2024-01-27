import { getThemeBackgroundColor, getThemeTextColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {

 return {
   container: {
     paddingLeft: rem(30),
     paddingRight: rem(30),
     backgroundColor: getThemeBackgroundColor(theme),
     color: getThemeTextColor(theme)
   },
   switch: {
     display: "flex",
     justifyContent: "flex-end",
   },
   banner: {
     backgroundColor: getThemeBackgroundColor(theme),
     position: "sticky",
     top: 0,
     zIndex: 3,
   },
 };
};
