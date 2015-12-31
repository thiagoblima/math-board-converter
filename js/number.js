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

  this.setExponential = function(exponentialSet){


    this.exponential = exponentialSet;

  };

};



var test = new TestMath("toExponential", "ToFixed", "toPrecisiom", "toString", "valueOf");

test.setExponential(10);
console.log(test.valueOf() + ": " + JSON.stringify(test));
console.log(test.getExponential());
