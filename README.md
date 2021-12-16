# Resources in Database

## User

`user_id`: String

`username`: String

`encrypted_password`: String

`admin`: Boolean

## Like

`remark_id`: String

`user_id`: String

`value`: String

## Remark

`remark_id`: String

`user_id`: String

`text`: String

`color`: String

`time`: Number

`likes`: Number

# Resources in RAM

## Session

`username`: String

`plain_password`: String

# Rest API Endpoints

## User

`get`

`post`

`put`

`delete`

## Like

`get`

`post`

`delete`

## Remark

`get`

`post`

`delete`

## Session

`get`

`post`

`delete`

# Building from Source

WARNING: Connection must be private, both devices need same network

WARNING: If using WSL, you have to `git clone` into a WSL directory, not a Windows directory, for auto reload to work.

1) `git clone git@github.com:Lawrence970/data_bird.git`
2) `npm start` or `expo start`
3) select the 'tunnel' option on the expo sidebar (Metro)
