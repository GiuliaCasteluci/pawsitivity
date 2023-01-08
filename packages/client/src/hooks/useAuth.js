import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import axios from 'axios'

const useAuth = () => {
  const signup = async (username, password, profile_image, email) => {
    try {
      await axios.post(`auth/signup`, {
        username: username,
        password: password,
        profile_image: profile_image,
        email: email
      })
      // return await signin(username, password)
    } catch (error) {
      console.log(error)
      if (error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw error;
      }
    }
  }
};

export default useAuth;