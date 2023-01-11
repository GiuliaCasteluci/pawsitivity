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
