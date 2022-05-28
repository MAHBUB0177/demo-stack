import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useEffect,useState } from "react";
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from 'react-router-dom';
import ProductDetails from "../page/ProductDetails";
import Swal from 'sweetalert2'
// import { useStateValue } from '../state/stateProvider';
import {useStateValue} from '../state/stateProvider'


const SingleProduct = (props) => {

  const [{ profile, }, dispatch] = useStateValue();
  const [value, setValue] = React.useState(2);


 
  // const[cart,setCart]=useState([])
  // console.log('this is cart',cart)
 

  //  const addToCart =(product)=>{
  //    console.log("mahbub alam",product)
  //    const newCart=[...cart,product]
  //    console.log(newCart,'this is list of cart product')
  //    setCart(newCart)
  //   //  window.location.reload(false);
  //    dispatch({type:'ADD_TO_CART',
  //    pagereload:cart
  //  })

  //    Swal.fire({
  //     icon: 'success',
  //     title: 'Thank you',
  //     text: 'Your product Is Added SuccessFully To The Cart!!!!',
  //     timer: 1200
      
  //   })
  //  }

 




 
 
 
  return (

    
    <Card>
      <Link to={`/product-${props.product.title}-${props.product.id}`} style={{textDecoration:'none'}}>
        <CardActionArea  >
          <CardMedia component="img" height="250" image={props.product?.image} />
        </CardActionArea>
      </Link>


      <Link to={`/product-${props.product.title}-${props.product.id}`}  style={{textDecoration:'none'}}>
        <CardActionArea >
          <CardContent>
            <Typography align="center" variant="h6">
              {props.product?.title}
            </Typography>
            <Typography align="center">
              {props.product?.oldprice && (
                <Box
                  component="span"
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                    textDecoration: "line-through",
                    color: "red",
                    padding: "5px",
                  }}
                >
                  {props.product?.oldprice}TK
                </Box>
              )}
              <Box
                component="span"
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  padding: "5px",
                }}
              >
                {props.product?.price}TK
              </Box>
            </Typography>
            {/* <Typography component="legend">Controlled</Typography> */}
     
          </CardContent>
        </CardActionArea>
      </Link>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

{

  profile === null ? <CardActions
  style={{
    justifyContent: "center",
  }}
>
  <Button 
   
  //  onClick={()=>addToCart(product)}
    endIcon={<AddShoppingCartIcon />}
    variant="outlined"
    size="small"
    color="primary"
  >
    Add To Cart
  </Button>
</CardActions> :
<CardActions
  style={{
    justifyContent: "center",
  }}
>
  <Button 
   
  //  onClick={()=>countProduct(product)}
   onClick={() => props?.countProduct(props.product)}
    endIcon={<AddShoppingCartIcon />}
    variant="outlined"
    size="small"
    color="primary"
  >
    Add To Cart
  </Button>
</CardActions>

}
      
    
    </Card>
   
  );
};

export default SingleProduct;