import React from 'react'
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { IObject } from '../../utils/types';
import { ItemCard } from '../ItemCard/ItemCard';
import { styles as listStyles } from './itemListStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemSkeleton from '../ItemSkeleton/ItemSkeleton';
import { rem } from '../../utils/functions';


export const ItemList = ({ items, loadMore, hasMore, search }: IObject) => {


  const theme = useTheme();
  const styles = listStyles(theme);

  return search === undefined ? (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} sx={{ ...styles.container }}>
        {items &&
          items.map((item: IObject) => <ItemCard key={item.id} item={item} />)}
      </Grid>
    </Box>
  ) : (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
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
      scrollThreshold={"50%"}
    >
      <Box sx={{minHeight: "100vh" }}>
        <Grid container spacing={2} sx={{ ...styles.container }}>
          {items &&
            items.map((item: IObject) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </Grid>
      </Box>
    </InfiniteScroll>
  );
   
  
};

