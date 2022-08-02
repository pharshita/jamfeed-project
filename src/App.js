import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Artists_page from './Containers/Artists_page';
import Home from './Containers/Home';
import Fans_page from './Containers/Fans_page';
import Terms_of_services from './Containers/Terms_of_services';
import Signin_page from './Containers/Signin_page';
import Forgot_password from './Containers/Forgot_password';
import Privacy_policy from './Containers/Privacy_policy';
import Signup from './Containers/Signup';
import Testing from './Containers/Testing';

function App() {
  return (
  <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/artist" element={<Artists_page/>}></Route>
    <Route path="/fans" element={<Fans_page/>}></Route>
    <Route path="/terms_of_services" element={<Terms_of_services/>}></Route>
    <Route path="/signin" element={<Signin_page/>}></Route>
    <Route path="/forgot-password" element={<Forgot_password/>}></Route>
    <Route path='/privacy-policy' element={<Privacy_policy/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    {/* <Route path='/test' element={<Testing/>}></Route> */}



  
  </Routes>
  </Router>
 
  
  );
}

export default App;