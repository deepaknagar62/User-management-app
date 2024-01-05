
import './App.css';
import HomePage from './Screens/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Screens/Register';
import UserPage from './Screens/UserPage';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register-user' element={<Register/>}></Route>
          <Route path='/user-page' element={<UserPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
