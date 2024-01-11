
import './App.css';
import HomePage from './Screens/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Screens/Register';
import UserPage from './Screens/UserPage';
import AdminPage from './Screens/AdminPage';
import Userlist from './Screens/Userlist';
import ManageUser from './Screens/ManageUser';
import UserRegister from './Screens/UserRegister';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register-user' element={<Register/>}></Route>
          <Route path='/user-register-user' element={<UserRegister/>}></Route>
          <Route path='/user-page' element={<UserPage/>}></Route>
          <Route path='/admin-page' element={<AdminPage/>}></Route>
          <Route path='/employee-list' element={<Userlist/>}></Route>
          <Route path='/manage-employees' element={<ManageUser/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
