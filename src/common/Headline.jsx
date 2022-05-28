import { Box, Grid } from '@mui/material';
import React from 'react';

const Headline = (props) => {
 return (
  
  <Grid container style={{justifyContent:'center',
  borderBottom:'3px solid green',
  marginTop:'30px'}}>


  <Box style={{
   fontWeight:'bold',
   fontSize:'20px',
   textTransform:'uppercase',
   color:'blue',
   marginRight:'10px'
  }}>{props.title}</Box>

<Box style={{
   fontWeight:'bold',
   fontSize:'20px',
   textTransform:'uppercase',
   color:'red',
   marginRight:'10px'
  }}>{props.subtitle}</Box>

  </Grid>
 );
};

export default Headline;