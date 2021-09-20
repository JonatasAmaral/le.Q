<p align="center">
 <a href="#what">What is it</a> •
 <a href="#technologies">Technologies</a> • 
 <a href="#using">Using</a> • 
 <a href="#building">Build yours</a> • 
 <a href="#author">Author</a>
</p>


<p align="center">

  <a href="https://le-q-736db.firebaseapp.com/">
    <img src="https://img.shields.io/github/deployments/JonatasAmaral/le.Q/Production?label=firebase&logo=firebase" />
  </a>
  <a href="https://le-q.vercel.app/">
    <img src="https://img.shields.io/github/deployments/JonatasAmaral/le.Q/Production?label=Vercel&logo=vercel" />
  </a>
  <a href="https://le-q.herokuapp.com/">
    <img src="https://heroku-badge.herokuapp.com/?logo=heroku&app=le-q&svg=1" />
  </a>
  <a href="https://le-q.netlify.app/">
    <img src="https://api.netlify.com/api/v1/badges/2279e641-3103-4387-90ed-81a7b9e5e4d8/deploy-status" alt="Netlify Status" />
  </a>
</p>

<p align="center">
 <img src="https://img.shields.io/github/package-json/dependency-version/JonatasAmaral/le.Q/react?logo=react" />
 <img src="https://img.shields.io/github/package-json/dependency-version/JonatasAmaral/le.Q/typescript?logo=typescript" />
 <img src="https://img.shields.io/github/package-json/dependency-version/JonatasAmaral/le.Q/firebase?logo=firebase&color=gold" />
 <span> • </span>
 <img src="https://img.shields.io/github/package-json/v/JonatasAmaral/le.Q?logo=" />
 <img src="https://img.shields.io/github/license/JonatasAmaral/le.Q" />

</p>


<!-- 
![](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>?style=<STYLE>&logo=<LOGO>&logoColor=red) -->


<h1 align="center">
    Typescript React app:
    <p><b>le.Q</b></p>
</h1>


A webapp for collecting questions for answer live. Created in the [NLW#6](https://nextlevelweek.com/) event.

![banner](https://user-images.githubusercontent.com/8677724/134059698-cea5b16e-360c-4911-80c2-5cddd5ade9c6.png)


<h2 id="what"> What is it </h2>

A React app developed in a online event [NLW#6](https://nextlevelweek.com/) (Next Level Week, 6th edition), by the online programming school [Rocketseat](https://rocketseat.com.br/).

<br />

### What does it do?

* _Large (desktop) size layout only_

* Create rooms by authenticating with Google
* Access rooms by it's code
* View room freely
  - Copy room code on button
  - See all existent questions
  - questions highlights

  - questions like count
* Authenticaded user actions
  - Like other's not open questions

  - _Can't like your own questions_
* Room admin actions
  - Highlight one question at time
    + highlighting is a toggle action. Can undo

    + highlighting one, un-highlight the rest

  - Mark question as answered, closing it
    + definite action, can not be reopened

    + closing un-highlight question and disables this button
  - See question's like count
    + Can not like'm though

  - Delete any question. Then it's gone for good

  - _Don't have access to rooms you create as a user view_
  - _So can't ask questions to your self'_

  - Close rooms
    + Not more access to room with it's code
    + Rooms is not recoverable by user



You can check it running over [here](https://le-q-736db.web.app/)

### What you will find in it

* Loging with other methods
  + Github
  + Apple
  + Microsoft
  + Phone
  + Passwordless email
* Responsiveness
* Unlogin/change account
* Direct share link option
* Dark theme
* Scroll all clients to the just highlighted question
* Allow installing as PWA


<h2 id="using" > Using it </h2>

The most recent state of this project is automatically build to [Vercel](vercel.com) and [Firebase](firebase.com) too.

You can run it at any of those:

* [https://le-q-736db.firebaseapp.com/]()

* [https://le-q.vercel.app/]()

* [https://le-q.herokuapp.com/]()

* [https://le-q.netlify.com/]()


<h2 id="technologies"> Integrated Technologies </h2>

### This project has the following dependencies

production
- [ReactJS](https://reactjs.org)
- [Sass](https://sass-lang.com)
- [Firebase](https://www.npmjs.com/package/firebase)
- [react-inlinesvg](https://www.npmjs.com/package/react-inlinesvg)

development
- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com) or [Npm](https://npmjs.com)
- [classnames](https://www.npmjs.com/package/classnames)

### Toolset usage

* Extensive use of React's State and Context APIs
* Using Effect APIs too.
* Creation of custom Hooks.
* Scss (Sass) for advanced styling.
* A colors "library" scss file.
* Css Flexbox.
* Svg icons as image and inline for dynamics.


<h2 id="building" > Make yourself one of these </h2>

### On github.dev

The fastest to see the code, is making use of new [github.dev](https://github.dev), that allow open a github repo on VS code in the browser.

Just hit `.` (dot) on this repo, and it's done.

Or you can also edit the url, to change github.**com** to github.**dev**

https://github.dev/JonatasAmaral/le.Q.git


It can't run the app though. There is no terminal.
### On Gitpod

The easy way to get your dev enviroment runing it, is clone this repo to a cointainer in the cloud.
If you already have an account:

[![open in gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/JonatasAmaral/le.Q.git)

### On your local machine

To do it locally, you need to install git and NodeJS. I'm using yarn to build, though you can use npm.

```bash
# Clone this repo
$ git clone https://github.com/JonatasAmaral/le.Q.git

# Open folder (rename it before, if you want to)
$ cd le.Q

# Install/update the dependencies
$ yarn

# Or, for npm
$ npm install

# Get local API up in one terminal (make sure to set baseURL in /src/services/api.ts to htts://localhost:3000 for that to work)
$ yarn server

# Run app in a separate terminal
$ yarn dev

# Or
$ npm dev

# Access localhost
http://localhost:3000
```

<br />
<h2 id="author"> About the author </h2>

Thank's and credits to [Diego Fernandes](https://github.com/diego3g) and his team at [Rocketseat](https://rocketseat.com.br/).

<img style="border-radius: 50%; border: 2px solid #ccc; float: left; margin: 1rem 2rem .5rem 1rem" src="https://github.com/JonatasAmaral.png" width="100px;" alt=""/>

### Jonatas Amaral

[![Linkedin Badge](https://img.shields.io/badge/JonatasAmaral-blue?style=flat-round&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonatasamaral/)](https://www.linkedin.com/in/anabrtorres/)
[![Gmail Badge](https://img.shields.io/badge/-jonatasamaral-171717?style=flat-round&logo=artstation&link=https://www.artstation.com/jonatasamaral)](https://www.artstation.com/jonatasamaral)

[![Gmail Badge](https://img.shields.io/badge/-jonatasamaral.pro@gmail.com-c14438?style=flat-round&logo=Gmail&logoColor=white&link=mailto:jonatasamaral.pro@gmail.com)](mailto:anabrtorres19@gmail.com)

<p style="white-space: nowrap">Designer, Computer Engeneering student.<p>
<br style="clear: both; margin-top: 1rem" />

<h2 id="license"> License </h2>

This project is under the [MIT license](https://opensource.org/licenses/MIT).
