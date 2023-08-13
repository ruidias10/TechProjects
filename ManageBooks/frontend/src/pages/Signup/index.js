import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { 
  ContainerSignup, 
  ContainerForm, 
  InputSignup, 
  TitleSignup, 
  ButtonSubmitSignup 
} from "./styles";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const profilePictureRef = useRef();

  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();

    addUser({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      profile_picture: profilePictureRef.current.value,
    });    
  }

  async function addUser(data) {
    try {
      const path = "/user/";
      await API.APIServicePost(path, data);
      navigate("/login");

    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }    
  }  
  
  return (
    <>
      <Header />
        <ContainerSignup>
          <ToastContainer />

          <TitleSignup>Create your account</TitleSignup>
          <ContainerForm onSubmit={handleSubmit}>
            <InputSignup
                name="name"
                id="name"
                type="text"
                placeholder="name"
                ref={nameRef}
                required        
              />
              <InputSignup
                name="email"
                id="email"
                type="text"
                placeholder="email"
                ref={emailRef}
                required     
              />
              <InputSignup
                name="password"
                id="password"
                type="password"
                placeholder="password"
                ref={passwordRef}  
                required
              /> 
              <InputSignup
                name="profile_picture"
                id="profile_picture"
                type="text"
                placeholder="profile_picture"
                ref={profilePictureRef}
                required        
              />              
            <ButtonSubmitSignup>Continue</ButtonSubmitSignup>         
          </ContainerForm>
        </ContainerSignup>
      <Footer />
    </>
  );
};

export default Signup;
