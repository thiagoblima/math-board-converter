# Math Converter
*Converter for educational purposes letting the students quickly convert math's tasks*

Complementary tasks are going to be added here for the students, easily to manage through the student's ID.

##Architecture

Designed and build with the `NodeJS` architecture on **back-end** having `MongoDB` as **database** providing **API RESTful**.

It counts with the *Superheroic* framework on **front-end** `AngularJS` with the *services and directives purposes*.

##References

Technologies you are going to see in this project:

1. Front-end

 * [`HTML5`](https://www.w3.org/TR/html5/)
 * [`CSS3`](https://www.w3.org/TR/css-syntax-3/)
 * [`Bootstrap`](http://getbootstrap.com/)
 * [`Java Script (pure)`](https://www.w3.org/standards/webdesign/script)
 * [`AngularJS`](https://angularjs.org/)
 * [`GruntJS`](http://gruntjs.com/)
 * [`SASS`](http://sass-lang.com/)
 * [`Compass`](http://compass-style.org/)

2. Back-end

 * [`NodeJS`](https://nodejs.org/en/)
 * [`Express`](http://expressjs.com/)
 * [`MongoDB`](https://www.mongodb.org/)

##Getting started

On the root you can identify the `app.js` and notice the *app* is run on the *public* folder.

The building process also occurs into that folder. **Read** `Gruntfile.js`.

1. Building Process

  * Dev build `grunt dev` is registered
    * `uglify`
    * `JSHint`
    * `cssmin`
    * `SASS`
    * `dev-deploy`

  * Stage build `grunt stage` is unregistered  
    * `uglify`
    * `JSHint`
    * `cssmin`
    * `SASS`
    * `stage-deploy`

  * Production build `grunt production` is unregistered  
    * `uglify`
    * `JSHint`
    * `cssmin`
    * `SASS`
    * `prod-deploy`

2. For public compiling, **not for the build** - `compass`

  * SASS pre-compile process for the source
    * `compass watch path/to/the/themes/`

3. `node app.js` would start the application if everything is fine.        
  * `localhost:3412` is the default port.
