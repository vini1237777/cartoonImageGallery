import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme:IObject)=> {

    const { palette: {customColors} } = theme || {};

  return {
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: rem(75),
    },
    text: {
      backgroundColor: customColors?.offWhite,
      borderRadius: rem(10),
      padding: rem(10),
      color: customColors?.black,
    },
  };
};
