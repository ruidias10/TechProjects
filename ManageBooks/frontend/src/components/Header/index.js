import React from "react";
import {
  ContainerLinks,
  Logo,
  ProfileIcon,
  Row,
  ContainerMenu,
  LinkHome,
  ButtonLogout,
  ButtonLogin,
  Button,
} from "./styles";

import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import home from "../../assets/home.svg";

const Header = () => {
  const token = sessionStorage.getItem("token");
  const isLoggedIn = false;
  //const isLoggedIn = token !== null;

  const navigate = useNavigate();

  function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    navigate("/login");
  }

  function login() {
    navigate("/login");
  }

  function gallery() {
    navigate("/gallery");
  }

  function signup() {
    navigate("/signup");
  }  
  

  return (
    <>
      <header>
        <ContainerLinks>
          <LinkHome title="Home Page" to="/">
            <Logo src={home} alt="logo" />
          </LinkHome>
          <ContainerMenu>
            {/*{isLoggedIn ? (*/}
              <>
                <ButtonLogout onClick={logout}>Logout</ButtonLogout>
                <Button onClick={() => navigate("/addbook")}>Add Book</Button>
                <Button onClick={() => navigate("/allusers")}>All Users</Button>
              </>
            {/*) : (*/}
              <>
                <ButtonLogin onClick={login}>Login</ButtonLogin>
                <Button onClick={signup}>Signup</Button>
                <Button onClick={gallery}>Gallery</Button>
              </>
            {/*)}*/}
            <a title="Your Profile" href="/profile">
                  <ProfileIcon src={profile} alt="Profile icon" />
            </a>

          </ContainerMenu>
        </ContainerLinks>
      </header>
      <Row />
    </>
  );
};

export default Header;
