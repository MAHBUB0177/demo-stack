import DoubleArrowSharpIcon from "@material-ui/icons/DoubleArrowSharp";
import { Button, Grid } from '@mui/material';
import { typography } from '@mui/system';
import React, {useState,useEffect}from 'react';
import { Link } from "react-router-dom";
import ProductDetails from "../page/ProductDetails";
import SingleProduct from './SingleProduct';

const AllProducts = ({ products, showall = false,category,categoryid }) => {

  const [cart, setCart] = useState([])
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // }, [cart]);
  const countProduct = (product) => {
    console.log('minnnnn allll okkk',product)
    const newCart = [...cart, product];
    setCart(newCart)
    // e.preventDefault();
    localStorage.setItem("cart", JSON.stringify(cart))
    // e.preventDefault();

   

  }

  return (
    <Grid container spacing={2} style={{marginTop:'15px'}}>

      {products?.map((item, i) => (
        <>
          {
            showall ? (<Grid key={i} md={2} sm={4} item>
              <SingleProduct product={item} key={i}
              countProduct={countProduct}/>

           
            </Grid>) : (
              <>
                {
                  i <= 10 && (<Grid key={i} md={2} sm={4} item>
                    <SingleProduct product={item} key={i}
                     countProduct={countProduct}/>
                  </Grid>)
                }
                

              </>
            )
          }

        </>

      ))}
   

    
{products?.length > 11 && !showall && (
        <Grid
          item
          md={2}
          sm={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         
         <Link to={`/category-${category}-${categoryid}`} style={{textDecoration:'none'}} >
            <Button >
              <typography>See More</typography>
              <DoubleArrowSharpIcon />
            </Button>
            </Link>
        </Grid>
      )}



    </Grid>
  );
};

export default AllProducts;