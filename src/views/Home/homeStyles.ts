import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {

 return {
   container: {
     padding: rem(30),
     width: "auto",
     height: "100vh",
     backgroundColor: theme?.palette?.mode === themes.dark ? "black" : "white",
     color: theme?.palette?.mode === themes.dark ? "black" : "white",
   },
   switch:{
    display:'flex',
    justifyContent:"flex-end"
   }
 };
};
