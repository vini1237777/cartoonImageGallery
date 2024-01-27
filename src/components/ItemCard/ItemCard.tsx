import {Card, Grid, Typography} from "@mui/material";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";
import Image from "./Image/Image";
import { styles } from "./itemCardStyles";

export const myGridItemStyle = {
  "&.MuiGrid-item": {
    paddingLeft: rem(10),
    paddingRight: rem(10),
  },
};

export const ItemCard = ({ item }: IObject) => {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={4}
      lg={3}
      sx={{ ...myGridItemStyle, ...styles.container }}
    >
      <Card
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          paddingBottom: rem(10),
          width: "100%",
        }}
      >
        <Image item={item} />
        <Typography align="center" sx={{ ...styles.text, fontWeight: "bold" }}>
          {item.name}
        </Typography>
      </Card>
    </Grid>
  );
};
