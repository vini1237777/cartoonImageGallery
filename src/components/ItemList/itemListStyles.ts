import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";


export const styles = (theme:IObject)=> {
  return {
    container: {
      marginLeft: 0,
      width: "100%",
      backgroundColor: theme?.palette?.mode === themes.dark ? "black" : "white",
      paddingBottom:rem(80)
    },
  };
};
