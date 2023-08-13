import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ContainerUsers, Title } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import User from "../../components/User";

const Allusers = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
  }, []);  

  async function getUsers(id) {
    try {
      const response = await API.APIServiceGet(`/user/`);
      setUsers(response.data.users);
    } catch (error) {

      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  }    

  function updateUser(id) {
    navigate(`/updateuser/${id}`);
  }

  function deleteUser(id) {
    navigate(`/deleteuser/${id}`);
  }  

  return (
    <>
      <Header />
      <ContainerUsers>
        <ToastContainer />

        <Title>List All Users</Title>
        {users.map((user, index) => (
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            key={index}
            updateUser={updateUser}
            deleteUser={deleteUser}
          />
        ))}
      </ContainerUsers>
      <Footer />
    </>
  );
};

export default Allusers;
