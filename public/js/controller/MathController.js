/**
  *@author: Thiago Lima
  *
  *@description: General Controllers class, they're separated
  *into sections to get easier and more readable.
  *
  *@name: MathController, HeadController, NavController
  *
  */





/**
  *@name: app
  *
  *@description: Controllers import, all of them should
  *be imported underneath.
  *
  */


app.controller('MathController', MathController);
app.controller('HeadController', HeadController);
app.controller('NavController', NavController);





/**
  *@name: Dependency Injection
  *
  *@description: This is where you just import the
  *dependencies to the $scope, never forget it, otherwise
  *app won't work correctly and may cause a break on the components.
  *
  */


HeadController.$inject = ['$scope'];
NavController.$inject = ['$scope'];
MathController.$inject = ['$scope'];





 function HeadController($scope){
   $scope.header = [
    { settings: {title: "Math Board Converter", subtitle: "Converting all Math's Task" } }
   ];
 }



 function NavController($scope){
   $scope.nav = {
       home:{name:"HOME"},
       blog:{name:"BLOG"},
       photos:{name:"PHOTOS"},
       about:{name:"ABOUT"},
       contact:{name:"CONTACT"}
   };
 }



 function MathController($scope){

  $scope.intro = {

    header:{
      title: 'Welcome, here you\'re going to find Math conversion easily'
    },

    paragraphs:{
      collumnOne: 'Here\'s your quick and smooth math converter, anytime <span>you</span> want!',
      collumnTwo: 'Get registered and receive the latest math news, anytime <span>you</span> want!',
      collumnThree: 'Share get a lot of discounts on our latest services made for <span>you</span>!'
    }

  };

  $scope.table = {

    intro:{
      text: "Math Quick Tasks"
    },

    title: [
       {name: 'Esponential'},
       {name: 'Fixed'},
       {name: 'Precision'},
       {name: 'String'},
       {name: 'Ceil'},
       {name: 'Floor'},
       {name: 'Round'},
       {name: 'Absolute'}
    ]
  };

  $scope.guide = {

       header:{
          description: 'Guide: Follow the walkthrough and share:'
       }

  };

}
