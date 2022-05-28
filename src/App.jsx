
import './App.css';
import {
 BrowserRouter as Router,
 Routes,
 Route,

} from "react-router-dom";
import Ok from './ok';
import { Container, Typography } from '@mui/material';
import NabBar from './components/NabBar';
import Sliders from './components/Slider';
// import CategoryProducts from './components/CategoryProducts';
import HomePage from './page/HomePage';
import SingleCategoryProducts from './page/SingleCategoryProducts';
import ProductDetails from './page/ProductDetails';
import SingleBrandsProducts from './page/SingleBrandsProducts';
import SearchResultPage from './page/SearchResultPage';
import AuthPage from './page/AuthPage';
// import CategorysName from './components/CategorysName';
import React, { useEffect } from "react";
import axios from "axios";
import {domain,getheader} from "./env"
import { useStateValue } from './state/stateProvider';
import OrderPage from './page/OrderPage'
import ProfilePage from './page/ProfilePage';
import Footer from './components/Footer';
import Contact from './page/Contact';
import NotFound from './page/NotFound';
import UpdateProduct from './page/UpdateProduct';
import FakeApi from './page/FakeApi';
// import About from './page/About';

function App() {
  const [{ profile,pagereload }, dispatch] = useStateValue();

 

 useEffect(() => {
  const getprofile = async () => {
    await axios({
      url: `${domain}/api/profile/`,
      method: 'GET',
      headers: getheader
    }).then(response => {
      console.log('App=====', response.data);
      dispatch({
        type:'PRO',
        value:response.data
      })
     
    })
    .catch(error=>{
      dispatch({
        type:'PRO',
        value:null
      })
    })
    

   
  }
  getprofile()
}, [pagereload])

useEffect(() => {
  if (profile !== null) {
    const getdata = async () => {
      await axios({
        method: "get",
        url: `${domain}/api/cart/`,
        headers: getheader
      }).then(res => {
        console.log('cart data',res.data);
       
      })
    }
    getdata()
  }
}, [])

 return (
  <>

   <Router>
    <NabBar />
    <br></br>
    <Routes>
     <Route path="/app" element={<Ok />} />
     <Route path="/" element={<HomePage />} />
     <Route path="/product-:title-:id" element={<ProductDetails />} />
     <Route path="/category-:title-:id" element={< SingleCategoryProducts/>}/>
     <Route path="/brand-:title-:id" element={< SingleBrandsProducts/>}/>
     <Route path="/q-:q" element={< SearchResultPage/>}/>
     <Route path="/login" element={< AuthPage/>}/>
     <Route path="/pageform" element={< UpdateProduct/>}/>
     <Route path="/fakeapi" element={< FakeApi/>}/>
     
{
  profile !== null &&
  <>
  <Route path='/order' element ={<OrderPage />}/>
  <Route  path='/profile-:username' element={<ProfilePage/>}/>
  <Route  path='/Contact' element={<Contact/>}/>

  </>
}
<Route exact element={ AuthPage}/>
<Route path="*" element={<NotFound />}/>
  
    </Routes>
  <Footer></Footer>
   </Router>
  </>
 );
}

export default App;