/*
 * @number_view.js
 *
 * @description: View Class
 *
 * Math View walksthrough the DOM API fetching the elements
 * to receive data from the model>controller instances.
 *
 * Object Oriented class providing DOM elements 
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
