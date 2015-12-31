/****************************************************************
                                                                *
         Author: Thiago Lima                                    *
    Descriptiom: Math Test Class Objected Oriented              *
        Target: Provide a class of Java Script Math's library.  *
     ClassName: Numnber.js                                      *
          Date: 12/31/2015 (Year's Eve)                         *
                                                                *
*****************************************************************/




//Math's list Methods

var number = 10;


number.toExponential(2);
number.toFixed(2);
number.toPrecision(1);
number.toString();
number.valueOf();


/***************************************************************
MainClass and it's instances: Getters and Setters sctructure   *
according to the Object Orinted Pattern.                       *
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


};

//Testing instances and its methods through test Object
//which are being store inside the mathCollection's arrary

var test = new TestMath("toExponential", "ToFixed", "toPrecisiom", "toString", "valueOf");
var mathCollection = [];

test.setExponential(10);
test.setFixed(10);
test.setPrecision(10.6635);

mathCollection.push(test.getExponential());
mathCollection.push(test.getFixed());
mathCollection.push(test.getPrecision());

mathCollection.forEach(function(element, index){
  console.log(index + ": " + element);
});

for(var i = 0; i < mathCollection.length; i++){
  console.log(i + ": " + mathCollection[i]);
}

for (var w in mathCollection){
  console.log(w + ": " + mathCollection[w]);  
}
