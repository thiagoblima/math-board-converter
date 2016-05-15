app.controller("MathController", [ '$scope', function($scope){

  $scope.header = {
    title: "Math Board Converter",
    subtitle: "Converting all Math's Task",
  };


  $scope.nav = {
    options:{
      home:{name:"HOME"},
      blog:{name:"BLOG"},
      photos:{name:"PHOTOS"},
      about:{name:"ABOUT"},
      contact:{name:"CONTACT"}
    }
  };

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

}]);
