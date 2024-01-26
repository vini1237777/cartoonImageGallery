import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {

 return {
   container: {
     paddingLeft: rem(30),
     paddingRight: rem(30),
     backgroundColor: theme?.palette?.mode === themes.dark ? "black" : "white",
     color: theme?.palette?.mode === themes.dark ? "black" : "white",
    },
   switch: {
     display: "flex",
     justifyContent: "flex-end",
   },
   banner: {
     backgroundColor: theme?.palette?.mode === themes.dark ? "black" : "white",
     position: "sticky",
     top: 0,
     zIndex: 3,
   },
   errorWrapper: {
     backgroundColor: theme?.palette?.mode === themes.dark ? "black" : "white",
     height:'75vh',
     overflow:'hidden',
   },
 };
};
