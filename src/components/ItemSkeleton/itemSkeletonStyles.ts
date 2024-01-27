import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles = (theme: IObject) => {
  return {
    container: {
     marginTop: rem(10), 
     padding: 0, 
     height: "30%", 
     position:'relative',
     backgroundColor: theme?.palette?.mode === themes.dark ? "black" : "white",
    },
  };
};
