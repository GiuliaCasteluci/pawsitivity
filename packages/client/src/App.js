import './App.css';
import styled from 'styled-components';
import React from 'react';
import Home from './components/pages/Home';
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login"
import useAuth from "./hooks/useAuth";
import SwipePage from './components/pages/Swipe';


//background of the page
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`;

const Private = ({ Item }) => {
  const { signed } = useAuth();

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
          <Route path="/adopt" element={<SwipePage />} />
          the user will be redirected to the login page  with path="*"  
        </Routes>
    </AppContainer>
  );
}

export default App;
