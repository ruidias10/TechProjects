# API bookapi
### mod e install
```shell
$ go mod init bookapi
$ go get -u github.com/gin-gonic/gin
$ go get -u github.com/joho/godotenv
$ go get -u gorm.io/driver/mysql
$ go get -u gorm.io/gorm
$ go get -u github.com/mashingan/smapping
$ go get -u github.com/dgrijalva/jwt-go
```

## docker wsl
```shell
$ sudo service docker status
  # * Docker is not running

$ sudo service docker start
  # * Starting Docker: docker

$ sudo service docker status
  # * Docker is running
```

### run docker-compose
```shell
$ docker-compose up
$ docker-compose up --build
$ docker-compose up database
$ docker-compose --env-file backend/.env up --build
$ docker-compose --env-file backend/.env up database phpmyadmin_app app

$ docker-compose down
```

### react environment
```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
$ nvm install node
$ npm install --global yarn

  ➜  via ⬢ v20.5.0 yarn --version
  1.22.19
  ruidias in frontend on  main [✘!?]
  ➜  via ⬢ v20.5.0 node --version
  v20.5.0
  ruidias in frontend on  main [✘!?]
  ➜  via ⬢ v20.5.0 npm --version
  9.8.0
  ruidias in frontend on  main [✘!?]
  ➜  via ⬢ v20.5.0
```

### react
```shell
$ npx create-react-app frontend

$ yarn install 
$ yarn start

$ yarn add axios
$ yarn add react-toastify
$ yarn add react-select
```