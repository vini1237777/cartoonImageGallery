import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme: IObject) => {
  return {
    container: {
      borderRadius: "10%",
      marginBottom: rem(15),
      width:'90%',
      backgroundColor: getThemeBackgroundColor(theme),
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
};
