import React, { useState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import User from "../../components/User";

import { 
  ContainerUsers, 
  Title 
} from "./styles";


const Profile = () => {  
  const [user, setUser] = useState([]);

  const initialized = useRef(false)

  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getUser() 
    }
  }, []);   
  
  async function getUser() {
    try {
      const response = await API.APIServiceGet(`/user/${userId}`, token);
      setUser(response.data.user);
    } catch (error) {

      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  } 
  
  return (
    <>
      <Header />
      <ContainerUsers>
        <ToastContainer />
        <Title>Profile User</Title>

          {!user && (
            <div>Loading...</div>
          )}

          {user && (         
            <User
              id={user.id}
              name={user.name}
              email={user.email}
              profile_picture={user.profile_picture}
              key={1}
            />
          )}     
      </ContainerUsers>
      <Footer />
    </>
  );

};

export default Profile;
