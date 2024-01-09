import React from 'react'
import { useLocation } from 'react-router-dom';
import usrimg from './Images/user.png'

export default function UserPage() {

  const location = useLocation();
  const user = location.state.user;
 
  return (
    <>
      <header style={{backgroundColor:'rgb(107, 91, 149)' , padding:'20px',height:'20px'}}></header>
      <h3 style={{color:'blue', marginLeft:'10px',marginTop:'8px'}}>Welcome {user.name}</h3>
       <div style={{display:'flex', justifyContent:'center',marginTop:'100px'}}>
       <div className='register-container'>

        <div style={{}}><img src={usrimg} alt='image1' height='180px' width='180px'></img></div>

        <h3 style={{fontFamily:'fantasy'}}> {user.name} </h3>
        <h3 style={{fontFamily:'cursive'}}> {user.email}</h3>
        <h3 style={{fontFamily:'fantasy'}}> {user.phone}</h3>
       </div></div>
    </>
  )
}
