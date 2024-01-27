import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme: IObject) => {
  return {
    container: {
      marginTop: rem(10),
      backgroundColor: getThemeBackgroundColor(theme),
      width: "95%",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
};
