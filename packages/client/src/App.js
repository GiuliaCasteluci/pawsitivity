import './App.css';
import React from 'react';
import styled from 'styled-components';
import PetForm from './components/E.Surrender';
import EmergencyPage from './pages/EmergencyPage';
import { Route, Router, Routes } from 'react-router-dom';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function App() {
  return (
    <>

    
<Router>
<AppContainer>
      <Routes>
        <Route path='/petform' element={<PetForm />} />
        <Route path='/emergency' element={<EmergencyPage />} />
      </Routes>
    </AppContainer>
</Router>
    
   
    
    </>
  );
}

export default App;
