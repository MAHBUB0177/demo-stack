import { Button, Grid, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { domain } from '../env'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

const AuthPage = () => {
    console.log(Cookies.get("csrftoken"),'mahabub alam cookie data')
    const [registernow, setRegisternow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [password2, setPassword2] = useState('');





    const loginnow = async () => {
        
        await axios({
            url: `${domain}/api/apilogin/`,
            method: 'POST',
            headers:{"X-CSRFToken": Cookies.get("csrftoken")},
            
            data: {
                username: email,
                password: password,

            }
        }).then(response => {
            console.log('token==',response)
            let data=response.data;
            if(data['token']){
                window.localStorage.setItem('token',data['token'])
                window.location.href='/'
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something is missing!!!!',
                    timer: 1500
                    // footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
           
        }).catch(_ => {
            // alert("Somthing is Wrong !! Try Agail !")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Somthining is error!!',
                timer: 1500
                
              })
        })
    }


    /////
    const register = async () => {
        if (password === password2) {
            await axios({
                url: `${domain}/api/register/`,
                headers:{"X-CSRFToken": Cookies.get("csrftoken")},
                method: 'POST',
                data: {
                    'email': email,
                    'password': password,

                }
            }).then(response => {
                console.log('AuthPage====', response.data);
                if (response.data['error'] === false) {
                    Swal.fire({
                        icon: 'success',
                        // title: 'Oops...',
                        text: 'Registered Successfully!!',
                        timer: 1000
                        
                      })
                    setRegisternow(false)
                }
                else {
                    // alert("Somthing is Wrong Try Agan !!")
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Somthining is Went Wrong!!',
                        timer: 1000
                        
                      })

                }
            })
        }
        else {
            // alert(" Password Not Matchd !!")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Is Not Matching!!',
                timer: 1000
                
              })
        }
    }


    //////
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "80vh" }}
        >
            <Typography variant='h4'>{registernow ? "Register Now" : "Login Now"}</Typography>

            <Grid item xs={12} md={8} sm={8}>
                <TextField
                    style={{ width: "100%", margin: "10px 0" }}
                    variant="outlined"
                    label="Email"
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    style={{ width: "100%", margin: "10px 0" }}
                    variant="outlined"
                    label="Password"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}

                />
                {
                    registernow &&
                    <TextField
                        style={{ width: "100%", margin: "10px 0" }}
                        variant="outlined"
                        label="Confirm Password"
                        type='password'
                        onChange={(e)=>setPassword2(e.target.value)}
                    />
                }
                {
                    registernow ?
                        <>
                            <Button onClick={register} variant='contained' color='primary' >
                                Register
                    </Button>
                            <Button onClick={() => setRegisternow(false)}>
                                Have an account?Login Now.
                    </Button>
                        </>
                        :
                        <>
                            <Button onClick={loginnow} variant='contained' color='primary'>
                                Login
                    </Button>
                            <Button onClick={() => setRegisternow(true)}>
                                No account?Register Now.
                    </Button>
                        </>
                }
            </Grid>
        </Grid>
    )
}

export default AuthPage