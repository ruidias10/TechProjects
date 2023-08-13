import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book from "../../components/Book";

import { 
  ContainerBooks, 
  Title, 
  ButtonBack 
} from "./styles";


function Deletebook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  
  useEffect(() => {
    getBook(id)
  }, [id]);

  async function getBook(id) {
    try {
      const response = await API.APIServiceGet(`/book/${id}`);
      setBook(response.data.book);
    } catch (error) {
      setError(true);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  } 

  async function confirmDeleteBook(id) {
    try {
      await API.APIServiceDelete(`/book/${id}`, token);
      navigate("/gallery");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }    
  }    

  function handleBack() {
    navigate("/gallery");
  }

  return (
    <>
      <Header />
      <ContainerBooks>
        <ToastContainer />

        <Title>Delete Book </Title>
        <center>
          <ButtonBack onClick={handleBack}>Back</ButtonBack>

          {error && (
            <div>No books to show</div>
          )}

          {!book && !error && (
            <div>Loading...</div>
          )} 
          
          {book && !error && (                    
            <Book
              id={book.id}
              image={book.book_cover}
              title={book.title}
              showInfo={book.description}
              confirmDeleteBook={confirmDeleteBook}
              key={1}
            />
          )}          
        </center>
      </ContainerBooks>
      <Footer />
    </>
  );  
}

export default Deletebook;