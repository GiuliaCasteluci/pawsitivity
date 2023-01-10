import React, {useState} from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container , Nav, Navbar, Row, NavDropdown, Card, Toast} from "react-bootstrap";
import paws from './PawsLogo.png'
import heart from './heart.png'
import cancel from './cancel.png'
import glass from './mag.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LikesPage from "./likes";
import axios from "axios"

function assistancePage() { 
return(
    <span className="page">
      <ToastContainer></ToastContainer>
        <Container className=" m-auto mt-2 d-flex flex-column" style={{width: '50%'}}>
        </Container>
    </span>
)}

export default assistancePage