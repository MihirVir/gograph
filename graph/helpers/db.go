package helpers

import (
	"errors"
	"mihirgql/graph/model"
)

func GetUser(u string, users []*model.User) (*model.User, error) {
	for _, user := range users {
		if user.ID == u {
			return user, nil
		}
	}

	return nil, errors.New("user not found error")
}

func GetUserByName(username string, users []*model.User) bool {
	for _, user := range users {
		if user.Username == username {
			return true
		}
	}
	return false
}

func GetMusicById(musicId string, musics []*model.Music) (*model.Music, error) {
	for _, m := range musics {
		if m.ID == musicId {
			return m, nil
		}
	}
	return nil, errors.New("music not found")
}
