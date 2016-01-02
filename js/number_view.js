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

  var Model = [];
      Model = {

      math:{
          user: new TestMath(),
          instances:{
            exponential: document.getElementsByClassName("exponential-result")[0]

          }
       }
    };


    Model.math.user.setExponential(10);
    Model.math.instances['exponential'].innerHTML = Model.math.user.getExponential();

    console.log(Model.math.user.getExponential());
