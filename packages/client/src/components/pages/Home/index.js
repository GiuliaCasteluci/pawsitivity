import React from "react";
import styled from "styled-components";
import Header from '../Header'
import { Link } from "react-router-dom";
import { useProvideAuth } from "../../../hooks/useAuth";
import HeaderOptions from '../HeaderOptions';

const HeaderContainer = styled.div`
`

// sign and signout container
const Container = styled.div`
display: block;
color: white;
text-decoration: none;
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
    <HeaderContainer>
      <Container>
      <Link to="/login">&nbsp;Sign In</Link>
      {user ? <Button variant='outline-info' id='activate' onClick={() => signout()}>Sign Out</Button> : null}
    </Container>
    </HeaderContainer>
    
  );
};
export default Home;