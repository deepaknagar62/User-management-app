
import React, { useState } from 'react'
import './CSS/Homepage.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function HomePage() {
    const navigate = useNavigate();
    
    const openRegisterpage = ()=>{
        navigate('/register-user')
    }

    const [loginData, setLoginData] = useState({
      email: '',
      password: '',
    });
    const [message, setMessage] = useState('success');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        [name]: value,
      }));
    };
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/login', loginData);
  
        if (response.data.success) {
          navigate('/user-page')
          
        } else {
         
          setMessage('Invalid email or password');
          alert(message);
        }
      } catch (error) {
        console.error('Error during login:', error);
        setMessage('Internal Server Error');
      }
    };
  

  return (
    <>
     <header style={{backgroundColor:'rgb(107, 91, 149)' , padding:'20px',height:'20px'}}></header>
     <div className='main-txt'>
     <h1>Welcome to User Management System</h1>
    </div> 

    <div className='main-container'>
      <div className='container1' style={{marginLeft:'300px'}}>
       <h3>User Pannel</h3>
       <div>
       <input placeholder='@Username' type='email' name='email'value={loginData.email} onChange={handleChange}></input>
       <input placeholder='@password' type='password' name='password'value={loginData.password} onChange={handleChange} ></input>
       </div>
       <button onClick={handleLogin}> Login</button>
       <p>Forget password</p>
       <p onClick={openRegisterpage}>Don`t have account? Register</p>

      </div>

      <div className='container1'>
      <h3>Admin Pannel</h3>
      <div>
       <input placeholder='@User-Admin'></input>
       <input placeholder='@password'></input>
       </div>
       <button > Login</button>
       <p>Forget password</p>
      </div>


    </div>


    </>
  )
}

