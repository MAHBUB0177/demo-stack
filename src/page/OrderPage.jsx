import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain, getheader } from '../env';
import Cookies from 'js-cookie'
import { Button, Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2'


const OrderPage = () => {

  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("cart");
    console.log('getcart', saved)
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  console.log('check cart orderpage', cartItem)

  var total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    var product = cartItem[i];
    total = total + product.price;
  }

  let shipping = 0;
  if (total > 2200) {
    shipping = 0
  }
  else if (total > 1500) {
    shipping = 4.99;
  }
  else if (total > 0) {
    shipping = 12.99;
  }

  const tax = total / 10;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return (Number(precision))
  }


const confirmOrder=()=>{
  Swal.fire({
    icon: 'success',
    title: 'Thank you',
    text: 'Your Order Is Confirmed !!!!',
    timer: 1200
    
  })
  // document.getElementById('order').reset()
  window.location.href='/'

}


const removeItem=(id)=>{
  console.log(id,'product id')
 const newCart= cartItem.filter(item=>item.id !== id)
 console.log(newCart)
setCartItem(newCart)
// const remv_cart=cartItem.filter(item=>item.id === id)
// window.localStorage.removeItem(remv_cart);

}

  return (

    <div className='  container col-md-12' style={{ display: 'flex', marginTop: '30px' }} >
      <div className='col-md-8' style={{ borderLft: '1px solid gray', borderRight: '1px solid black' }}>
        {
          cartItem?.map((item, i) =>
            <div class="card" style={{ width: '22rem', display: 'inline-block', marginRight: '10px', marginBottom: '20px' }}>
              <img src={item?.image} class="card-img-top" alt={item?.image} style={{height:'250px'}}></img>
              <div class="card-body">
                <h5 class="card-title" >{item?.title}</h5>
                <Typography>

                  {
                    item?.oldprice && (
                      <Box component="span" style={{
                        fontWeight: 'bold', fontSize: 'large', textDecoration: 'line-through',
                        color: 'red', padding: '5px'
                      }}>
                        {item?.oldprice}Tk
                      </Box>

                    )
                  }
                
                  <Box component='span' style={{
                    fontWeight: 'bold',
                    fontSize: 'large',
                    padding: '5px'
                  }} >
                    {item?.price}Tk
                  </Box>
                  
                </Typography>
                <button class='btn btn-danger' onClick={()=>removeItem(item?.id)}>Remove</button>
              </div>
            </div>


          )
        }
      </div>

      <div className=' container col-md-4' style={{ justifyContent: 'center' }} id ='order' >
        <h1 style={{
          justifyContent: 'center',
          borderBottom: '3px solid gray',
          color: 'red'
        }}>Order Summary</h1>
        <h4 style={{ color: 'tomato' }}>Items Order:{cartItem.length}</h4>
        <p><b>Product price:</b>{formatNumber(total)}</p>
        <p><b>Shipping Cost:</b>{formatNumber(shipping)}</p>
        <p><b>Tax & Vat:</b>{formatNumber(tax)}</p>
        <p><b>Total Price:</b> {formatNumber(total + shipping + tax)}</p>
{
        cartItem.length <= 0 ? " " : 
        <>
        <Button class="btn btn-info" style={{ textAlign: 'center' }} onClick={confirmOrder}>Confirm</Button>
        </>
}
      </div>

    </div>
  );
};

export default OrderPage;