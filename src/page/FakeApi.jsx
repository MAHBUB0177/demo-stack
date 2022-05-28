import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './table.css'

const FakeApi = () => {
  const [user,setUser]=useState([])
  const [email,setEmail]=useState('')
  console.log(email)
  const [username,setUsername]=useState('')
  const [userId,setUserId]=useState('')
  console.log(user)

  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    await axios({
      url:`https://fakestoreapi.com/users`,
      method:'GET'

    }).then(res=>
      setUser(res.data)
      )
  }

  const selectUser=(id)=>{
    console.warn(user[id - 1])
    let item=user[id-1];
    setEmail(item.email)
    setUsername(item.username)
    setUserId(item.id)
  

  }
  function updateuser(){
    console.log(username,email,userId,'update data in the forms')
    let item={username,email}
    console.warn("item",item)
    fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getData()
      })
    })

  }



  function createPDF() {
    console.log('mahbub alam')
    var divContents = document.getElementById('td').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 10px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open();
    win.document.write('<html><head>');
    win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');

    win.document.write('<body>');
    win.document.write(divContents); // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); // CLOSE THE CURRENT WINDOW.

    win.print(); // PRINT THE CONTENTS.
}
  return (
    <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style={{marginTop:'30px'}}>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
           <span> <label for="recipient-name" class="col-form-label">Email:</label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input></span>
          </div>
          <div class="mb-3">
          <span> <label for="message-text" class="col-form-label">UserName:</label>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}></input></span>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={updateuser}>Update</button>
      </div>
    </div>
  </div>
</div>
    <div style={{display:'flex'}}>
      <div id='td'>

      
      <h2>this is a simple demop Api</h2>
      <table style={{width: '100%',border: "1px solid #dddddd",padding: '8px',marginRight:'50px'}} >
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>username</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {
            user.map(item=>
              <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            {/* <td><button onClick={()=>selectUser(item.id)}>update</button></td> */}
            <td> <button onClick={()=>selectUser(item.id)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">update</button></td>
          </tr>
              )
          }
          
        </tbody>
      </table>
      <button style={{width:'200px'}} onClick={createPDF} class='btn btn-success'>pdf create</button>

      </div>

<br></br>


      {/* <div style={{marginTop:"30px"}}>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <br></br>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <br></br>
        <button onClick={updateuser}>update data</button>
      </div> */}

      
    </div>
    </div>
  );
};

export default FakeApi;