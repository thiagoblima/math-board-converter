/**
  *@author: Thiago Lima
  *
  *@description: General Controllers class, they're separated
  *into sections to get easier and more readable.
  *
  *@name: HeadController, NavController, IntroController,
  *TableController, GuideController.
  *
  */





/**
  *@name: app
  *
  *@description: Controllers import, all of them should
  *be imported underneath.
  *
  */


app.controller('HeadController', HeadController);
app.controller('NavController', NavController);
app.controller('IntroController', IntroController);
app.controller('TableController', TableController);
app.controller('GuideController', GuideController);




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
IntroController.$inject = ['$scope'];
TableController.$inject = ['$scope'];
GuideController.$inject = ['$scope'];



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


 function IntroController($scope){
   $scope.intro = {

     head:{
      title: 'Math Board Coverter'
     },

     header:{
       title: 'Welcome, here you\'re going to find Math conversion easily'
     },

     paragraphs:{
       collumnOne: 'Here\'s your quick and smooth math converter, anytime <span>you</span> want!',
       collumnTwo: 'Get registered and receive the latest math news, anytime <span>you</span> want!',
       collumnThree: 'Share get a lot of discounts on our latest services made for <span>you</span>!'
     }

   };
 }

 function TableController($scope){

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

 }


 function GuideController($scope){

   $scope.guide = {

        header:{
           description: 'Guide: Follow the walkthrough and share:'
        }

   };

 }
