import './App.css';
import styled from 'styled-components';
import React from 'react';
import Home from './components/pages/Home';
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login"
import EmergencyPage from './components/pages/Emergency/EmergencyPage';
import PetForm from './components/pages/PetForm/petForm';
import PetProfile from './components/pages/PetProfile/petProfile';


//background of the page
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`;

const Private = ({ Item }) => {
  const loggedUser = JSON.parse(localStorage.getItem('MernAppUser'))
   
  const { signed } = loggedUser ? loggedUser.token : ''

  return signed > 0 ? <Item /> : <Login />;
};

function App() {
  return (
    <AppContainer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<Home />} /> 
          {/* the user will be redirected to the login page  with path="*"   */}
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/petForm" element={<PetForm />} />
          <Route path="/pets/:petId" element={<PetProfile />} />
        </Routes>
    </AppContainer>
  );
}

export default App;
