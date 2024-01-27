import { getThemeBackgroundColor, rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme: IObject) => {
  return {
    container: {
     marginTop: rem(10), 
     padding: 0, 
     backgroundColor: getThemeBackgroundColor(theme)
    },
  };
};
