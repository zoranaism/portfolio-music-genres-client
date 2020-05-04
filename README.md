# :musical_note: Genre Relations :musical_note:

## What this app is about

<!-- :wave:[Check out the deploy version](https://let-and-go.netlify.com/):wave: -->

Genre Relations is a basically a social media/Music Wikipedia network where people can read, discuss, blog, like, share, add musical genres and everything about their influences. It has a great visual display of musical genres and their relations in a form of a manually created dynamic chart. This website is for all music fans and fanatics and it connects all people with the similar musical taste. 

## Table of contents

- [App demo](#App-demo)
- [Technology used](#technology-used)
- [Goals for this project](#goals-for-this-project)
- [User Stories and Wireframe](#user-stories-and-wireframe)
- [Git workflow](#git-workflow)
- [Server-repo](#server-repo)

## App demo

![music-genres-Screenshot1](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/GenrePage.png)
![music-genres-Screenshot2](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/MainPage.png)
![music-genres-Screenshot3](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/ProfilePage.png)


## Technology used

:eyes::point_down: **Click links to see samples in this project** :point_down::eyes:

- [React](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/App.js)
- [Redux](https://github.com/zoranaism/portfolio-music-genres-client/tree/master/src/store)
- [Express](https://github.com/zoranaism/portfolio-music-genres-server/blob/master/index.js)
  - [REST API](https://github.com/zoranaism/portfolio-music-genres-server/blob/master/routers/genre.js)
- [Sequelize](https://github.com/zoranaism/portfolio-music-genres-server/blob/master/models/genre.js)
- [Material-UI](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/pages/Genres/CheckboxesTags.js)
- [Framer Motion](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/pages/pageTransitions.js)
- [SVG](https://github.com/zoranaism/portfolio-music-genres-client/blob/master/src/pages/Genres/RelationLine.js)

:star: _New technology learned during this project_

## Goals for this project

The goal of this project is to build a full-stack app using learned and new technologies independently (see above). I learned new technologies by reading documentations and watching tutorial videos.

- practice full-stack development
- practice learning new technology independently
- apply what we learned in the bootcamp
- showcase development approach of using wireframes and user stories
- practice disciplined [git usage](#git-workflow)

## User Stories and Wireframe

### User stories for this project:

- As a User, I want to be able to Login, SignUp and Logout.
- As a User, I want to be able to see all the music genres and their relations.
- As a User, I want to be able to see specific genre details on that Genre's Page.
- As a User, I want to be able to add new genre.
- As a User, I want to be able to see my profile with all relevant presonal information including liked genres.

### User stories to be added in the future:

- As a User, I want to be able to declare as Admin.
- As a User, I want to be able to make genre favourite.
- As a User, I want to be able to see other Users profiles.
- As a User, I want to be able to like musical genre. 
- As a User, I want to be able to see Artist's profile including genres they belong to.

_This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions, please let me know [here](https://www.linkedin.com/in/zoranaism/)_

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