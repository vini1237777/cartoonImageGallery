import { padding } from "@mui/system";
import { rem } from "../../utils/functions";

export const styles = {
  container: {
    marginTop: rem(50),
    borderRadius: "10%",
  },
  responsiveImage: {
    width: "100%",
    height: "auto",
  },

  text: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    paddingLeft: rem(5),
    paddingRight: rem(5),
  },
};