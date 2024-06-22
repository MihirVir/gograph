package graph

import "mihirgql/graph/model"

//go:generate go run github.com/99designs/gqlgen
type Resolver struct {
	users  []*model.User
	musics []*model.Music
}
