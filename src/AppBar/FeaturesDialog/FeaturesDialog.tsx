import React from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography, useTheme } from '@mui/material';
import { dialogTitle, featuresContent } from '../../utils/contants';
import { IObject } from '../../utils/types';
import {styles as featureStyles} from'./featureStyles';
import CloseIcon from '@mui/icons-material/Close';

const FeaturesModal = ({isMenuOpen, handleMenuClose}: IObject) => {
  const theme = useTheme();
  const styles = featureStyles(theme);
  return (
    <Dialog open={isMenuOpen} onClose={handleMenuClose}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {dialogTitle}
        </DialogTitle>
        <IconButton onClick={handleMenuClose} sx={{ ...styles.closeIcon }}>
        <CloseIcon />
        </IconButton>
        <DialogContent sx={{ ...styles.wrapper }}>
          {featuresContent.map((feature, index) => (
            <Box sx={{ marginBottom: 3 }} key={feature.title}>
              <Typography variant="h6" sx={{ ...styles.title }}>
                {feature.title}
              </Typography>
              {typeof feature.description === "string" ? (
                <Typography sx={{ ...styles.content }} variant="body1">
                  {feature.description}
                </Typography>
              ) : (
                feature.description.map((item, idx) => (
                  <Box key={idx} sx={{ marginTop: 1 }}>
                    <Typography variant="subtitle1" sx={{ ...styles.heading }}>
                      {item.heading}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ ...styles.content }}>
                      {item.content}
                    </Typography>
                  </Box>
                ))
              )}
            </Box>
          ))}
        </DialogContent>
    </Dialog>
  );};

export default FeaturesModal;
