import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Input";
import { setAuthToken } from "../../../utils/axiosConfig";
import { useProvideAuth } from "../../../hooks/useAuth";

const Container = styled.div`
  box-sizing: border-box;
  background: #fdf9f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #f03d4e;
  border: 1px solid rgba(245, 245, 245, 0.7);
`;

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

const Label = styled.label`
  width: 100%;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  border: 10px solid rgba(245, 245, 245, 0.7);
`;

const LabelSignup = styled.label`
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
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
  `;

const initialState = {
  username: "",
  password: "",
  isSubmitting: false,
  errorMessage: null,
};

const Login = () => {
  const auth = useProvideAuth();
  const [data, setData] = useState(initialState);

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    if (!data.username | !data.password) {
      setError("Please fill in all fields ");
      return;
    }
    try {
      const res = await auth.signin(data.username, data.password);
      setAuthToken(res.token);
      setSuccess(true);
      navigate("/");
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error ? error.message || error.statusText : null,
      });
      setSuccess(false);
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
            <Button Text="Enter" onClick={handleLogin}>
              {" "}
              Login{" "}
            </Button>
            <LabelSignup>
              Don't have an account yet?
              <Strong>
                <Link to="/register">&nbsp;Register Here</Link>
              </Strong>
            </LabelSignup>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Login;
