import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProvideAuth } from "../../../hooks/useAuth";
import HeaderOptions from "../HeaderOptions";

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
      <HeaderOptions />
      <Link to="/login">&nbsp;Sign In</Link>
      <Button variant='outline-info' onClick={() => signout()}>Sign Out</Button>
    </Container>
  );
};
export default Home;