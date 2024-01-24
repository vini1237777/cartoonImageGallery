import React from 'react'
import { Grid } from '@mui/material';
import { IObject } from '../../utils/types';
import { ItemCard } from '../ItemCard/ItemCard';
import { styles } from './itemListStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemSkeleton from '../ItemSkeleton/ItemSkeleton';


export const ItemList = ({ items, fetchData, hasMore }: IObject) => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<ItemSkeleton />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container spacing={3} sx={{ ...styles.container }}>
        {items &&
          items.map((item: IObject) => <ItemCard key={item.id} item={item} />)}
      </Grid>
    </InfiniteScroll>
  );
};

