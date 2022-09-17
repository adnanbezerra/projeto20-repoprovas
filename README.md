# <p align = "center"> Project 19 - DrivenPass </p>

<p align="center">
   <img width="250px" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4dd.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description
That's my 20th project for Driven Education's fullstack web development bootcamp. It's a light-weight API made entirely off of TypeScript, and it's responsible to manage a storage system for tests files, as well as the collect of data divided between subject, professors, cattegories etc. 

## :rocket: Routes

``` yaml
POST /signup:
    - Signup route, so that you may register into the application
    - Gets: { 
        email,
        password
    }
    - Returns: status code 201
```

``` yaml
POST /signin:
    - Login route so that you can receive a new valid token
    - Gets: {
        email,
        password
    }
    - Returns: your JWT token to validate your session
```

``` yaml
POST /new-test:
    - The route with which you can create your test entry. It's validated, so you need to be logged in!
    - Gets: {
        name,
        pdfUrl,
        category,
        discipline,
        teacher
    }
    - Returns: status code 201
```

``` yaml
GET /test-disciplines:
    - The route with which you can get your tests entries. It's validated, so you need to be logged in!
    - Gets: Your authorization via headers
    - Returns: An object with all the tests sorted by categories, teachers and disciplines
```

## 🏁 Running the application

This project was made with [ExpressJS](https://github.com/expressjs/express), so make sure that you have the last [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) stable versions running locally.

First of all, you will need to clone this repository into your machine:

```
git clone https://github.com/adnanbezerra/projeto20-repoprovas.git
```

Then, inside the directory, run this command to install the required dependencies.

```
npm install
```

First, you will have to configure the `.env` file. You have to copy what's inside of `.env.example`, create a `.env` file, paste it and fill in the needed variables. 

Now, you can finally run the server by using this command:
```
npm start
```