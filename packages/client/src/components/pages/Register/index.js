import React, { useState } from "react";
import Input from "../../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styled from "styled-components";
// import Button from "../../../components/Button";

const Container = styled.div`

`;

const Content = styled.div`

`;

const Label = styled.label`
 
`;

const LabelSignin = styled.label`

`;

const labelError = styled.label`
 
`;

const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !password) {
      setError("Please fill in all fields");
      return;
    } else if (email !== emailConf) {
      setError("email does not match");
      return;
    }

    const res = register(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <Container>
      <Label>LOGIN</Label>
      <Content>
      <Input
          type="username"
          placeholder="Type your username"
          value={user}
          onChange={(e) => [setUser(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirm your email"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <labelError>{error}</labelError>
        {/* <Button Text="register" onClick={handleSignup} /> */}
        <LabelSignin>
          already signed up?
          <Strong>
            <Link to="/register">&nbsp;enter</Link>
          </Strong>
        </LabelSignin>
      </Content>
    </Container>
  );
};

export default Register;