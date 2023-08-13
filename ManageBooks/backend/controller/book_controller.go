package controller

import (
	"bookapi/dto"
	"bookapi/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetAllBooks(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "select all books",
		"books":   service.GetAllBooks(),
	})
}

func GetSearch(c *gin.Context) {
	byStr := c.Param("by")
	typeStr := c.Param("type")

	c.JSON(200, gin.H{
		"message":    "select all books search",
		"searchBy":   byStr,
		"searchType": typeStr,
		"books":      service.GetSearchBooks(byStr, typeStr),
	})
}

func GetBook(c *gin.Context) {
	bookID, err := strconv.ParseUint(c.Param("id"), 10, 64)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	book, errService := service.GetBook(bookID)

	if errService != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   errService.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "select book",
		"book":    book,
	})
}

func InsertBook(c *gin.Context) {
	var book dto.BookCreatedDTO
	err := c.ShouldBind(&book)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	userID, _ := strconv.ParseUint(c.GetString("user_id"), 10, 64)

	b := service.InsertBook(book, userID)

	c.JSON(200, gin.H{
		"message": "insert book",
		"book":    b,
	})
}

func UpdateBook(c *gin.Context) {
	bookID, _ := strconv.ParseUint(c.Param("id"), 10, 64)
	userID, _ := strconv.ParseUint(c.GetString("user_id"), 10, 64)

	if !service.IsAllowedToEditBook(userID, bookID) {
		c.JSON(401, gin.H{
			"message": "you do not have the permission - you are not the owner of this book",
		})
		return
	}

	var book dto.BookUpdateDTO
	errBind := c.ShouldBind(&book)

	if errBind != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   errBind.Error(),
		})
		return
	}

	book.ID = bookID
	b, err := service.UpdateBook(book, userID)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "update book",
		"book":    b,
	})
}

func DeleteBook(c *gin.Context) {
	bookID, _ := strconv.ParseUint(c.Param("id"), 10, 64)
	userID, _ := strconv.ParseUint(c.GetString("user_id"), 10, 64)

	if !service.IsAllowedToEditBook(userID, bookID) {
		c.JSON(401, gin.H{
			"message": "you do not have the permission - you are not the owner of this book",
		})
		return
	}

	err := service.DeleteBook(bookID)
	if err != nil {
		c.JSON(404, gin.H{
			"message": "error",
			"error":   err.Error(),
		})
		return
	}
	c.JSON(200, gin.H{
		"message": "book deleted",
	})
}
