package main

import (
	"bookapi/config"
	"bookapi/controller"
	"bookapi/middleware"

	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST, HEAD, PATCH, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	config.ConnectDB()

	defer config.CloseDb()

	router := gin.Default()

	router.Use(CORSMiddleware())

	v1 := router.Group("/api/v1")
	{
		// Group auth
		auth := v1.Group("/auth")
		{
			auth.POST("/login", controller.Login)
		}

		// Group book
		book := v1.Group("/book")
		{
			//DTO:BookResponseDTO
			book.GET("/", controller.GetAllBooks)                               //OK - AUTH:NO
			book.GET("/:id", controller.GetBook)                                //OK - AUTH:NO
			book.POST("/", middleware.Authorized(), controller.InsertBook)      //OK - AUTH:YES + DTO:BookCreatedDTO(Insert) + DTO:BookResponseDTO(Resposta)
			book.PUT("/:id", middleware.Authorized(), controller.UpdateBook)    //OK - AUTH:YES + OWNER + DTO:BookUpdateDTO(Insert) + DTO:BookResponseDTO(Resposta)
			book.DELETE("/:id", middleware.Authorized(), controller.DeleteBook) //OK - AUTH:YES + OWNER

			book.GET("/search/:by/:type", controller.GetSearch)
		}

		// Group user
		user := v1.Group("/user")
		{
			user.GET("/", controller.GetAllUsers)                                  //OK - AUTH:NO + DTO(Resposta):(ID, NOME, EMAIL)
			user.POST("/", controller.Register)                                    //OK - AUTH:NO + DTO:RegisterDTO(Inserir)
			user.GET("/:id", middleware.Authorized(), controller.Profile)          //OK - AUTH:YES + OWNER + DTO(Resposta):(ID, NOME, EMAIL, PROFILE_PIC)
			user.PUT("/:id", middleware.Authorized(), controller.UpdateProfile)    //OK - AUTH:YES + OWNER + DTO:UserUpdateDTO(Inserir) + DTO(Resposta):(ID, NOME, EMAIL, PROFILE_PIC)
			user.DELETE("/:id", middleware.Authorized(), controller.DeleteAccount) //OK - AUTH:YES + OWNER
		}
	}

	router.Run(":3000")
}
