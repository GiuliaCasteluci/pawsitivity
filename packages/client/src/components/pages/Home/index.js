import React from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../../Button";
import useAuth from "../../../hooks/useAuth";
import styled from "styled-components";
import Header from '../Header'
import { Link } from "react-router-dom";

const Container = styled.div`
 
`;

const Title = styled.h2`
`;

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      
    </Container>
  );
};
export default Home;
