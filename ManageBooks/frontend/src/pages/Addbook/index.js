import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {
  ContainerBook,
  ContainerInfosBook,
  InputChangeImage,
  ContainerInputs,
  InputEditBookDescription,
  InputEditBook,
  ContainerButtonAdd,
  ButtonAddBook,
} from "./styles";

const Addbook = () => {
  const title = useRef();
  const description = useRef();
  const year = useRef();
  const bookCover = useRef();

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");  


  async function addBook(e) {
    e.preventDefault();

    const newBook = {
      title: title.current.value,
      description: description.current.value,
      year: year.current.value,
    };

    if (bookCover.current.value !== "") {
      newBook.book_cover = bookCover.current.value;
    }

    try {
      await API.APIServicePost(`/book/`, newBook, token);
      navigate("/gallery");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });      
    }
  }

  return (
    <>
      <Header />
      <ContainerBook>
        <ToastContainer />

        <ContainerInfosBook onSubmit={addBook}>
          <ContainerInputs>
            <InputChangeImage
              name="imageBook"
              type="text"
              placeholder="book cover url"
              id="add_book_cover"
              ref={bookCover}
            />
            <InputEditBook
              name="titleBook"
              placeholder="Book title"
              type="text"
              id="add_book_title"
              required
              ref={title}
            />
            <InputEditBookDescription
              name="descriptionBook"
              placeholder="Book description"
              type="text"
              id="add_book_description"
              required
              ref={description}
            />
            <InputEditBook
              name="yearBook"
              placeholder="Book year"
              type="number"
              id="add_book_number"
              required
              ref={year}
            />
          </ContainerInputs>
          <ContainerButtonAdd>
            <ButtonAddBook>Add</ButtonAddBook>
          </ContainerButtonAdd>
        </ContainerInfosBook>
      </ContainerBook>
      <Footer />
    </>
  );
};

export default Addbook;
