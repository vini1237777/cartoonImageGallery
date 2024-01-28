import React from "react";
import { Grid, Skeleton, Card, CardContent, useTheme, Box } from "@mui/material";
import { IObject } from "../../utils/types";
import {styles as itemSkeletonStyles} from './itemSkeletonStyles';

const ItemSkeleton = ({ count}: IObject) => {
    const theme = useTheme();
    const styles = itemSkeletonStyles(theme);
  return (
    <Box sx={{ ...styles.wrapper }}>
      <Grid container spacing={3} sx={{ ...styles.container }}>
        {Array.from(new Array(count)).map((_, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            key={index}
          >
            <Card>
              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{
                  ...styles.skeleton
                }}
              />
              <CardContent>
                <Skeleton variant="text"  />
                <Skeleton
                  variant="text"
                  width="60%"
                  sx={{
                    ...styles.textSkeleton
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemSkeleton;
