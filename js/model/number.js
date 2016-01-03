/*
 * @number.js
 *
 * @description: Model Class
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

var TestMath = function (exponential, fixed, precision, string, value, ceil, floor, round, abs){

  this.exponential = exponential;
  this.fixed = fixed;
  this.precision = precision;
  this.string = string;
  this.value = value;
  this.ceil = ceil;
  this.floor = floor;
  this.round = round;
  this.abs = abs;


  this.getExponential = function(){

    return this.exponential;

  };

  this.setExponential = function(exponential){

    this.exponential = parseInt(exponential);

  };


  this.getFixed = function(){

    return this.fixed;

  };

  this.setFixed = function(fixed){

    this.fixed = parseInt(fixed);

  };


  this.getPrecision = function() {

    return this.precision;

  };

  this.setPrecision = function(precision){

    this.precision = parseInt(precision);

  };


  this.getString = function(){

    return this.string;

  };

  this.setString = function(string){

    this.string = string;

  };


  this.getValue = function(){

    return this.value.valueOf();

  };

  this.setValue = function(value){

    this.value = value;

  };


  this.getCeil = function(){

    return this.ceil;

  };

  this.setCeil = function(ceil){

    this.ceil = Math.ceil(ceil);

  };


  this.getFloor = function(){

     return this.floor;

  };

  this.setFloor = function(floor){

    this.floor = Math.floor(floor);

  };


  this.getRound = function(){

    return this.round;

  };

  this.setRound = function(round){

    this.round = Math.round(round);

  };



  this.getAbs = function(){

    return this.abs;

  };

  this.setAbs = function(abs){

    this.abs = Math.abs(abs);

  };


};

/**
 * @description: fetching data iteration
 *
 *Setting values and pushing the getInstances into the array,
 *JSON stringify data and iterators runs the collection out.
 */

 var test = new TestMath(),
     prefixes = ["Result"],
     mathCollection = [];

     test.setExponential(10);
     test.setPrecision(10.6635);
     test.setString(10);
     test.setValue(10);
     test.setCeil(11.6);
     test.setFloor(11.6);
     test.setRound(15.8);
     test.setAbs(47);

  mathCollection.push(JSON.stringify([{

      'Exponential': test.getExponential(),
         'Floating': test.getFixed(),
        'Precision': test.getPrecision(),
           'String': test.getString(),
            'Value': test.getValue(),
             'Ceil': test.getCeil(),
            'floor': test.getFloor(),
            'Round': test.getRound(),
         'Absolute': test.getAbs()
      }]
     )
   );

/**
 *@description: iteration on mathCollection
 *
 *Just give you three options by default,
 *Select on the view page an iterator.
 */


mathCollection.forEach(function(element, index){
  console.log(index + ": " + element);
});

for(var i = 0; i < mathCollection.length; i++){
  for(var x = 0; x < prefixes.length; x++ ){
     console.log(prefixes[x] + " " + i + ": " + mathCollection[i]);
  }
}

for (var w in mathCollection){
  console.log(w + ": " + mathCollection[w]);
}
