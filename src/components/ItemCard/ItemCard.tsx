import {Box, Card, Grid, Skeleton, Typography, useTheme} from "@mui/material";
import { useState } from "react";
import { IObject } from "../../utils/types";
import Image from "./Image/Image";
import { styles as itemCardStyles } from "./itemCardStyles";

export const ItemCard = ({ item }: IObject) => {

  const [loaded, setLoaded] = useState<boolean | null>(null);

  const theme = useTheme();
  const styles = itemCardStyles(theme);

  return (
    <Grid item xs={6} sm={4} md={4} lg={3} sx={{ ...styles.container }}>
      <Card
        sx={{
          ...styles.card,
        }}
      >
        <Image item={item} loaded={loaded} setLoaded={setLoaded} />
        {loaded ? (
          <Typography
            align="center"
            sx={{ ...styles.text, fontWeight: "bold" }}
          >
            {item.name}
          </Typography>
        ) : (
          <Box sx={{ ...styles.textSkeleton }}>
            <Skeleton variant="text" />
          </Box>
        )}
      </Card>
    </Grid>
  );
};
