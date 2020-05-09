# :musical_note: Genre Relations :musical_note:

## What this app is about

<!-- :wave:[Check out the deploy version](https://let-and-go.netlify.com/):wave: -->

Genre Relations is a Music Social Network & Music Wikipedia where music lovers can read and save favourite genres, hopefully some day expanded in a Music-Reddit-like Threads. It has a great visual display of musical genres and their relations in a form of a manually created dynamic board that users can interact with. This website is for all music fans and fanatics that want to connects with people with similar musical taste. 

## Table of contents

- [App Demo](#App-demo)
- [Technology](#technology-used)
- [Project Goals](#goals-for-this-project)
- [User Stories / Wireframes](#user-stories-and-wireframe)
- [Git workflow](#git-workflow)
- [Server-repo](#server-repo)

## App Demo

![music-genres-Screenshot1](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/GenrePage.png)
![music-genres-Screenshot2](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/MainPage.png)
![music-genres-Screenshot3](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/ProfilePage.png)


## Technology

:eyes::point_down: **Click links to see samples in this project** :point_down::eyes:

- [React](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/App.js)
- [Redux](https://github.com/zoranaism/portfolio-music-genres-client/tree/master/src/store)
- [Express](https://github.com/zoranaism/portfolio-music-genres-server/blob/master/index.js)
  - [REST API](https://github.com/zoranaism/portfolio-music-genres-server/blob/master/routers/genre.js)
- [Sequelize](https://github.com/zoranaism/portfolio-music-genres-server/blob/master/models/genre.js)
- [Material-UI](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/pages/Genres/CheckboxesTags.js)
- [Framer Motion](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/pages/pageTransitions.js)
- [SVG](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/pages/Genres/RelationLine.js)
- [JS Drag & Drop](https://github.com/zoranaism/portfolio-music-genres-client/blob/readme-update/src/pages/Genres/DraggingBoard.js)

## Project Goals

The goal of this project is to build a full-stack app using learned and new technologies independently (see above). I learned new technologies by reading documentations, googling specific cases and watching tutorials.

- practice full-stack development
- practice learning new technology independently
- apply what we learned in the bootcamp
- showcase development approach of using wireframes and user stories
- practice disciplined [git usage](#git-workflow)

## User Stories / Wireframe / Task Management

### User stories for this project:

- As a User, I want to be able to _Login, SignUp and Logout_.
- As a User, I want to be able to see _all the music genres on the board and their relations_.
- As a User, I want to be able to see _specific genre details on that Genre's Page_.
- As a User, I want to be able to _add new genre_.
- As a User, I want to be able to _see my profile with all relevant presonal information including liked genres_.

### User stories to be added in the future:

- As a User, I want to be able to _declare as Admin_.
- As a User, I want to be able to _see other Users profiles_.
- As a User, I want to be able to _like musical genre_. 
- As a User, I want to be able to _see all Artist's profile including genres they belong to_.
- As a User, I want to be able to and _interact with other Users in a form of private messages_.
- As a User, I want to be able to and _interact with other Users in a for of a Commenting_.
- As a User, I want to be able to and _interact with other Users in a for of a Thread_.

_This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions or any Feedback so far, please let me know [here](https://www.linkedin.com/in/zoranaism/)_

### UML

- Check my Self-Join Many-to-Many Database
![UML](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/UML.png)

### Task management

- Check my Trello Project Page
 ![Trello](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/Trello.png)

## Git workflow

In this project I try to use:

- Good commit messages
- Well named branches
- Pull requests with summaries

#### 👀👇 Click links to view samples of pull requests 👇👀

- [Home Page - Genres Board](https://github.com/zoranaism/portfolio-music-genres-client/pull/1)
- [Single Genre Details Query](https://github.com/zoranaism/portfolio-music-genres-server/pull/4)
- [Profile Query Updated](https://github.com/zoranaism/portfolio-music-genres-server/pull/6)

## Server-repo

The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/zoranaism/portfolio-music-genres-server)