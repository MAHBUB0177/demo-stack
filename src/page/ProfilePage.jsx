import React,{useState} from 'react';
import { useStateValue } from '../state/stateProvider';
import { domain,getheader } from '../env'
import axios from 'axios';
import { Button, } from '@material-ui/core';

const ProfilePage = () => {
 const [{ profile }, { }] = useStateValue();
 console.log(profile)
 const [username,setUsername]=useState(profile?.username)
 const [phone,setPhone]=useState(profile?.mobile)
 const [email,setEmail]=useState(profile?.user?.email);
 const [id,setId]=useState(profile?.user?.id);
 const [image,setImage]=useState(null);
 console.log(image,'this is a image')
 

 //update profile data :
 const updatedata = async () => {
  await axios({
    url: `${domain}/api/updateuser/`,
    method: 'POST',
    headers: getheader,
    data: {
      username: username,
      phone: phone,
      email: email,
      id:id

    }
  }).then(response => {
      console.log(response.data["message"]);
  })
}
 
//update profile image or any file:
const updateProfileImage = async() =>{
  let formdata=new FormData();
  formdata.append('image',image)
  formdata.append('id',id)

  await axios({
    url:`${domain}/api/Updateimage/`,
    method:'post',
    headers: getheader,
    data:formdata
    // data:{
    //   formdata:formdata,
    //   id:id
    // }
  
  }).then(response=>{
    console.log(response.data,'mahbub update profile')
  })


}
 return (
  <div style={{marginTop:'50px'}}>
   {
    profile === null? "" :

    <>

           <div className="container">
             <div class="content-section">
               <div class="media" style={{ marginLeft: '20px' }}>
                 <img   src={`${domain}${profile?.prof_image}`} style={{ height: '200px', width: '200px', marginRight: '20px', marginBottom: '16px',clipPath:'circle()' }} />
                 <div class="media-body">
                   <h2 class="account-heading">Name:{profile?.username}</h2>
                   <p class="text-secondary">Phone:{profile?.mobile}</p>
                   <p>email:{profile?.user?.email}</p>
                 </div>
               </div>


               <div className=''>
              
               <div className='form-group'>
                <label>Profile Image</label>
                <input type='file' class='form-control' onChange={e=>setImage(e.target.files[0])}></input>
                <br/>
                <Button class="btn btn-info" onClick={updateProfileImage}>Upload Image</Button>

               </div>
               <div className='form-group'>
                  <label>User Nmae</label>
                  <input type="text" class="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>

                </div>
                <div className='form-group'>
                  <label>Phone Number</label>
                  <input type="number" class="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>
                <br></br>
                <button class="btn btn-success" onClick={updatedata}>Update</button>

               </div>




             </div>
           </div>   


  





  

  
    
    </>
   }
   
  </div>
 );
};

export default ProfilePage;