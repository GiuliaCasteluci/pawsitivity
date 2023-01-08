import React from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../../Button";
import useAuth from "../../../hooks/useAuth";
import styled from "styled-components";
import Header from '../Header'
import { Link } from "react-router-dom";


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

const Home = () => {
  // const { signout } = useAuth.signout();
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Link to="/login">&nbsp;Sign In</Link>
    </Container>
  );
};
export default Home;

//signout button  <Button Text="Sign Out" onClick={() => [signout(), navigate("/")]}>
        // Sign Out
        // </Button>