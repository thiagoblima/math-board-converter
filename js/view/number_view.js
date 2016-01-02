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

  var View = [];
      View = {

      math:{
          user: new TestMath(),
          instances:{

            exponential: document.getElementsByClassName("exponential-result")[0],
                  fixed: document.getElementsByClassName("fixed-result")[0],
              precision: document.getElementsByClassName("precision-result")[0],
                 string: document.getElementsByClassName("string-result")[0],
                  value: document.getElementsByClassName("value-result")[0],
                   ceil: document.getElementsByClassName("ceil-result")[0],
                  floor: document.getElementsByClassName("floor-result")[0]

          }
        }
      };


    View.math.user.setExponential(10);
    View.math.user.setFixed(10);
    View.math.user.setPrecision(10.635);
    View.math.user.setString(10);
    View.math.user.setValue(10);
    View.math.user.setCeil(10.899);
    View.math.user.setFloor(10.400);


    View.math.instances['exponential'].innerHTML = View.math.user.getExponential();
    View.math.instances['fixed']. innerHTML = View.math.user.getFixed();
    View.math.instances['precision'].innerHTML = View.math.user.getPrecision();
    View.math.instances['string'].innerHTML = View.math.user.getString();
    View.math.instances['value'].innerHTML = View.math.user.getValue();
    View.math.instances['ceil'].innerHTML = View.math.user.getCeil();
    View.math.instances['floor'].innerHTML = View.math.user.getFloor();


    console.log(View.math.user.getExponential());
