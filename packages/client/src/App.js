import './App.css';
import PetForm from './components/E.Surrender';
import EmergencyPage from './components/Emergency/Emergency';
import { Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Route path="/" exact component={PetForm} />
      <Route path="/emergency/:pet" component={EmergencyPage} />
    </Router>
    
   
    
    </>
  );
}

export default App;
