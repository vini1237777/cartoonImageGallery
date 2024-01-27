import { color } from "../../utils/colors";
import { themes } from "../../utils/contants";
import { getThemeTextColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";



export const styles = (theme: IObject) => {
  
  return {
    wrapper: {
      width: { xs: "90%", sm: 400 },
      boxShadow: 24,
      padding: rem(30),
      height: { xs: "70%", sm: "70%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor:
        theme.palette.mode === themes.dark ? color.darkGray : color.white,
    },
    title: {
      color: getThemeTextColor(theme),
      fontWeight: "bold",
      textDecoration: "underline",
      lineSpace: "50px",
    },
    heading: {
      color: getThemeTextColor(theme),
      fontWeight: "bold",
    },
    content: {
      color: getThemeTextColor(theme),
    },
    closeIcon: {
      color: getThemeTextColor(theme),
      marginBottom: rem(20),
      position: "absolute",
      right: 8,
      top: 10,
    },
  };
};
