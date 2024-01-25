import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { IObject } from '../../utils/types';
import { ItemCard } from '../ItemCard/ItemCard';
import { styles } from './itemListStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemSkeleton from '../ItemSkeleton/ItemSkeleton';
import { rem } from '../../utils/functions';


export const ItemList = ({ items, setPage, hasMore, search }: IObject) => {
  console.log({ hasMore });
  return search === undefined ? (
    <Box style={{ width: "auto", minHeight: "100vh", marginTop: "4rem" }}>
      <Grid container spacing={2} sx={{ ...styles.container }}>
        {items &&
          items.map((item: IObject) => <ItemCard key={item.id} item={item} />)}
      </Grid>
    </Box>
  ) : (
    <Box style={{ width: "auto", minHeight: "100vh", marginTop: "4rem" }}>
      <InfiniteScroll
        dataLength={items.length}
        next={() => {
          setPage((prevPage: number) => {
            return prevPage + 1;
          });
        }}
        hasMore={!!hasMore}
        loader={<ItemSkeleton count={4} />}
        endMessage={
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: rem(20),
              marginTop: rem(10),
            }}
          >
            Yay! You have seen it all
          </Typography>
        }
        scrollThreshold={'90%'}
      >
        <Grid container spacing={2} sx={{ ...styles.container }}>
          {items &&
            items.map((item: IObject) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
   
  
};

