import { Box, Button, Card, Container, Grid, IconButton, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { domain } from '../env'
import VisibilityIcon from '@material-ui/icons/Visibility'
import SendIcon from '@material-ui/icons/Send'
import SingleReview from '../common/SingleReview'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import {useStateValue} from '../state/stateProvider'



const ProductDetails = () => {
const [{ profile, }, dispatch] = useStateValue();
const[cart,setCart]=useState([])
  console.log('this is cart',cart)

   const addToCart =(product)=>{
     console.log("mahbub alam",product)
     const newCart=[...cart,product]
     setCart(newCart)

     Swal.fire({
        icon: 'success',
        title: 'Thank you',
        text: 'Your product Is Added SuccessFully To The Cart!!!!',
        timer: 1200
        
      })

     
   }

   useEffect(() => {
    // storing input name
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  

    const [product, setProduct] = useState(null);
    const { id}  = useParams()
    console.log(Cookies.get("csrftoken"))
    useEffect(()=>{
        const getproductdetailse=async()=>{
            await axios({
                url:`${domain}/api/singleproduct/${id}/`,
                method:'GET',
            }).then(response=>{
                setProduct(response.data[0])
                console.log(response.data[0])
            })
        }
        getproductdetailse()
    },[])
    
    useEffect(()=>{
        const addproductview = async()=>{
            await axios({
                url:`${domain}/api/addproductview/`,
                method:'POST',
                headers:{"X-CSRFToken": Cookies.get("csrftoken")},
                data:{
                    'id':id
                }
            }).then(response=>{
                // console.log("ProductDetails",response.data);
            })
        }
        addproductview()
    },[])
    return (
        <Container style={{
                paddingTop:'40px'
            }} >
            <Card>
            <Grid container >
                <Grid item xs={12} sm={12} md={5} lg={5} >
                    <img style={{
                        width:'100%',
                        height:'auto'
                    }} src={product?.image} alt={product?.title}/>
                </Grid>
               
                <Grid item xs={12} sm={12} md={7} lg={7} >
                    <Grid container style={{marginLeft:'10px'}}>
                        <Grid item xs={12} md={6} lg={6} >
                            <Typography variant='h4' >{product?.title}</Typography>
                            <hr></hr>
                            <Box>
                                {

                                    product?.category?.map((item,i)=><Button key={i}>{item?.title}</Button>)
                                }
                            </Box>
                            <hr></hr>
                        
                                <Box>
                                    {
                                        product?.brand && 
                                <Button variant='outlined' >{product?.brand?.title}</Button>
                                    }
                                </Box>
                         
                            <Box>
                                {
                                    product?.discount > 0 && <Box style={{
                                        fontSize:'40px'
                                    }} >{product?.discount}% OFF</Box>
                                }
                            </Box>
                            <Box>
                                {
                                    product?.oldprice && <Box style={{
                                        fontSize:'40px',
                                        color:'red',
                                        textDecoration: 'line-through',
                                        marginRight:'10px'
                                    }} component='span' >{ product?.oldprice} TK</Box>
                                }
                                 <Box style={{
                                       fontSize:'40px',
                                        color: 'black'
                                 }} component='span' >{ product?.price} TK</Box>

                                 {
                                     profile === null ? (<Box style={{margin:'10px 0px'}}>

                                     <Button size='large' variant='outlined' class="btn btn-primary" >Add To Cart</Button>
                                     </Box>) :

                                     (<Box style={{margin:'10px 0px'}}>

                                     <Button size='large' variant='outlined' class="btn btn-primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                                     </Box>)

                                 }
                                 
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} >
                            <Card style={{
                                padding:'10px',
                                margin:'15px 0px',
                                display:'flex',
                                justifyContent:'center'
                            }} >
                                <Button
                                endIcon={
                                    <VisibilityIcon />
                                }
                                color='primary' size="large" >{product?.view}</Button>
                            </Card>
                        </Grid>
                        <Typography>{product?.details}</Typography>
                     
                    </Grid>
                        <Typography variant='h3' align='center' >Review</Typography>
                        <Box p={3}>
                            <TextField
                                label='Add Review..'
                                style={{width:'100%'}}
                                variant='outlined'
                                InputProps={{
                                    endAdornment:(
                                        <IconButton>
                                            <SendIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                            {
                                product?.review?.map((item,i)=><SingleReview key={i} item={item} />)
                            }
                        </Box>
                </Grid>
            </Grid>
            </Card>
        </Container>
    )
}

export default ProductDetails