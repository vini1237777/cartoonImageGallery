import React from "react";
import { Grid, Skeleton, Card, CardContent } from "@mui/material";
import { IObject } from "../../utils/types";
import { rem } from "../../utils/functions";

const ItemSkeleton = ({ count}: IObject) => {
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: rem(50), padding: 0 }}>
        {Array.from(new Array(count)).map((_, index) => (
          <Grid item xs={6} sm={6} md={6} lg={4}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={100} />
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
