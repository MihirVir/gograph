package helpers

import (
	"errors"
	"mihirgql/graph/model"
	"reflect"
)

type Identifier interface {
	*model.Music | *model.Playlist | *model.User
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

func getId[T Identifier](item T) string {
	v := reflect.ValueOf(item).Elem()
	return v.FieldByName("ID").String()
}

func FindById[T Identifier](id string, slices []T) (T, error) {
	for _, item := range slices {
		if getId(item) == id {
			return item, nil
		}
	}
	return nil, errors.New("item not found")
}
