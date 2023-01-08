import React, { useState } from "react";
import Input from "../../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";
import axios from 'axios'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
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

const LabelSignin = styled.label`
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
const Button = styled.button`
`;

const initialState = {
  username: '',
  password: '',
  passwordConfirmation: '',
  email: '',
  isSubmitting: false,
  errorMessage: null,
}
const Register = () => {
  const [data, setData] = useState(initialState)
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleInputChange = (event) => {
    console.log(data)
    console.log(event.target.name)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {

    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    })

    try {
      if (data.password !== data.passwordConfirmation) {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: 'Password and Password Confirmation must be the same.',
        })
      } else {
        axios.post('/signin',
          {
            username: data.username,
            password: data.password,
            email: data.email
          }
        )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // navigate('/')
      }
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error ? error.message || error.statusText : null,
      })
    }

  }

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
          type='password'
          name='passwordConfirmation'
          required
          placeholder="Type your password"
          id='inputPasswordConfirmationRegister'
          onChange={handleInputChange}
        />

        <LabelError>{error}</LabelError>
        <Button Text="register" onClick={handleSubmit}> submit </Button>
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