package config

import (
	"bookapi/entity"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Db *gorm.DB

func ConnectDB() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	dbUser := os.Getenv("DB_USERNAME")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbDatabase := os.Getenv("DB_DATABASE")

	dsn := dbUser + ":" + dbPass + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbDatabase + "?charset=utf8mb4&parseTime=True&loc=Local"

	Db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}

	err = Db.AutoMigrate(&entity.User{}, &entity.Book{})
	if err != nil {
		panic("Failed to migrate database!")
	}
	/*
		// para facilitar faz logo o inser do utilizador 1 se ainda não existir
		var isUser entity.User
		if err := Db.First(&isUser, 1).Error; err != nil {
			if err == gorm.ErrRecordNotFound {
				user := entity.User{Name: "Rui Dias", Password: "123abc", Email: "rui.dias10@gmail.com", ProfilePicture: "https://www.rtp.pt", Token: "123"}
				Db.Create(&user)
			}
		}

		// para facilitar faz logo o inser do utilizador 2 se ainda não existir
		// book_service esta a usar book.UserID = 2
		if err := Db.First(&isUser, 2).Error; err != nil {
			if err == gorm.ErrRecordNotFound {
				user := entity.User{Name: "Rui Manuel", Password: "123abc", Email: "rui.manuel@gmail.com", ProfilePicture: "https://www.rtp.pt", Token: "123"}
				Db.Create(&user)
			}
		}

		//user := entity.User{Name: "Rui Dias", Password: "123abc", Email: "rui.dias10@gmail.com", ProfilePicture: "https://www.rtp.pt", Token: "123"}
		//Db.Create(&user)
	*/
}

func CloseDb() {
	db, err := Db.DB()
	if err != nil {
		panic("Failed to close database!")
	}
	db.Close()
}
