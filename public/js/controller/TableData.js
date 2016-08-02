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

   function textFun() {
     vm.val = "Have Fan"; 
     return vm.val.replace(/fan/i, "Fun!");
  }

  function clearExponential(){
     vm.value = "";
     if(vm.value === "-")
     return vm.value.replace(/-/i, "");  
     
  }
 
}
