import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =  {

    container: {
      marginTop: rem(50),
      borderRadius: "10%",
    },
    responsiveImage: {
      width: "100%",
      height: "auto",
    },

    text: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      paddingLeft: rem(13),
      paddingRight: rem(13),
      paddingTop: rem(10),
      
    },
};