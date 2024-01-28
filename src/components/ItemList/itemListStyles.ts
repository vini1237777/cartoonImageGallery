import { getThemeBackgroundColor, getThemeTextColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";


export const styles = (theme:IObject)=> {


  return {
    container: {
      backgroundColor: getThemeBackgroundColor(theme),
      marginLeft: rem(2),
      marginTop: rem(30),
      maxWidth: "89%",
      display: "flex",
      justifyContent: "center",
      paddingRight: rem(22),
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: rem(20),
      color: getThemeTextColor(theme),
      paddingBottom: rem(10),
      width: "70%",
      borderRadius: rem(10),
      marginTop: rem(20),
      backgroundColor: "#027fff",
    },
    textWrapper: {
      display: "flex",
      justifyContent: "center",
    },
  };
};
