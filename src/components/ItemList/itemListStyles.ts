import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";


export const styles = (theme:IObject)=> {

  const { palette: {customColors} } = theme || {};

  return {
    container: {
      width: {xs:'89%',sm:'89%',md:'87%',},
      backgroundColor: getThemeBackgroundColor(theme),
      marginLeft:rem(2)
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
      color: customColors?.black,
      backgroundColor: customColors?.offWhite,
      paddingBottom: rem(10),
      width: "70%",
      borderRadius: rem(10),
    },
    textWrapper: {
      display: "flex",
      justifyContent: "center",
    },
  };
};
