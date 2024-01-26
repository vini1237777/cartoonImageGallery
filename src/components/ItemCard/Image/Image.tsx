import React, { useState } from 'react'
import { Skeleton, useTheme } from '@mui/material';
import { IObject } from '../../../utils/types';
import { styles as imageStyles } from './imageStyles';



const Image = ({ item}: IObject) => {

  const [loaded, setLoaded] = useState<boolean | null>(null);
   const theme = useTheme();
   const styles = imageStyles(theme);

  return (
    <>
      {!loaded && loaded !== false && 
        <Skeleton variant="rectangular" width="100%" height={300} sx={{
          position:'relative',
          zIndex:2,
        }} />
       } 
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
