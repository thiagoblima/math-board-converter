/**
  *@author: Thiago Lima
  *
  *@description: Table controller, responsable for scope object table data,
  *settings and enchancement model view architecture.
  *
  */


app.controller('TableController', TableController);

TableController.$inject = ['$scope'];



function TableController(){

   var vm = this;   

   vm.placeMask = placeMask();
   

   vm.table = {

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
     ],
  
  };

   function placeMask() {
     vm.val = "Have Fan"; 
     return vm.val.replace(/fan/i, "Fun!");
  }
 
}
