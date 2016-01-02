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
          results:{

            exponential: document.getElementsByClassName("exponential")[0],
                  fixed: document.getElementsByClassName("fixed")[0],
              precision: document.getElementsByClassName("precision")[0],
                 string: document.getElementsByClassName("string")[0],
                  value: document.getElementsByClassName("value")[0],
                   ceil: document.getElementsByClassName("ceil")[0],
                  floor: document.getElementsByClassName("floor")[0]

          },
          setResults:{

            exponential: document.getElementsByName("exponential")[0],
                  fixed: document.getElementsByName("fixed")[0],
              precision: document.getElementsByName("precision")[0],
                 string: document.getElementsByName("string")[0],
                  value: document.getElementsByName("value")[0],
                   ceil: document.getElementsByName("ceil")[0],
                  floor: document.getElementsByName("floor")[0]

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


    View.math.results['exponential'].innerHTML = View.math.user.getExponential();
    View.math.results['fixed'].innerHTML = View.math.user.getFixed();
    View.math.results['precision'].innerHTML = View.math.user.getPrecision();
    View.math.results['string'].innerHTML = View.math.user.getString();
    View.math.results['value'].innerHTML = View.math.user.getValue();
    View.math.results['ceil'].innerHTML = View.math.user.getCeil();
    View.math.results['floor'].innerHTML = View.math.user.getFloor();


    console.log(View.math.user.getExponential());
