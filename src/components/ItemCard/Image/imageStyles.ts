import { themes } from "../../../utils/contants";
import { rem } from "../../../utils/functions";
import { IObject } from "../../../utils/types";

export const styles = (theme:IObject)=>{

  const {palette:{mode}}=theme;

   return {
     responsiveImage: {
       width: "100%",
       height: "auto",
       borderBottomRightRadius: mode === themes.light ? rem(20) : "",
       borderBottomLeftRadius: mode === themes.light ? rem(20) : "",
     },
     skeleton: {
       position: "relative",
       zIndex: 2,
       height: {
         xs: 140,
         sm: 160,
         md: 310,
       },
       padding: rem(10),
     },
   };
};
