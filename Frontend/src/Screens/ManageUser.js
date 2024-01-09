import React, { useEffect, useState } from 'react'
import './CSS/ManageUser.css'
import axios from 'axios';
import deleteicon from './Images/deleteicon.png'
import { useNavigate } from 'react-router-dom';


export default function ManageUser() {
  const navigate = useNavigate();
  const opneAddUser = ()=>{
    navigate('/register-user')
  }

  const [employeeList, setEmployeeList] = useState([]);
  const [toDelete , setToDelete] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
          const response = await axios.get('http://localhost:5000/api/employee-list');
          setEmployeeList(response.data);
        }
    
        fetchUsers();
      }, []);

      const handleDeleteUser = async (emailToDelete) => {
        
          setToDelete(emailToDelete)
          setShowConfirmation(true);

      };

      const confirmDelete = async () => {
        try {
          const response = await axios.delete(`http://localhost:5000/api/delete-users/${toDelete}`);
          console.log(response.data);
          setShowConfirmation(false);
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
    
      const cancelDelete = () => {
        setToDelete('');
        setShowConfirmation(false);
      };

  return (
    <>
    <header style={{backgroundColor:'rgb(107, 91, 149)' , padding:'20px',height:'20px'}}></header>
    <div style={{display:'flex', justifyContent:'space-between'}}>  
    <p style={{marginLeft:'100px', fontSize:'20px', fontWeight:'700', color:'rgb(7, 68, 104)'}}>Manage Employee </p>
     <div className='add-user' onClick={opneAddUser}> &#10011; Add User</div>
    </div> 

    <div className='name-cont'> <h4 style={{marginLeft:'150px'}}>Name</h4>   <h4>Email</h4>     <h4 style={{marginRight:'500px'}}>Phone</h4></div>
    {employeeList.map((user) => (
       
   <div className='info-container' style={{justifyContent:'space-between'}}> <h5 style={{marginLeft:'50px'}}>{user.name}</h5> <h5 >{user.email}</h5> <h5>{user.phone}</h5> 
      <img src={deleteicon} alt='images' height='30' width='30' style={{marginRight:'20px'}}
     onClick={() => handleDeleteUser(user.email)}></img>
     
   </div> 

  ))}
    
    {showConfirmation && (
      <div className="popup">
        <p>Are you sure you want to delete this user?</p>
        <button onClick={confirmDelete} style={{ borderColor:'red'}}>Yes</button>
        <button onClick={cancelDelete}>Cancel</button>
      </div>
    )}
    
    </>
  )
}
