import React from "react";
import { Grid, Skeleton, Card, CardContent } from "@mui/material";
import { IObject } from "../../utils/types";
import { rem } from "../../utils/functions";

const ItemSkeleton = ({ count}: IObject) => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: rem(10), padding: 0, height: "30%", position:'relative' }}
      >
        {Array.from(new Array(count)).map((_, index) => (
          <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
            <Card>
              <Skeleton
                variant="rectangular"
                width="100%"
                sx={{
                  height: {
                    xs: 130,
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
