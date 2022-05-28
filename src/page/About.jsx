import React from 'react';
// import{Card,CardHeader,CardBody,CardTitle,CardText,CardFooter} from 'reactstrap'
// import './about.css'
import {Card,} from 'react-bootstrap'
// import shoping from '../images/shoping5'
// import shopping9 from '../components/images/shopping9.jpg'
// import shopping6 from '../components/images/shopping6.jpg'
// import shopping7 from '../components/images/shoping7.jpg'
// import shopping8 from '../components/images/shopping8.jpg'


import '../components/Footer'

const About = () => {
 return (
  <div className='container'>
   <div className="row row-content">
   {/* <div className="col-12"> */}
    <div style={{marginLeft:'80px'}} className="col-12">
     <div className="col-12">
           <Card style={{ width: 'auto' ,height:'auto'}}>
              <Card.Img  src={''}  alt="" style={{height:'400px'}}/>
            </Card>
     </div>

     <div className="main col-md-12">
        <div className="text col-md-8">
          <h1 style={{color:'rgb(168,124,167)'}}>Welcome To Our eShop</h1>
     
          <p>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
          </p>
          <p>
           Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
          </p>
      
          <div style={{display:'flex'}} className='col-md-8'>
             <div className='col-md-4'>
              <Card style={{ width: '15rem',height:'110px',background:'tomato',marginRight:'5px' }}>
                 <h4>10K</h4>
                  <h6>Listed Products</h6>
                  <p >Dynamically morph team driven partnerships after vertical</p>
               </Card>
             </div>


              <div className='col-md-4'>
               <Card style={{ width: '15rem',height:'110px',background:'tomato' }}>
                 <h4>8K</h4>
                 <h6>Lovely Customer</h6>
                 <p >Dynamically morph team driven partnerships after vertical</p>
                </Card>
              </div>

         </div>
     


       </div>

       <div className="picture">
        
        <div style={{marginRight:'8px'}}>
        <Card style={{ width: '18rem',marginBottom:'8px' }}>
        <Card.Img  src={''}  alt=""/>
        </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img  src={''}  alt=""/>
              
          </Card>
        </div>

        <div>
        <Card style={{ width: '25rem' ,height:'415px'}}>
        <Card.Img  src={''}  alt="" style={{height:'415px'}}/>
       </Card>
        </div>


       </div>

     </div>
  
    </div>

   {/* </div> */}
 </div>
</div>
 );
};

export default About;