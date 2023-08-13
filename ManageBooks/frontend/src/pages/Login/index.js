import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {
  ContainerFormLogin,
  FormLogin,
  InputProfile,
  ContainerAllButtons,
  ContainerButton,
  ButtonLogin,
  ButtonRegister,
} from "./styles";


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const [login, setLogin] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    loginUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  async function loginUser(credentials) {
    try {
      const response = await API.APIServicePost("/auth/login", credentials);

      setLogin(true);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.userId);

    } catch (error) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      setLogin(false);
      
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }    
  }

  function registerButton() {
    navigate("/signup");
  }

  return (
    <>
      <Header />
      {login ? (
        <>
          <Navigate to="/gallery" replace={true} />
        </>
      ) : (
        <ContainerFormLogin>
          <ToastContainer />

          <FormLogin onSubmit={handleSubmit}>
            <InputProfile
              placeholder="Email"
              name="email"
              type="text"
              ref={emailRef}
              required
            ></InputProfile>
            <InputProfile
              placeholder="Password"
              name="passwUser"
              type="password"
              ref={passwordRef}
              required
            ></InputProfile>
            <ContainerAllButtons>
              <ContainerButton>
                <ButtonLogin type="submit">Login</ButtonLogin>
              </ContainerButton>
              <ContainerButton>
                <ButtonRegister type="button" onClick={registerButton}>
                  Register
                </ButtonRegister>
              </ContainerButton>
            </ContainerAllButtons>
          </FormLogin>
        </ContainerFormLogin>
      )}
      <Footer />
    </>
  );
};

export default Login;