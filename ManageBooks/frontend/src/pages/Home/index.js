import React, { useEffect, useState } from "react";
import Select from 'react-select'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as  API from "../../services/APIServive";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book from "../../components/Book";

import { 
  ContainerBooks,
  ContainerMenu 
} from "./styles";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [by, setBy] = useState("id");
  const [type, setType] = useState("asc");

  const orderByOptions = [
    { value: 'id', label: 'Id' },
    { value: 'title', label: 'Title' },
    { value: 'year', label: 'Year' }    
  ];
  
  const orderTypeOptions = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }    
  ];  

  useEffect(() => {
    getBooks();
  }, []);


  async function getData(url) {
    try {
      const response = await API.APIServiceGet(url);
      setBooks(response.data.books);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });       
    }
  }

  async function getBooks() {
    await getData("/book/");
  } 
  
  async function handlOrderBy(e) {
    setBy(e.value);
    await getData(`/book/search/${e.value}/${type}`);
  }

  async function handlOrderType(e) {
    setType(e.value);
    await getData(`/book/search/${by}/${e.value}`);
  }

  return (
    <>
      <Header />
      <ContainerMenu>
          Order By: <Select onChange={(e) => handlOrderBy(e)} defaultValue={orderByOptions[0]} options={orderByOptions} />
      </ContainerMenu>

      <ContainerMenu>
          Order Type: <Select onChange={(e) => handlOrderType(e)} defaultValue={orderTypeOptions[0]} options={orderTypeOptions} />
      </ContainerMenu>      
          
                
      <ContainerBooks>
        <ToastContainer />
          {books.map((book, index) => (
            <Book
              id={book.id}
              image={book.book_cover}
              title={book.title}
              showInfo={book.description}
              key={index}
            />
          ))}
      </ContainerBooks>
      <Footer />
    </>
  );
};

export default Home;
