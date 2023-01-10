import './App.css';
import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login"
import EmergencyPage from './components/pages/Emergency/EmergencyPage';
import PetForm from './components/pages/PetForm/petForm';
import PetProfile from './components/pages/PetProfile/petProfile';
import ResourcePage from './components/pages/swipe/resourcesPage';
import AboutPage from './components/pages/swipe/aboutPage';
import SwipePage from '../src/components/pages/swipe'
import Likespage from '../src/components/pages/swipe/likes'
import Footer from './components/Footer/Footer';
import HomePage from './components/pages/HomePage/homePage';
import Header from './components/pages/Header';

//page background
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      < Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<HomePage />} />
        {/* the user will be redirected to the homepage page  with path="*"   */}
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/petForm" element={<PetForm />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/adopt" element={<SwipePage />} />
        <Route path="/likes" element={<Likespage />} />
        <Route path="/pets/:petId" element={<PetProfile />} />
        {/* <Route path="/homePage" element={<HomePage />} /> */}
      </Routes>
      <Footer/> 
    </AppContainer>
  );
}

export default App;