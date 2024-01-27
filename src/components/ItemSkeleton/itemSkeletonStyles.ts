import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme: IObject) => {
  return {
    container: {
      borderRadius: "10%",
      marginBottom: rem(15),
      width: { xs: "89%", sm: "89%", md: "87%" },
      backgroundColor: getThemeBackgroundColor(theme),
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
};
