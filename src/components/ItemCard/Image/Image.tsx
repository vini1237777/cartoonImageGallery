import React from 'react'
import { Skeleton, useTheme } from '@mui/material';
import { IObject } from '../../../utils/types';
import { styles as imageStyles } from "./imageStyles";

const Image = ({ item, loaded, setLoaded}: IObject) => {


    const theme = useTheme();
    const styles = imageStyles(theme);

  return (
    <>
      {!loaded && loaded !== false && (
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{
           ...styles.skeleton
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
