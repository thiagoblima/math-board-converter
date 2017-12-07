# Math Converter
*Converter for educational purposes letting the students quickly convert math's tasks*

Complementary tasks are going to be added here for the students, easily to manage through the student's ID.

## Intro

MEAN Stack Application:

 * *MongoDB v3.4* 
 * *Expressjs v4.16.2* 
 * *Angular 1.x* 
 * *NodeJS v8.9.1 LTS*

## Architecture

The server-side counts with a REST API based architecture, using JWT user authorization for granting access on the client-side, each user receives a JWT TOKEN for a session that may expire for inactivity or in case user logging out. 

The client-side stores the JWT TOKEN on the *local storage* of your browser, an auth-service is provieded on its end.


## Getting Started

1. Create a fork of this repository

2. Make sure you're using a version of Nodejs `>= v7.2.1`.

2. Make sure you've got `ruby x64 architecture`installed.
```
 Mac:

  * Make sure you have brew installed: [`brew link`](https://www.w3.org/TR/html5/)
  * `brew install ruby`
  * `gem install sass`
```
Linux: 
       
 * `sudo apt-get install ruby-ful`
 * `gem install sass`

Windows:

 * Make sure you have ruby installed: ['ruby installer link'](https://rubyinstaller.org/) 

4. Testing ruby

```
$ ruby -v
ruby 2.2.3p173 (2015-08-18 revision 51636) [x64-mingw32]
```

5. Testing sass

```
$ sass -v
Sass 3.4.21 (Selective Steve)
```

6. Installing back-end / server-side dependencies

 * ./

```
$ npm install
``` 

7. Installing front-end / client-side dependencies

 * ./public/

```
$ npm install
``` 

## References

Technologies you are going to see in this project:

1. Front-end

 * [`HTML5`](https://www.w3.org/TR/html5/)
 * [`CSS3`](https://www.w3.org/TR/css-syntax-3/)
 * [`Bootstrap`](http://getbootstrap.com/)
 * [`Java Script ES5`](https://www.w3.org/standards/webdesign/script)
 * [`AngularJS`](https://angularjs.org/)
 * [`GruntJS`](http://gruntjs.com/)
 * [`SASS`](http://sass-lang.com/)
 * [`Compass`](http://compass-style.org/)

2. Back-end

 * [`NodeJS`](https://nodejs.org/en/)
 * [`Express`](http://expressjs.com/)
 * [`MongoDB`](https://www.mongodb.org/)

## Getting started

On the root you can identify the `app.js` and notice the *app* is run on the *public* folder.

The building process also occurs into that folder. **Read** `Gruntfile.js`.

1. Building Process

  * Dev build `npm run dev` build:
    * `uglify`
    * `eslint`
    * `cssmin`
    * `SASS`
    * `dev-deploy`

  * Stage build `npm run prod` build:
    * `uglify`
    * `eslint`
    * `cssmin`
    * `SASS`
    * `stage-deploy`

  * Production build `npm run linter`   
    * `jslint`

3. `node app.js` would start the application loading the back-end server.        
  * `http://localhost:3412` is the default port.
