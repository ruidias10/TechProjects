package service

import (
	"bookapi/dto"
	"bookapi/entity"
	"bookapi/repository"
	"errors"
	"log"

	"github.com/mashingan/smapping"
)

// logica da aplicação

func GetAllBooks() []entity.Book {
	return repository.GetAllBooks()
}

func GetSearchBooks(byStr, typeStr string) []entity.Book {

	if byStr != "id" && byStr != "title" && byStr != "year" {
		byStr = "id"
	}

	if typeStr != "asc" && typeStr != "desc" {
		typeStr = "asc"
	}

	return repository.GetSearchBooks(byStr, typeStr)
}

func GetBook(bookID uint64) (entity.Book, error) {
	if book, err := repository.GetBook(bookID); err == nil {
		return book, nil
	}
	return entity.Book{}, errors.New("book do not exists")
}

func InsertBook(bookDTO dto.BookCreatedDTO, userID uint64) dto.BookResponseDTO {
	book := entity.Book{}
	bookResponse := dto.BookResponseDTO{}

	err := smapping.FillStruct(&book, smapping.MapFields(&bookDTO))
	if err != nil {
		log.Fatal("failed to map ", err)
		return bookResponse
	}

	book.UserID = userID
	book = repository.InsertBook(book)

	err = smapping.FillStruct(&bookResponse, smapping.MapFields(&book))
	if err != nil {
		log.Fatal("failed to map to response ", err)
		return bookResponse
	}

	return bookResponse
}

func UpdateBook(bookDTO dto.BookUpdateDTO, userID uint64) (dto.BookResponseDTO, error) {
	book := entity.Book{}
	bookResponse := dto.BookResponseDTO{}

	err := smapping.FillStruct(&book, smapping.MapFields(&bookDTO))
	if err != nil {
		log.Fatal("failed to map ", err)
		return bookResponse, err
	}

	book.UserID = userID
	updatedBook, err := repository.UpdateBook(book)
	if err != nil {
		log.Fatal("failed to map ", err)
		return bookResponse, errors.New("book do not exists")
	}

	err = smapping.FillStruct(&bookResponse, smapping.MapFields(&updatedBook))
	if err != nil {
		log.Fatal("failed to map ", err)
		return bookResponse, err
	}

	return bookResponse, nil
}

func DeleteBook(bookID uint64) error {
	if err := repository.DeleteBook(bookID); err == nil {
		return nil
	}
	return errors.New("book do not exists")
}

func IsAllowedToEditBook(userID uint64, bookID uint64) bool {
	b := repository.GetTheBookUsingID(bookID)
	return userID == b.UserID
}
