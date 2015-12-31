/****************************************************************
                                                                *
      Author: Thiago Lima                                       *
 Description: Math Test Class Objected Oriented                 *
      Target: Provide a class of Java Script Math's library.    *
   ClassName: Numnber.js                                        *
        Date: 12/31/2015 (Year's Eve)                           *
 Math's list: number.toExponential(2);                          *
              number.toFixed(2);                                *
              number.toPrecision(2);                            *
              number.toString();                                *
              number.valueOf();                                 *
                                                                *
                                                                *
****************************************************************/



/****************************************************************
MainClass and it's instances: Getters and Setters sctructure    *
according to the Object Orinted Pattern.                        *
****************************************************************/



var TestMath = function (exponential, fixed, precision, string, value){
  this.exponential = exponential;
  this.fixed = fixed;
  this.precision = precision;
  this.string = string;
  this.value = value;

  this.getExponential = function(){

    return this.exponential.toExponential();

  };

  this.setExponential = function(exponential){

    this.exponential = exponential;

  };


  this.getFixed = function(){

    return this.fixed.toFixed(2);

  };

  this.setFixed = function(fixed){

    this.fixed = fixed;

  };


  this.getPrecision = function() {

    return this.precision.toPrecision(2);

  };

  this.setPrecision = function(precision){

    this.precision = precision;

  };


  this.getString = function(){

    return this.string.toString();

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


};

//Testing instances and its methods through test Object
//which are being store inside the mathCollection's arrary

var test = new TestMath("toExponential", "ToFixed", "toPrecisiom", "toString", "valueOf");
var prefixes = ["Result"];
var mathCollection = [];


test.setExponential(10);
test.setFixed(10);
test.setPrecision(10.6635);
test.setString(10);
test.setValue(10);


mathCollection.push(test.getExponential());
mathCollection.push(test.getFixed());
mathCollection.push(test.getPrecision());
mathCollection.push(test.getString());
mathCollection.push(test.getValue());


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
