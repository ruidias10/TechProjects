import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Addbook from "../pages/Addbook";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Allusers from "../pages/Allusers";
import Deleteuser from "../pages/Deleteuser";
import Updateuser from "../pages/Updateuser";
import Updatebook from "../pages/Updatebook";
import Deletebook from "../pages/Deletebook";
import Viewbook from "../pages/Viewbook";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="addbook" element={<Addbook />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Signup />} />
        <Route path="allusers" element={<Allusers />} />
        <Route path="deleteuser/:id" element={<Deleteuser />} />
        <Route path="updateuser/:id" element={<Updateuser />} />
        <Route path="updatebook/:id" element={<Updatebook />} />
        <Route path="deletebook/:id" element={<Deletebook />} />
        <Route path="viewbook/:id" element={<Viewbook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
