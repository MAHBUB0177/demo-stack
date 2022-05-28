import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div style={{height:'300px',}}>
      {/* <h2 style={{marginTop:'50%',justifyContent:'center',texSize:'20px'}}> 404 page is not forund</h2> */}
      <h1 style={{ color: "red", fontSize: 100 ,textAlign:'center'}}>404</h1>
      <h3 style={{textAlign:'center'}}>Page Not Found</h3>
      <p style={{textAlign:'center'}}>
        <Link to="/">Go Home</Link>
      </p>
      </div>
      
    </div>
  );
};

export default NotFound;