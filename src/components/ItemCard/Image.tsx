import React from 'react'
import { Card, Skeleton, Typography } from '@mui/material';
import { rem } from '../../utils/functions';
import { IObject } from '../../utils/types';
import { styles } from './itemCardStyles';

const Image = ({ item, loading , setLoaded}: IObject) => {
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        paddingBottom: rem(20),
        width: "100%",
      }}
    >
      {!loading ? (
        <img
          src={item.image}
          alt={item.name}
          style={{ ...styles.responsiveImage }}
          loading="lazy"
          onLoad={() => setLoaded(false)}
          onError={() => setLoaded(true)}
        />
      ) : (
        <Skeleton variant="rectangular" width="100%" height={150} />
      )}
      <Typography
        align="center"
        sx={{ ...styles.text, color: "gray", fontWeight: "bold" }}
      >
        {item.name}
      </Typography>
    </Card>
  );
};

export default Image
