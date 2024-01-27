import { rem } from "../../utils/functions";

export const styles =  {

    container: {
      borderRadius: "10%",
      width:'90%'
    },

    text: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      paddingLeft: rem(13),
      paddingRight: rem(13),
      paddingTop: rem(10),
    },
};