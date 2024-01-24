import {Grid} from "@mui/material";
import { useState } from "react";
import { IObject } from "../../utils/types";
import Image from "./Image";
import { styles } from "./itemCardStyles";

const myGridItemStyle = {
  "&.MuiGrid-item": {
    padding: "10px",
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
