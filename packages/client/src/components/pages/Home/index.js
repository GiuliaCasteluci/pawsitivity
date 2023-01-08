import React from "react";
import styled from "styled-components";
import Header from '../Header'
import { Link } from "react-router-dom";
import { useProvideAuth } from "../../../hooks/useAuth";

const Container = styled.div`
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
background: white;
`;

const Title = styled.h2`
  
`;

const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid;
border-radius: 3px;
width: 7%;
`;


const Home = () => {
  const {
    state: { user },
    signout,
  } = useProvideAuth()

  return (
    <Container>
      <Header />
      <Link to="/login">&nbsp;Sign In</Link>
      <Link to='/petForm'>&nbsp;Pet Form</Link>
      <Link to='/emergency'>&nbsp;Emergency</Link>
      <Link to='/adopt'>&nbsp;Swipe</Link>
      {user ? <Button variant='outline-info' id='activate' onClick={() => signout()}>Sign Out</Button> : null}
      
    </Container>
  );
};
export default Home;
