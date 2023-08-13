import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import User from "../../components/User";

import { 
  ContainerUsers, 
  ContainerButton,
  ButtonView,
  Title 
} from "./styles";


const Deleteuser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const initialized = useRef(false)

  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();  

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      getUser(id)
    }
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

  async function removeUser(id) {
    try {
      await API.APIServiceDelete(`/user/${id}`, token);

      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      navigate("/login");
    } catch (error) {
      setError(true);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  }

  function backToUsers() {
    navigate("/allusers");
  }    

  return (
    <>
      <Header />
      <ContainerUsers>
        <ToastContainer />

        <Title>Delete User</Title>
        <ContainerButton>
          <ButtonView type="button" onClick={backToUsers}>Back</ButtonView>
        </ContainerButton>
          <p>Before deleting the user, confirm if you have any books. If so, you will need to remove that book first.</p>
        <ContainerButton>
          
        </ContainerButton>        
        
        {error && (
          <div>No user to show</div>
        )}

        {!user && !error && (
          <div>Loading...</div>
        )} 

        {user && !error && (           
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            profile_picture={user.profile_picture}
            key={1}
            removeUser={removeUser}
          />
        )}
      </ContainerUsers>
      <Footer />
    </>
  );

};

export default Deleteuser;
