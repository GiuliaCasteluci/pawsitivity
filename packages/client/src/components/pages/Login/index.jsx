import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../../utils/axiosConfig";
import { useProvideAuth } from "../../../hooks/useAuth";
import './style.css'

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
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5"></div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10">
                <div class="wrap d-md-flex">
                  <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                    <div class="text w-100">
                      <h2>Want to adopt a pet </h2>
                      <p>and you don't have an account yet?</p>
                      <Link to="/register">&nbsp;Register Here</Link>
                    </div>
                  </div>
                  <div class="login-wrap p-4 p-lg-5">
                    <div class="d-flex">
                      <div class="w-100">
                        <h3 class="mb-4">Sign In</h3>
                      </div>
                      <div class="w-100"></div>
                    </div>
                    <form action="#" class="signin-form">
                      <div class="form-group mb-3">
                        <label class="label" for="name">
                          Username
                        </label>
                        <input
                          name="username"
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label class="label" for="password">
                          Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="form-control btn btn-primary submit px-3"
                          Text="Enter"
                          onClick={handleLogin}
                        >
                          {" "}
                          Login{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;

// The initialState object contains initial values for the username, password, isSubmitting, and errorMessage fields.
// The useState hook is used to manage the state of the form data and keep track of the input fields, including username and password.
// The useNavigate hook is used to navigate to a different page after a successful login.
// The useProvideAuth hook is used to interact with the authentication service.
// When the component is rendered, it checks if the user is already logged in. 
// If so, it displays a message and a link to the home page. If not, it renders the login form. 
// The form has two input fields, one for the username and one for the password. When the form is submitted,  the handleLogin function is called. 
// This function performs form validation, and if the form is valid, it makes a call to the signin method of the auth object to log the user in. 
// If the login is successful, it sets an authentication token and redirects the user to the home page. 
// If there is an error, it sets the error message to be displayed.