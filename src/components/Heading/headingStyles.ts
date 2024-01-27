import { getThemeTextColor} from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {
  
  return {
    text: {
      fontWeight: "bold",
      color: getThemeTextColor(theme),
      fontSize: {
        xs: "13px",
        sm: "22px",
        md: "22px",
      },
      fontFamily: "'Comic Neue', cursive",
    },
  };
}