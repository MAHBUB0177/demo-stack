import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { domain } from '../env';
import { Grid } from '@material-ui/core';
import Headline from '../common/Headline'
import SingleProduct from '../common/SingleProduct';
import AllProducts from "../common/AllProducts";

const MostViewProduct = () => {
 const [products, setProducts] = useState(null);
 const [cart, setCart] = useState([])

  const countProduct = (product) => {
    console.log('minnnnn allll okkk',product)
    const newCart = [...cart, product];
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(cart))

   

  }

 console.log(products,'=======')
  useEffect(()=>{
    const getmostviewsproducts = async()=>{
      await axios({
        url:`${domain}/api/mostviewproducts/`,
        method:'GET'
      }).then(response=>{
        setProducts(response.data)
        console.log("MostViewProduct===",response.data);
      })
    }
    getmostviewsproducts()

  },[])
 
 return (
  <Grid container spacing={2}   >
      <Headline title="Most Views" subtitle="Products" />
      {
        products?.map((item,i)=><Grid key={i} md={2} sm={4} item>
          <SingleProduct product={item?.product} countProduct={countProduct}/>
        </Grid>)
      }
    </Grid>
 );
};

export default MostViewProduct;