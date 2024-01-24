import {Card, Grid, Typography } from "@mui/material";
import { rem } from "../../utils/functions";
import { IObject } from "../../utils/types";
import { styles } from "./itemCardStyles";

const myGridItemStyle = {
  "&.MuiGrid-item": {
    padding: "10px",
  },
};

export const ItemCard = ({ item }: IObject) => {
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
      <Card
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          paddingBottom: rem(20),
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ ...styles.responsiveImage }}
          loading="lazy"
        />
        <Typography align="center" sx={{ color: "gray", fontWeight: "bold" }}>
          {item.name}
        </Typography>
      </Card>
    </Grid>
  );
};
