package service

import (
	"bookapi/dto"
	"bookapi/entity"
	"bookapi/repository"
	"crypto/md5"
	"encoding/hex"
	"errors"
	"io"
	"log"

	"github.com/mashingan/smapping"
)

// logica da aplicação

func CreateMd5Hash(text string) string {
	hasher := md5.New()
	_, err := io.WriteString(hasher, text)
	if err != nil {
		panic(err)
	}
	return hex.EncodeToString(hasher.Sum(nil))
}

func GetAllUsers() []dto.UserResponseDTO {
	usersResponse := []dto.UserResponseDTO{}

	users := repository.GetAllUsers()

	for _, user := range users {
		var response dto.UserResponseDTO
		err := smapping.FillStruct(&response, smapping.MapFields(&user))
		if err != nil {
			log.Fatal("failed to map ", err)
		}
		usersResponse = append(usersResponse, response)
	}

	return usersResponse
}

func InsertUser(userDTO dto.RegisterDTO) entity.User {
	user := entity.User{}

	err := smapping.FillStruct(&user, smapping.MapFields(&userDTO))
	if err != nil {
		log.Fatal("failed to map ", err)
		return user
	}

	//user.Password = CreateMd5Hash(user.Password)
	user = repository.InsertUser(user)

	return user
}

func GetUser(userID uint64) (dto.UserProfileDTO, error) {
	userResponse := dto.UserProfileDTO{}

	user, err := repository.GetUser(userID)
	if err != nil {
		log.Fatal("failed to get user ", err)
		return userResponse, errors.New("user do not exists")
	}

	err = smapping.FillStruct(&userResponse, smapping.MapFields(&user))
	if err != nil {
		log.Fatal("failed to map ", err)
		return userResponse, err
	}

	return userResponse, nil
}

func UpdateUser(userDTO dto.UserUpdateDTO) (dto.UserProfileDTO, error) {
	user := entity.User{}
	userResponse := dto.UserProfileDTO{}

	err := smapping.FillStruct(&user, smapping.MapFields(&userDTO))
	if err != nil {
		log.Fatal("failed to map ", err)
		return userResponse, err
	}

	//user.Password = CreateMd5Hash(user.Password)

	user_, err := repository.UpdateUser(user)
	if err != nil {
		log.Fatal("failed to update user ", err)
		return userResponse, errors.New("user do not exists")
	}

	err = smapping.FillStruct(&userResponse, smapping.MapFields(&user_))
	if err != nil {
		log.Fatal("failed to map ", err)
		return userResponse, err
	}

	return userResponse, nil
}

func DeleteUser(userID uint64) error {
	if err := repository.DeleteUser(userID); err == nil {
		return nil
	}
	return errors.New("user do not exists")
}

func IsAllowedToEditUser(userID uint64, _userID uint64) bool {
	return userID == _userID
}
