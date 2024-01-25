import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme : IObject)=> {
return {
  container: {
    marginBottom: rem(20),
    marginTop: rem(10),
  },
  text: {
    fontSize: "40px",
    fontWeight: "bold",
    color: theme?.palette?.mode === themes.dark ? "white" : "black",
  },
};
}