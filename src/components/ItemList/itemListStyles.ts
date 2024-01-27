import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";


export const styles = (theme:IObject)=> {

  const { palette: {customColors} } = theme || {};

  return {
    container: {
      backgroundColor: getThemeBackgroundColor(theme),
      marginLeft: rem(2),
      marginTop: rem(70),
      maxWidth:'89%',
      display: 'flex',
      justifyContent:'center',
      paddingRight:rem(22)
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
      marginTop: rem(20)
    },
    textWrapper: {
      display: "flex",
      justifyContent: "center",
    },
  };
};
