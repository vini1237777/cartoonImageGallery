import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {
return {
  container: {
    paddingBottom: "20px",
    paddingTop: rem(20),
  },
  text: {
    fontWeight: "bold",
    color: theme?.palette?.mode === themes.dark ? "white" : "black",
    fontSize: {
      xs: "20px",
      sm: "35px",
      md: "40px",
    },
  },
};
}