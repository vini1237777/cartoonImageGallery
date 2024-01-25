import {Grid} from "@mui/material";
import { useState } from "react";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";
import Image from "./Image/Image";
import { styles } from "./itemCardStyles";

const myGridItemStyle = {
  "&.MuiGrid-item": {
    paddingLeft: rem(20),
    paddingRight: rem(20),
    paddingTop: 0,
  },
};

export const ItemCard = ({ item }: IObject) => {

  const [loaded, setLoaded] = useState<IObject>({
    loaded : null
  });

  return (
    <Grid
      container
      item
      xs={6}
      sm={4}
      md={4}
      lg={3}
      sx={{ ...myGridItemStyle, ...styles.container }}
    >
    <Image item={item} loaded={loaded} setLoaded={setLoaded}/>
    </Grid>
  );
};
