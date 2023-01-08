import './App.css';
import styled from 'styled-components';
import React from 'react';
import Home from './components/pages/Home';
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login"
import SwipePage from './components/pages/swipe';
import EmergencyPage from './components/pages/Emergency/EmergencyPage';
import PetForm from './components/pages/PetForm/petForm';
import LikesPage from './components/pages/swipe/likes';
import PetProfile from './components/pages/PetProfile/petProfile';
import ResourcePage from './components/pages/swipe/resourcesPage';
import AboutPage from './components/pages/swipe/aboutPage';


//background of the page
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`;

const Private = ({ Item }) => {
  const savedUser = JSON.parse(localStorage.getItem('MernAppUser'))
   
  const { signed } = savedUser ? savedUser.token : ''

  return signed > 0 ? <Item /> : <Login />;
};

function App() {
  return (
    <AppContainer>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<Home />} /> 
          {/* the user will be redirected to the login page  with path="*"   */}
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/petForm" element={<PetForm />} />
          <Route path="/resources" element={<ResourcePage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/adopt" element={<SwipePage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/pets/:petId" element={<PetProfile />} />
        </Routes>
    </AppContainer>
  );
}

export default App;
