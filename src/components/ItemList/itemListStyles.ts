import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";


export const styles = (theme:IObject)=> {

  const { palette: {customColors} } = theme || {};

  return {
    container: {
      width: "90%",
      backgroundColor: getThemeBackgroundColor(theme),
      paddingBottom: rem(80),
      paddingLeft: rem(20),
      paddingRight: rem(20),
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
      marginTop: rem(60),
      color: customColors?.black,
      backgroundColor: customColors?.offWhite,
      paddingBottom: rem(10),
      paddingTop: rem(10),
      width: "70%",
      borderRadius: rem(10),
    },
    textWrapper: {
      display: "flex",
      justifyContent: "center",
    },
  };
};
