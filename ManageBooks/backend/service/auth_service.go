package service

import (
	"bookapi/dto"
	"bookapi/repository"
)

func Login(loginDTO dto.LoginDTO) (string, uint64, error) {
	token := ""
	UserID, err := repository.Login(loginDTO)
	if err != nil {
		return token, 1, err
	}

	token, _ = CreateToken(UserID)

	return token, UserID, nil
}
