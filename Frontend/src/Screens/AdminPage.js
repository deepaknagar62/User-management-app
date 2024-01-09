import React from 'react'
import './CSS/Admin.css'
import userimg from './Images/userlogo.png'
import manuser from './Images/manageuser.jpg'
import { useNavigate } from 'react-router-dom'



export default function AdminPage() {
  const navigate = useNavigate();
   const openList = ()=>{
    navigate('/employee-list');
   }
   const openManageUser = ()=>{
    navigate('/manage-employees')
   }
  return (
    <>
      <header style={{backgroundColor:'rgb(107, 91, 149)' , padding:'20px',height:'20px'}}></header>
      <h3 style={{color:'blue', marginLeft:'10px',marginTop:'8px'}}>Welcome Admin</h3>
      <h1 style={{textAlign:'center',color:'rgb(7, 68, 104)'}}> Admin Panel</h1>
       <div className='box-container'>
         <div className='option-container' onClick={openList}>
          <img src={userimg} alt='image11'style={{height:'100px',width:'100px', marginTop:'20px'}} ></img>
          <p style={{fontFamily:'cursive',fontWeight:'700' ,fontSize:'20px'}}> Employee List</p>
         </div>

         <div className='option-container' style={{backgroundColor:'rgb(231, 81, 35)'}} onClick={openManageUser}>
         <img src={manuser} alt='image11'style={{height:'100px',width:'100px', marginTop:'20px'}} ></img>
          <p style={{fontFamily:'cursive',fontWeight:'700' ,fontSize:'20px'}}> Manage Employees</p>
         </div>

       </div>
    </>
  )
}
