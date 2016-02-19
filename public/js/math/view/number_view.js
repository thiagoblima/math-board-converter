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
                  value: document.getElementsByClassName("valueint")[0],
                   ceil: document.getElementsByClassName("ceil")[0],
                  floor: document.getElementsByClassName("floor")[0],
                  round: document.getElementsByClassName("round")[0],
               absolute: document.getElementsByClassName("absolute")[0]

          },
          setResults:{

            exponential: document.getElementsByName("exponential")[0],
                  fixed: document.getElementsByName("fixed")[0],
              precision: document.getElementsByName("precision")[0],
                 string: document.getElementsByName("string")[0],
                  value: document.getElementsByName("valueint")[0],
                   ceil: document.getElementsByName("ceil")[0],
                  floor: document.getElementsByName("floor")[0],
                  round: document.getElementsByName("round")[0],
               absolute: document.getElementsByName("absolute")[0]

          },
          pushResults:{

            exponential: document.getElementById("exponential"),
                  fixed: document.getElementById("fixed"),
              precision: document.getElementById("precision"),
                 string: document.getElementById("string"),
                  value: document.getElementById("valueint"),
                   ceil: document.getElementById("ceil"),
                  floor: document.getElementById("floor"),
                  round: document.getElementById("round"),
               absolute: document.getElementById("absolute")

          }
        },
        events:{
          exponential:function(exponential){

            View.math.user.setExponential(View.math.setResults.exponential.value);
            exponential = View.math.results.exponential.innerHTML = JSON.stringify([View.math.user.getExponential().toExponential()]);
            if(isNaN(View.math.user.getExponential())){
              exponential = View.math.results.exponential.innerHTML = '0';
            }else{
               apply(this, [exponential]);
            }
          },
          fixed:function(fixed){

            View.math.user.setFixed(View.math.setResults.fixed.value);
            fixed = View.math.results.fixed.innerHTML = JSON.stringify([View.math.user.getFixed().toFixed(2)]);
            if(isNaN(View.math.user.getFixed())){
               fixed = View.math.results.fixed.innerHTML = '0';
            }else{
                apply(this, [fixed]);
            }
          },
          precision:function(precision){

            View.math.user.setPrecision(View.math.setResults.precision.value);
            precision = View.math.results.precision.innerHTML = JSON.stringify([View.math.user.getPrecision().toPrecision()]);
            if(isNaN(View.math.user.getPrecision())){
               precision =  View.math.results.precision.innerHTML = '0';
            }else{
               apply(this, [precision]);
            }
          },
          string:function(string){

            View.math.user.setString(View.math.setResults.string.value);
            string = View.math.results.string.innerHTML = JSON.stringify([View.math.user.getString().toString()]);
            if(View.math.user.getString().toString() === ''){
               string =  View.math.results.string.innerHTML = 'Enter a number.';
            }else{
               apply(this, [string]);
            }
          },
          ceil:function(ceil){

            View.math.user.setCeil(View.math.setResults.ceil.value);
            ceil = View.math.results.ceil.innerHTML = JSON.stringify([View.math.user.getCeil()]);
            return ceil;
          },
          floor:function(floor){

            View.math.user.setFloor(View.math.setResults.floor.value);
            floor = View.math.results.floor.innerHTML = JSON.stringify([View.math.user.getFloor()]);
            return floor;
          },
          round:function(round){

            View.math.user.setRound(View.math.setResults.round.value);
            round = View.math.results.round.innerHTML = JSON.stringify([View.math.user.getRound()]);
            return round;
          },
          absolute:function(absolute){

            View.math.user.setAbs(View.math.setResults.absolute.value);
            absolute = View.math.results.absolute.innerHTML = JSON.stringify([View.math.user.getAbs()]);
            return absolute;
          },
        }
     };
