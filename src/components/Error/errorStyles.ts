import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";

export const styles =(theme:IObject)=> {

    const { palette: {customColors} } = theme || {};

  return {
    container: {
      borderRadius: '50%',
      padding: rem(10),
      position: "sticky",
      top: 150,
      width:'100%',
      display: 'flex',
      justifyContent: 'center'
    },
    text: {
      backgroundColor: customColors?.offWhite,
      borderRadius: rem(10),
      padding: rem(10),
      marginTop: rem(10),
      color: customColors?.black,
      minWidth: "300px",
      maxWidth: "80%",
    },
  };
};
