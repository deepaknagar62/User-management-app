import React, { useState } from 'react'
import './CSS/Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
    const navigate = useNavigate();
    const opneHomepage = ()=>{
        navigate('/')
    }

    const [message, setMessage] = useState(false);
    const[isSuccess , setIsSuccess] = useState(false);

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
      if(userData.name==='' || userData.email==='' || userData.phone==='' || userData.password===''){
        setIsSuccess(false)
          setMessage(true);
          setMessage("Please enter all credentials")
          
      }
  
      else{

      
      try {
        const response = await axios.post('http://localhost:5000/api/register', userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 201) {
          setIsSuccess(true)
          setMessage(true);
          setMessage("User registered successfully")
         
        } else {
          setIsSuccess(false)
          setMessage(true);
          setMessage("Failed to register user")
          
        }
      } catch (error) {
        setIsSuccess(false)
        setMessage(true);
        setMessage("Failed to register user")
        console.error('Error registering user:', error);
      }

    }
    };
  return (
    
    <>
       <header style={{backgroundColor:'rgb(107, 91, 149)' , padding:'20px',height:'20px'}}></header>
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

          <p style={{marginTop:'10px',color: isSuccess ?'green':'red',fontSize:'15px',fontWeight:'700'}}>{message}</p>
       </div>
       </div>
    </>
  )
}
