import React, { useState } from 'react'
import loginImage  from "../assets/loginImage.png"
import logo from "../assets/logo.png"
import axios from "axios"

const Signup=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    const handleSubmit= async (event:any) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Passwords do not match');
            return;
        }

        try{
            const response = await axios.post('http://localhost:3001/api/signup', {
                name,
                email,
                password,
                confirmPassword
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
                    <div className=''>
                        <input type="text" name="name" id="name" value={name} placeholder='Name' className='input w-75 mt-5' onChange={(event)=> setName(event.target.value)} />
                    </div>
                    <div className=''>
                        <input type="text" name="email" id="email" value={email} placeholder='Email' className='input w-75 mt-4' onChange={(event)=> setEmail(event.target.value)} />
                    </div>
                    <div className=''>
                        <input type="password" name="password" id="password" value={password} placeholder='Password' className='input w-75 mt-4' onChange={(event)=> setPassword(event.target.value)} />
                    </div>
                    <div className=''>
                        <input type="password" name="cpassword" id="cpassword" value={confirmPassword} placeholder='Confirm Password' className='input w-75 mt-4 mb-3' onChange={(event)=> setConfirmPassword(event.target.value)} />
                    </div>
                    <button className='mb-2 w-50 mt-5 p-3 login-btn fw-bolder' onClick={handleSubmit}>Login</button>
                    <p className='mt-5'>Already have an account? <a href="/login">Create account</a> </p>
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
export default Signup