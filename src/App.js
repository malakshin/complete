
import TypeOfCourses from './Component/Courses/pages/TypeOfCourses';
import NavBar from './Component/NavBar/NavBar';
import Home from './Home'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
// import ProfileForm from './Component/ProfileForm/ProfileForm';

import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
 <Router>
  <NavBar/>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Courses' element={<TypeOfCourses />}/>
    <Route path='/Logout' element={<Login />}/>
    <Route path='/Signup' element={<Signup/>}/>
    {/* <Route path='/aboali' element={<ProfileForm />}/> */}

   </Routes>
  
 </Router>
  </>
  );
}

export default App;

