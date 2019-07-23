# React-Redux with Sagas

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. 

This project is a movie application similar to a very basic IMDB

## Database Setup

1. Created a database named `saga_movies_weekend`
2. Ran the queries from `database.sql` on the `saga_movies_weekend` database.
3. Created the junction table between the `movies` and `genres` tables

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

### Tags
Added and change movie dramas with Postico.
 
### Movies
Movie images added in public file

### Relationships
Genres can be applied to many different movies. Movies can have multiple genres. 


### Home / List Page

Displays all of the movies in the movie database. When a movie poster is clicked, the user will be brought to the `/details` view.

### Details Page

Shows all details **including genres**, for the selected movie.

The details page has the buttons:

- `Back to List` button, brings the user to the Home Page
- `Edit` button, brings the user to the Edit Page


### Edit Page

This shows:

- an input field (for changing the movie title), for the selected movie.
- a textarea (for changing the movie description)

The details page has the buttons:

- `Cancel` button, brings the user to the Details Page
- `Save` button, updates the title and description in the database and bring the user to the Details Page

