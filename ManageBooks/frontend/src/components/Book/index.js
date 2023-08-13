import React from 'react';

import {
  ImageBook,
  TitleBook,
  ContainerBook,
  ContainerBookImage,
  ButtonDeleteBook,
  ButtonUpdateBook,
  ButtonBack,
  Button,
} from "./styles";

const Book = ({ id, image, title, showInfo, refreshBooks, updateBook, deleteBook, viewBook, confirmDeleteBook }) => {
  const token = sessionStorage.getItem("token");
  
  const isLoggedIn = true;
  //  const isLoggedIn = token !== null;

  function handleUpdateBook(id) {
    updateBook(id)
  }

  function handleDeleteBook(id) {
    deleteBook(id)
  } 

  function handleViewBook(id) {
    viewBook(id)
  }

  function handleConfirmDeleteBook(id) {
    confirmDeleteBook(id)
  } 


  return (
    <>
      <ContainerBook>
          <TitleBook>{title}</TitleBook>
          <ContainerBookImage>
            <ImageBook src={image} />
          </ContainerBookImage>
          <center>
            {showInfo}
            <br/>
            { viewBook && (
              <ButtonBack onClick={() =>handleViewBook(id)}>View book</ButtonBack>
            )}
          </center>
        <center>
          
          {isLoggedIn && (
            <>
              {updateBook ? <ButtonUpdateBook type="button" onClick={() =>handleUpdateBook(id)}>Update</ButtonUpdateBook> : ''}
              {deleteBook ? <ButtonDeleteBook type="button" onClick={() =>handleDeleteBook(id)}>Delete</ButtonDeleteBook> : ''}
              {confirmDeleteBook ? <ButtonDeleteBook type="button" onClick={() =>handleConfirmDeleteBook(id)}>Confirm to delete</ButtonDeleteBook> : ''}
            </>
          )}
        </center>
      </ContainerBook>
    </>
  );
};

export default Book;
