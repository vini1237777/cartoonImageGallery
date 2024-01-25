import React from 'react'
import { Card, Skeleton, Typography, useTheme } from '@mui/material';
import { rem } from '../../../utils/functions';
import { IObject } from '../../../utils/types';
import { styles as imageStyles } from './imageStyles';



const Image = ({ item, loaded , setLoaded}: IObject) => {

   const theme = useTheme();
   const styles = imageStyles(theme);

  return (
    <Card
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        paddingBottom: rem(20),
        width: "100%",
      }}
    >
      {loaded ? (
        <img
          src={item.image}
          alt={item.name}
          style={{ ...styles.responsiveImage }}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      ) : (
        <Skeleton variant="rectangular" width="100%" height={'auto'} />
      )}
      <Typography
        align="center"
        sx={{ ...styles.text, fontWeight: "bold" }}
      >
        {item.name}
      </Typography>
    </Card>
  );
};

export default Image
