import { color } from "../../utils/colors";
import {  rem } from "../../utils/functions";

export const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: color.white,
    paddingBottom: rem(30),
  },
  container_dark: {
    backgroundColor:color.black,
  },
  textfield: {
    width: "86%",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    backgroundColor: color?.offWhite,
  },
  textfield_dark: {
    backgroundColor: color?.slateBlack,
  },
};
