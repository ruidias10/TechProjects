import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { 
  ButtonUpdateUser, 
  ContainerUsers, 
  Title, 
  ContainerInfosUser, 
  ContainerInputs, 
  InputEditUser, 
  InputEditUserDescription, 
  ContainerButtonAdd, 
  ButtonAddUser 
} from "./styles";

const Updateuser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();  
  const passwordRef = useRef();
  const profilePictureRef = useRef();

  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();  

  useEffect(() => {
    getUser(id)
  }, [id]);

  async function getUser(id) {
    try {
      const response = await API.APIServiceGet(`/user/${id}`, token);
      setUser(response.data.user);
    } catch (error) {
      setError(true);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  }


  async function handleUpdateUser(event) {
    event.preventDefault();

    const updateUser = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      profile_picture: profilePictureRef.current.value
    };    

    try {
      await API.APIServiceUpdate(`/user/${id}`, updateUser, token);
      navigate("/allusers");
    } catch (error) {
      getUser(id);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }     
  }    

  function handleBackToUsers() {
    navigate("/allusers");
  }

  return (
    <>
      <Header />
      <ContainerUsers>
      
        {error && (
          <>
            <Title>Update</Title>
            <div>No user to show</div>
            <ButtonAddUser onClick={handleBackToUsers}>Back</ButtonAddUser>
          </>
        )}

        {user && !error && ( 
          <>
          <Title>Update User {user.name}</Title>
          <ContainerInfosUser onSubmit={handleUpdateUser}>
            <ContainerInputs>
              <InputEditUser
                name="name"
                type="text"
                defaultValue={user.name}
                id="name"
                required
                ref={nameRef}
              />

              <InputEditUser
                name="password"
                placeholder="password"
                type="password"
                id="password" 
                required
                ref={passwordRef}
              />

              <InputEditUser
                name="email"
                defaultValue={user.email}
                type="text"
                id="email"
                required
                ref={emailRef}
              /> 

              <InputEditUserDescription
                name="profile_picture"
                defaultValue={user.profile_picture}
                id="profile_picture"
                required
                ref={profilePictureRef}   
              />                          
            </ContainerInputs>
            <ContainerButtonAdd>
              <ButtonAddUser onClick={handleBackToUsers}>Back</ButtonAddUser>
              <ButtonUpdateUser>Update</ButtonUpdateUser>
            </ContainerButtonAdd>
          </ContainerInfosUser>
          </>
        )}
      </ContainerUsers>
      <Footer />
    </>
  );

};

export default Updateuser;
