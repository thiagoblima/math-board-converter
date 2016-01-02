/*
 * @number_view.js
 *
 * @description: View Class
 *
 * Math main class which has been built to provide
 * a quicker and refined use of Math's Java Script library.
 *
 * Object Oriented class providing getters and setters for
 * all the instances of objects access and parsing data via JSON.
 */



/**
 * @author: thiagolimasp@live.com (Thiago Lima)
 */

var mathUser = new TestMath(),
    target = document.getElementsByClassName("ceil-result")[0];

    mathUser.setCeil(55.9);
    target.innerHTML = mathUser.getCeil();

    console.log(mathUser.getCeil());
