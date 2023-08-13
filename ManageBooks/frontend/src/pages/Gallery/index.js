import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book from "../../components/Book";

import { 
  ContainerBooks 
} from "./styles";

const Gallery = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();  

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      const response = await API.APIServiceGet("/book/");
      setBooks(response.data.books);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  }  

  function handleViewBook(id) {
    navigate(`/viewbook/${id}`);
  }

  function handleUpdateBook(id) {
    navigate(`/updatebook/${id}`);
  }  

  function handleDeleteBook(id) {
    navigate(`/deletebook/${id}`);
  }  

  return (
    <>
      <Header />
      <ContainerBooks>
        <ToastContainer />
        
        Gallery
        <center>
          {books.map((book, index) => (
            <Book
              id={book.id}
              image={book.book_cover}
              title={book.title}
              showInfo={book.description}
              refreshBooks={getBooks}
              key={index}
              updateBook={handleUpdateBook}
              deleteBook={handleDeleteBook}
              viewBook={handleViewBook}
            />
          ))}
        </center>
      </ContainerBooks>
      <Footer />
    </>
  );
};

export default Gallery;
