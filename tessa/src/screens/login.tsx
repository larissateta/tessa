import React, { useState } from 'react'
import loginImage  from "../assets/loginImage.png"
import logo from "../assets/logo.png"
import axios from "axios"

const Login=()=>{
    const [email, setEmail]= useState('');
    const [password, setPassword] =  useState('');

    const handleSubmit =async (event:any) => {
        event.preventDefault();

        if(!password){
            alert('Password is required');
            return;
        }

        try{
            const response = await axios.post('http://localhost:3001/api/login', {
                email,
                password
            });
            console.log(response.data);
        }catch(error){
            console.log(error);
        }

    }
    return(
        <div className='loginContainer'>
            <img src={logo} alt="logo"  />
            <div className="login d-flex">
                <div className='w-50 text-center pt-5'>
                    <h1 className='mt-5 color-blue fw-bolder'>Welcome back!</h1>
                    <div className='mt-5'>
                        <input type="text" name="email" id="email" placeholder='Email or Username' value={email} className='input w-75 mt-5' onChange={(event)=> setEmail(event.target.value)} />
                    </div>
                    <div className='mt-1'>
                        <input type="password" name="password" id="password" placeholder='Password' value={password} className='input w-75 mt-5' onChange={(event)=> setPassword(event.target.value)} />
                    </div>
                    <p className='color-blue forgot mt-3 mb-5'>Forgot your password?</p>
                    <button className='mb-2 w-50 mt-5 p-3 login-btn fw-bolder' onSubmit={handleSubmit}>Login</button>
                    <p className='mt-5'>Don't have an account? <a href="/signup">Sign up</a> </p>
                </div>
                <div className='w-50'>
                    <img src={loginImage} alt="loginImage" className='mx-5' />
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login