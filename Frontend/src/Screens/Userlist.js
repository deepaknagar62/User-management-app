import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './CSS/Userlist.css'

export default function Userlist() {

    const [employeeList, setEmployeeList] = useState([]);


    useEffect(() => {
        async function fetchUsers() {
          const response = await axios.get('http://localhost:5000/api/employee-list');
          setEmployeeList(response.data);
        }
    
        fetchUsers();
      }, []);
  return (
    <>
      <header style={{backgroundColor:'rgb(107, 91, 149)' , padding:'20px',height:'20px'}}></header>

     

      <p style={{marginLeft:'100px', fontSize:'20px', fontWeight:'700', color:'rgb(7, 68, 104)'}}>Employee List</p>
      <div className='name-cont'> <h4 style={{marginLeft:'150px'}}>Name</h4>   <h4>Email</h4>     <h4 style={{marginRight:'350px'}}>Phone</h4></div>
      {employeeList.map((user) => (

            <div className='info-container'> <h5 style={{marginLeft:'50px'}}>{user.name}</h5> <h5>{user.email}</h5> <h5 style={{marginRight:'150px'}}>{user.phone}</h5> </div> 
          
          
        ))}
       
     
      



    </>
  )
}
