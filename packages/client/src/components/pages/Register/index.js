import React, { useState } from "react";
import Input from "../../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import { API_URL } from "../../../constants";

const Container = styled.div`
  box-sizing: border-box;
  background: #fdf9f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  // color: #f03d4e;
  border: 1px solid rgba(245, 245, 245, 0.7);
`;

//content inside register form
const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  height: 100%;
  width: 100%;
`;

//register title
const Label = styled.label`
  width: 100%;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  color: #ff4c68;
`;

const LabelSignin = styled.label`
  width: 100%;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
`;

const LabelError = styled.label`
  max-width: 100%;
  padding: 11px 13px;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
`;

const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 1% 1%;
  color: rgb(253, 249, 243);
  font-weight: 600;
  background: #f03d4e;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-top: 0.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;

const initialState = {
  username: "",
  password: "",
  passwordConfirmation: "",
  email: "",
  isSubmitting: false,
  errorMessage: null,
};
const Register = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleInputChange = (event) => {
    console.log(data);
    console.log(event.target.name);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    try {
      if (data.password !== data.passwordConfirmation) {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: "Password and Password Confirmation must be the same.",
        });
      } else {
        axios
          .post(`${API_URL}/auth/signup`, {
            username: data.username,
            password: data.password,
            email: data.email,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        navigate("/");
      }
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error ? error.message || error.statusText : null,
      });
    }
  };

  return (
    <Container>
      <Label>Register</Label>
      <Content>
        <Input
          type="username"
          name="username"
          placeholder="Type your username"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Type your email"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="emailConfirmation"
          placeholder="Confirm your email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Type your password"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          required
          placeholder="Confirm your password"
          id="inputPasswordConfirmationRegister"
          onChange={handleInputChange}
        />

        <LabelError>{error}</LabelError>
        <Button Text="register" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </Button>
        <LabelSignin>
          Already signed up?
          <Strong>
            <Link to="/login">&nbsp;Sign in</Link>
          </Strong>
        </LabelSignin>
      </Content>
    </Container>
  );
};

export default Register;
