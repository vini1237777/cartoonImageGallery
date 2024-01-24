import {Card, Grid, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { rem } from "../../utils/functions";
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

  const handleImageLoaded = (id: string) => {
    setLoaded({ ...loaded, [id]: true });
  };

  const handleImageError = (id: string) => {
    setLoaded({ ...loaded, [id]: false });
  };

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
