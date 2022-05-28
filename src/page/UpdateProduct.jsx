
import axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../env";

const UpdateProduct = () => {
  const [product, setProduct] = useState([])
  console.log('mahbub',product)
  const [title,setTitle]=useState('')
  console.log(title,'okkk')
  const [details,setDetails]=useState('')
  console.log(details,'pppp')
  const [userId,setUserId]=useState('')

  useEffect(() => {
    const updateProducts = async () => {
      await axios({
        url: `${domain}/api/appallproduct/`,
        method: "GET",
      })
        .then((response) => {
          console.log(response.data,'alam');
          setProduct(response.data);
        })
        .catch((error) => {
          console.log("CategoryProduct", error);
        });
    };
    updateProducts();
  }, []);


 

  const selectUser=async(id)=>{
    console.log(id,'pppplllllooo')
    // const id=id;
    await axios({
      url: `${domain}/api/appallproduct/${id}/`,
      method: "GET",
    })
      .then((response) => {
        console.log(response.data[0],'alam11111');
        // const item=response.data[0]
        // console.log(item,'hiiiiiii')
      })



    
    // console.log(product[id - 1])
    // let item=product[id-1];
    // console.log(item,'heloo ,man')
    // setTitle(item.title)
    // setDetails(item.details)
    // setUserId(item.id)
  

  }

  function updateuser(){
    console.log(title,details,userId,'update data in the forms')
  

  }

  return (
    <div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <textarea class="form-control" id="message-text"></textarea>
            {/* <input type="text" class="form-control" id="recipient-name"> */}
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>

      <h1>mahbub alam</h1>

<table style={{border:'1px solid black'}}>
  <thead>
  <tr>
    <th>id</th>
    <th>title</th>
    <th>price</th>
    <th>details</th>
  </tr>
  </thead>

  <tbody>
          {
            product?.map(item=>
              <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.details}</td>
            <td>{item.price}</td>
           <td> <button onClick={()=>selectUser(item.id)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">update</button></td>
            {/* <td><button onClick={()=>selectUser(item.id)}>update</button></td> */}
          </tr>
              )
          }
          
        </tbody>
</table>
      

<br></br>


<div style={{marginTop:"30px"}}>
  <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
  <br></br>
  <input type='text' value={details} onChange={(e)=>setDetails(e.target.value)}></input>
  <br></br>
  <button onClick={updateuser}>update data</button>
</div>


    </div>
  );
};

export default UpdateProduct;