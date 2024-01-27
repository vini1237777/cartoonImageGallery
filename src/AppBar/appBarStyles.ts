import { color } from "../utils/colors";
import { themes } from "../utils/contants";
import { getThemeBackgroundColor, getThemeTextColor, rem } from "../utils/functions";
import { IObject } from "../utils/types";


export const styles = (theme: IObject) => {
  return {
    container: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: getThemeBackgroundColor(theme),
    },
    wrapper: {
      position: "fixed",
      width: "100%",
      backgroundColor:
        theme.palette.mode === themes.dark ? color.grayishBlue : color.white,
      borderBottom: `1px solid ${color.mediumGray}`,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    text: {
      color:  theme.palette.mode === themes.dark ? color.lightBlue : color.mediumBlue 
    },
    icon: { color:  theme.palette.mode === themes.dark ? color.lightBlue : color.mediumBlue },
    buttonWrapper: { display: "flex", gap: rem(10) },
    iconButton: {
      borderRadius: "10px",
      padding: 0,
      width: "40px",
      border: `1px solid lightGray`,

      "&:hover": {
        border: `1px solid ${getThemeTextColor(theme)}`,
      },
    },
  };
};
