import { getThemeTextColor} from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {
  
  return {
    text: {
      fontWeight: "bold",
      color: getThemeTextColor(theme),
    },
  };
}