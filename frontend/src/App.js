import React from 'react';
// 9th video
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
function App() {

  return (
    <BrowserRouter>
   
    <div>
      <Header/>
     
      <main>
        <Routes>
          <Route exact path = "/" element={<LandingPage/>}/>
          <Route exact path = "/mynotes" element={<MyNotes/>}/>
          <Route exact path = "/login" element={<LoginScreen/>}/>
          <Route exact path = "/register" element = {<RegisterScreen/>}/>
          </Routes>
      </main>
     
      <Footer/>
        
    </div>
 
    </BrowserRouter>
  );
}

export default App;
