import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../Input'
import useAuth from '../../../hooks/useAuth'


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

const LabelError = styled.label`
  font-size: 14px;
  color: red;
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

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    setSuccess(true)
    setUser('')
  }


  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="./pages/home"> Go To Home</a>
          </p>
        </section>
      ) : (
        <Container>
          <Label>LOGIN</Label>
          <Content onSubmit={handleSubmit}>
            <Input
              type="username"
              placeholder="Type your username"
              value={user}
              onChange={(e) => [setUser(e.target.value), setError("")]}
            />
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
      )
      }
    </>
  )
}

export default Login;