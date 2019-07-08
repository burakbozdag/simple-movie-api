# simple-movie-api
Node.JS Movie API

# Movies

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | Lists all movies. |
| /api/movies | `POST` | {'title':'String', 'category':'String', 'country':'String', year:Number, director:"id", imdb_score: Number } | Creates a new movie. |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/:movie_id | `PUT` | {'name':'String', 'surname':'String'} | Updates a movie with new info. |
| /api/movies/:movie_id | `DELETE` | Empty | Deletes a movie. |
| /api/movies/top10 | `GET` | Empty | Gets the top 10 movies. |
| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Directors

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/directors | `GET` | Empty | Lists all directors. |
| /api/directors | `POST` | { name: 'String', surname:'String', bio:'String' } | Creates a new director. |
| /api/directors/:director_id | `GET` | Empty | Gets a director. |
| /api/directors/:director_id | `PUT` | {'name':'String', 'surname':'String', 'bio': 'String'} | Updates a director with new info. |
| /api/directors/:director_id | `DELETE` | Empty | Deletes a director. |
| /api/directors/:director_id/best10movie | `GET` | Empty | The director's top 10 films. |

# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'String', password:'String' } | Creates a new user. |
| /authenticate | `POST` | { username: 'String', password:'String' } | Generates a token. |