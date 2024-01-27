import React, { useState } from 'react'
import { Skeleton } from '@mui/material';
import { IObject } from '../../../utils/types';
import { styles } from './imageStyles';

const Image = ({ item}: IObject) => {

  const [loaded, setLoaded] = useState<boolean | null>(null);

  return (
    <>
      {!loaded && loaded !== false && (
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{
            position: "relative",
            zIndex: 2,
            height: {
              xs: 130,
              sm: 150,
              md: 300,
            },
          }}
        />
      )}
      <img
        src={item.image}
        alt={item.name}
        style={{ ...styles.responsiveImage }}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </>
  );
};

export default Image
