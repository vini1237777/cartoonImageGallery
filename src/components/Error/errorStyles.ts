import { themes } from "../../utils/contants";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme:IObject)=> {
  return {container: {
    borderRadius: rem(10),
    padding: rem(10),
    position:'sticky',
    top:150,
    height:theme.palette.mode===themes.dark?  '69vh' :''
  },
  text: {
    backgroundColor: "#F8F8FF",
    borderRadius: rem(10),
    padding: rem(10),
  },}
};
