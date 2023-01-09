import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Input from '../../Input'
import { setAuthToken } from '../../../utils/axiosConfig'
import { useProvideAuth } from '../../../hooks/useAuth'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  font-family: Poppins-Bold;
  font-size: 30px;
  color: #333;
  line-height: 1.2;
  text-align: center
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

const Button = styled.button`
  
`
const initialState = {
  username: '',
  password: '',
  isSubmitting: false,
  errorMessage: null,
}

const Login = () => {
  const auth = useProvideAuth()
  const [data, setData] = useState(initialState)

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    event.stopPropagation()

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    })

    if (!data.username | !data.password) {
      setError("Please fill in all fields ");
      return;
    }
    try {
      const res = await auth.signin(data.username, data.password)
      setAuthToken(res.token)
      setSuccess(true)
      navigate('/')
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error ? error.message || error.statusText : null,
      })
      setSuccess(false)
    }
  };


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
          <Content>
            <Input
              type="username"
              name="username"
              placeholder="Type your username"
              onChange={handleInputChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleInputChange}
            />
            <LabelError>{error}</LabelError>
            <Button Text="Enter" onClick={handleLogin}> Login </Button>
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