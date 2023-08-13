import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { 
  ContainerBooks, 
  Title, 
  ButtonBack, 
  ContainerForm, 
  Input, 
  InputTextarea, 
  ButtonSubmit 
} from "./styles";

function UpdateBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const yearRef = useRef();
  const titleRef = useRef();
  const bookCoverRef = useRef();  
  const descriptionRef = useRef();

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

  async function handleSubmit(event) {
    event.preventDefault();

    const updateBook = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      year: yearRef.current.value,
      book_cover: bookCoverRef.current.value
    };

    try {
      await API.APIServiceUpdate(`/book/${id}`, updateBook, token);
      navigate("/gallery");
    } catch (error) {
      getBook(id);
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

        <Title>Update Book </Title>
        <center>
          <ButtonBack onClick={handleBack}>Back</ButtonBack>

          {error && (
            <div>No book to show</div>
          )}

          {book && !error && (             
            <ContainerForm onSubmit={handleSubmit}>
              <Input
                  name="title"
                  type="text"
                  defaultValue={book.title}
                  id="title"
                  required
                  ref={titleRef}       
              />

              <br />
              <Input
                  name="book_cover"
                  type="text"
                  defaultValue={book.book_cover}
                  id="book_cover"
                  ref={bookCoverRef}         
              />   

              <br />
              <Input
                  name="year"
                  type="number"
                  defaultValue={book.year}
                  id="year"
                  required
                  ref={yearRef}        
              />              

              <br />
              <InputTextarea
                  name="description"
                  type="text"
                  defaultValue={book.description}
                  id="description"
                  required
                  ref={descriptionRef}          
              />  
              <br />
              <ButtonSubmit>Continue</ButtonSubmit>    
            </ContainerForm>
          )}
        </center>
      </ContainerBooks>
      <Footer />
    </>
  );  
}

export default UpdateBook;