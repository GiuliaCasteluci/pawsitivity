import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../Input'
import useAuth from '../../../hooks/useAuth'


const Container = styled.div`

`;

const Content = styled.div`
 
`;

const Label = styled.label`

`;

const LabelSignup = styled.label`

`;

const LabelError = styled.label`
 
`;

const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
  
`;


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Please fill in all fields ");
      return;
    }

    const res = login(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <Container>
      <Label>LOGIN</Label>
      <Content>
        <Input
          type="email"
          placeholder="Type your username or email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        {/* <Button Text="Enter" onClick={handleLogin} /> */}
        <LabelSignup>
        Don't have an account yet?
          <Strong>
            <Link to="/register">&nbsp;Register Here</Link>
          </Strong>
        </LabelSignup>
      </Content>
    </Container>
  );
};

export default Login;