import React, { useState } from 'react'
import './CSS/Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
    const navigate = useNavigate();
    const opneHomepage = ()=>{
        navigate('/')
    }

    const [userData, setUserData] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/api/register', userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 201) {
          console.log('User registered successfully');
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  return (
    
    <>
      <div style={{display:'flex' , justifyContent:'center',marginTop:'100px'}}> 
       <div className='register-container' >
          <h2>Regiser User</h2>
          <form onSubmit={handleSubmit}>
            <input placeholder='Name' type='text' name='name' value={userData.name} onChange={handleChange} />
            <input placeholder='Email' type='text' name='email' value={userData.email} onChange={handleChange} />
            <input placeholder='Phone' type='text' name='phone' value={userData.phone} onChange={handleChange} />
            <input placeholder='Password' type='password' name='password' value={userData.password} onChange={handleChange} />

            <button type='submit'>Register</button>
          </form>
          <p onClick={opneHomepage}>Go to Login page</p>
       </div>
       </div>
    </>
  )
}
