import './App.css';
import styled from 'styled-components';
import React from 'react';
import Home from './components/pages/Home';
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login"
import useAuth from "./hooks/useAuth";
import EmergencyPage from './components/pages/Emergency/EmergencyPage';
import PetForm from './components/pages/PetForm/petForm';
import SwipePage from './components/pages/swipe'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./App.css";
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
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("message-from-server", (data) => {
      // setChat([...chat, data.message])
      setChat((prev) => [...prev, data.message]);
      // console.log("message recieved", data);
    });
  }, [socket]);

  function handleForm(e) {
    e.preventDefault();
    console.log(message);
    socket.emit("send-message", { message });
    setMessage("");
  }
  return (
    <AppContainer>
          <Box sx={{marginBottom:5}}>
          {chat.map((message) => (
            <Typography key={message}>{message}</Typography>
          ))}
        </Box>
        <Box component="form" onSubmit={handleForm}>
          <TextField
            size="small"
            id="standard-basic"
            label="Send a message"
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button varient="text" type="submit">
            Send
          </Button>
        </Box>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<Home />} /> 
          <Route path="/adopt" element={<SwipePage />} />
          the user will be redirected to the login page  with path="*"  
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/petForm" element={<PetForm />} />
        </Routes>
    </AppContainer>
  );
}

export default App;
