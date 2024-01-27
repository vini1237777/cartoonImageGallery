import React from 'react'
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { IObject } from '../../utils/types';
import { ItemCard } from '../ItemCard/ItemCard';
import { styles as listStyles } from './itemListStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemSkeleton from '../ItemSkeleton/ItemSkeleton';


export const ItemList = ({ items, loadMore, hasMore }: IObject) => {
  const theme = useTheme();
  const styles = listStyles(theme);
 
    return (
      items?.length && (
        <InfiniteScroll
          dataLength={items.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<ItemSkeleton count={4} />}
          endMessage={
            <Box sx={{ ...styles.textWrapper }}>
              <Typography sx={{ ...styles.text }}>
                Yay! You have seen it all
              </Typography>
            </Box>
          }
          scrollThreshold={"60%"}
        >
          <Box sx={{ ...styles.wrapper }}>
            <Grid container spacing={3} sx={{ ...styles.container }}>
              {items &&
                items.map((item: IObject) => (
                  <ItemCard key={item.id} item={item} />
                ))}
            </Grid>
          </Box>
        </InfiniteScroll>
      )
    );
  // );
};

