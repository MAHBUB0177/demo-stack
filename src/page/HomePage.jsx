import { Container } from '@mui/material';
import React from 'react';
import BrandsName from '../components/BrandsName';
import CategoryProducts from '../components/CategoryProducts';
import CategorysName from '../components/CategorysName';
import MostViewProduct from '../components/MostViewProduct';
import NabBar from '../components/NabBar';
import Sliders from '../components/Slider';
import TrandingProducts from '../components/TrandingProducts';

const HomePage = () => {
 return (
  <div>
 

   <Container>
   {/* <Slider/> */}
   <Sliders />
  <TrandingProducts />
  <CategorysName />
  <MostViewProduct/>
  <CategoryProducts />
  <BrandsName/>

   </Container>
   
  </div>
 );
};

export default HomePage;