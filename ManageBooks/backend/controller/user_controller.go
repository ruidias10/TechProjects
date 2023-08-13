package controller

import (
	"bookapi/dto"
	"bookapi/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetAllUsers(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "get all users",
		"users":   service.GetAllUsers(),
	})
}

func Register(c *gin.Context) {
	var user dto.RegisterDTO
	err := c.ShouldBind(&user)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	u := service.InsertUser(user)

	c.JSON(200, gin.H{
		"message": "insert user",
		"user":    u,
	})
}

func Profile(c *gin.Context) {
	userID, err := strconv.ParseUint(c.Param("id"), 10, 64)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	_userID, _ := strconv.ParseUint(c.GetString("user_id"), 10, 64)

	if !service.IsAllowedToEditUser(userID, _userID) {
		c.JSON(401, gin.H{
			"message": "you do not have the permission - you are not the owner of this user",
		})
		return
	}

	user, errService := service.GetUser(userID)

	if errService != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   errService.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "select user",
		"user":    user,
	})
}

func UpdateProfile(c *gin.Context) {
	userID, err := strconv.ParseUint(c.Param("id"), 10, 64)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	var user dto.UserUpdateDTO
	errBind := c.ShouldBind(&user)

	if errBind != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   errBind.Error(),
		})
		return
	}

	_userID, _ := strconv.ParseUint(c.GetString("user_id"), 10, 64)

	if !service.IsAllowedToEditUser(userID, _userID) {
		c.JSON(401, gin.H{
			"message": "you do not have the permission - you are not the owner of this user",
		})
		return
	}

	user.ID = userID
	u, errService := service.UpdateUser(user)

	if errService != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   errService.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "update user",
		"user":    u,
	})
}

func DeleteAccount(c *gin.Context) {
	userID, err := strconv.ParseUint(c.Param("id"), 10, 64)

	if err != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   err.Error(),
		})
		return
	}

	_userID, _ := strconv.ParseUint(c.GetString("user_id"), 10, 64)

	if !service.IsAllowedToEditUser(userID, _userID) {
		c.JSON(401, gin.H{
			"message": "you do not have the permission - you are not the owner of this user",
		})
		return
	}

	errService := service.DeleteUser(userID)

	if errService != nil {
		c.JSON(404, gin.H{
			"mensage": "error",
			"error":   errService.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"mensage": "user deleted",
	})
}
