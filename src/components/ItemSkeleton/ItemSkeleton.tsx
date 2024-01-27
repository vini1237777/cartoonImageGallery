import React from "react";
import { Grid, Skeleton, Card, CardContent, useTheme } from "@mui/material";
import { IObject } from "../../utils/types";
import {styles as itemSkeletonStyles} from './itemSkeletonStyles';

const ItemSkeleton = ({ count}: IObject) => {
    const theme = useTheme();
    const styles = itemSkeletonStyles(theme);
  return (
    <>
      <Grid container spacing={1} sx={{ ...styles.container }}>
        {Array.from(new Array(count)).map((_, index) => (
          <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
            <Card>
              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{
                  height: {
                    xs: 40,
                    sm: 150,
                    md: 200,
                  },
                }}
              />
              <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ItemSkeleton;
