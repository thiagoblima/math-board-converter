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

   vm.textFun = textFun();
   vm.clearExponential = clearExponential();

   function textFun() {
     vm.val = '-'; 
     return vm.val.replace(/-/i, "Play with the values");
   }

   function clearExponential() {
     vm.value = '-';
     return vm.value.replace(/-/i, "Have Fun!");
   }

   
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
 
}
