import { color } from "../../utils/colors";
import { themes } from "../../utils/contants";
import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme:IObject)=> {

  const {palette:mode}=theme;

 return {
   container: {
     borderRadius: "10%",
     width: "90%",
   },

   card: {
     boxShadow:
       mode === themes.dark ? `-3px 6px 3px 5px ${color.slateBlack}` : "",
     paddingBottom: rem(10),
     width: "100%",
     backgroundColor: getThemeBackgroundColor(theme),
     transition: "transform 0.3s",
     "&:hover": {
       transform: "scale(1.05)",
     },
   },

   text: {
     overflow: "hidden",
     whiteSpace: "nowrap",
     textOverflow: "ellipsis",
     paddingLeft: rem(13),
     paddingRight: rem(13),
     paddingTop: rem(10),
   },
   textSkeleton:{
    padding:rem(8),
   },
 };
};