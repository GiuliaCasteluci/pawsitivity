import React from "react";
import styled from "styled-components";
import Header from '../Header'
import { Link } from "react-router-dom";
import { useProvideAuth } from "../../../hooks/useAuth";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: white;
`;

const Title = styled.h2`
  
`;

const Button = styled.button`
`;

const Home = () => {
  const {
    state: { user },
    signout,
  } = useProvideAuth()

  if (!user) {
    return null
  }
  return (
    <Container>
      <Header />
      <Link to="/login">&nbsp;Sign In</Link>
      <Link to='/petForm'>&nbsp;Pet Form</Link>
      <Link to='/emergency'>&nbsp;Emergency</Link>
      <Link to='/adopt'>&nbsp;Swipe</Link>
      <Button variant='outline-info' onClick={() => signout()}>Sign Out</Button>
    </Container>
  );
};
export default Home;
