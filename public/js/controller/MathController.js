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



function HeadController($Scope) {

  var vm = this;

  vm.header = [
    {
      settings: {
        title: "Math Board Converter",
        subtitle: "Converting all Math's Task"
      }
    }
  ];
}


function NavController() {

  var vm = this;

  vm.nav = {
    settings: [
      {

        name: 'home',
        color: 'color-1',
        front: 'front',
        back: 'back',
        icon: 'fa fa-home fa-4x'

      },
      {

        name: 'blog',
        color: 'color-2',
        front: 'front',
        back: 'back',
        icon: 'fa fa-align-left fa-4x'

      },
      {

        name: 'photos',
        color: 'color-3',
        front: 'front',
        back: 'back',
        icon: 'fa fa-camera-retro fa-4x'

      },
      {

        name: 'about',
        color: 'color-4',
        front: 'front',
        back: 'back',
        icon: 'fa fa-user fa-4x'

      },
      {

        name: 'contact',
        color: 'color-5',
        front: 'front',
        back: 'back',
        icon: 'fa fa-comments fa-4x'

      }
    ]
  };
}


function IntroController() {

  var vm = this;

  vm.intro = {

    head: {
      title: 'Math Board Coverter'
    },

    header: {
      title: 'Welcome, here you\'re going to find Math conversion easily'
    },

    paragraphs: [

      {
        description: 'Here\'s your quick and smooth math converter, anytime <span>you</span> want!',
        class: 'col-md-4'
      },
      {
        description: 'Get registered and receive the latest math news, anytime <span>you</span> want!',
        class: 'col-md-4'
      },
      {
        description: 'Share get a lot of discounts on our latest services made for <span>you</span>!',
        class: 'col-md-4'
      }

    ]

  };

}



function GuideController() {

  var vm = this;

  vm.guide = {

    header: {
      description: 'Guide: Follow the walkthrough and share:'
    },

    text: [
      {
        name: "study",
        class: 'col-md-4',
        glyphicon: "glyphicon-education",
        description: "Study cases for your career. Get Certified in a year."
      },
      {
        name: "development",
        class: 'col-md-4',
        glyphicon: "glyphicon-stats",
        description: "Constant development and great results in a month."
      },
      {
        name: "business",
        class: 'col-md-4',
        glyphicon: "glyphicon-briefcase",
        description: "The best for your business and newtwork development."
      },
    ]

  };

}
