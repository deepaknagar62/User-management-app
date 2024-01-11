import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';





export default function UserRegister() {
    
    const navigate = useNavigate();
    const opneHomepage = ()=>{
        navigate('/')
    }
   
    const [message, setMessage] = useState(false);
    const[isSuccess , setIsSuccess] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

     

    const [userData, setUserData] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
      role: 'user',
    });

   

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    };

   
    const handleSendOtp = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/send-otp', { email: userData.email }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200 && response.data.otpGenerated) {
          setIsSuccess(true);
          setMessage(true);
          setMessage('OTP sent successfully');
          setOtpSent(true);
        } else {
          setIsSuccess(false);
          setMessage(true);
          setMessage('Failed to send OTP');
        }
      } catch (error) {
        setIsSuccess(false);
        setMessage(true);
        setMessage('Failed to send OTP');
        console.error('Error sending OTP:', error);
      }
    };
  
   
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const desireEmail = 'primathon.in';
      const regularExp = new RegExp(`@${desireEmail}`);
        const str = userData.phone;
        const regex = /\d/g;
        const matches = str.match(regex);
        const numDigits = matches.length;
       

      if(userData.name==='' || userData.email==='' || userData.phone==='' || userData.password===''){
        setIsSuccess(false)
          setMessage(true);
          setMessage("Please enter all credentials")
         
          
      }

     else if(!regularExp.test(userData.email)){
        setIsSuccess(false)
          setMessage(true);
          setMessage("Invalid email , Enter organisation email ");
          
      }
      
      else if(numDigits !== 10){
        setIsSuccess(false)
        setMessage(true);
        setMessage("Enter valid phone number ");
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
            <div style={{display:'flex',justifyContent:'center'}} >

            <input style={{width:'100px',marginLeft:'15px'}} 
            placeholder='Enter OTP'type="text" maxlength="6"  />

            <button onClick={handleSendOtp} style={{backgroundColor:'blueviolet',height:'24px',marginLeft:'15px' 
            ,width:'70px',marginTop:'15px' ,fontSize:'10px'}}>Send OTP</button>

          </div>
            <button type='submit'>Register</button>
          </form>
          <p onClick={opneHomepage}>Go to Login page</p>
            
          <p style={{marginTop:'10px',color: isSuccess ?'green':'red',fontSize:'15px',fontWeight:'700'}}>{message}</p>
       </div>
       </div>
    </>
  )
}
