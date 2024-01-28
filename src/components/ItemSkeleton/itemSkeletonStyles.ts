import { themes } from "../../utils/contants";
import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme: IObject) => {

  const {palette:{mode}}=theme;

  return {
    container: {
      borderRadius: "10%",
      marginBottom: rem(15),
      width: { xs: "89%", sm: "89%", md: "86%" },
      backgroundColor: getThemeBackgroundColor(theme),
      marginTop: rem(30),
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    skeleton: {
      height: {
        xs: 150,
        sm: 160,
        md: 220,
        lg: 290,
      },
    },
    textSkeleton: {
      height: {
        md: 20,
      },
      display: mode === themes.light ? "none" : "",
    },
  };
};
