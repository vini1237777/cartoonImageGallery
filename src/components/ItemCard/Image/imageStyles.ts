import { themes } from "../../../utils/contants";
import { rem } from "../../../utils/functions";
import { IObject } from "../../../utils/types";


export const styles = (theme: IObject) => {
  return {
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
      color: theme?.palette?.mode === themes.dark ? "white" : "black",
    },
  };
};
