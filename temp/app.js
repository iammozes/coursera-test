(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('TheCheck', TheCheck);

TheCheck.$inject = ['$scope'];
function TheCheck($scope) {
  $scope.name = "";
  //var totalNameValue = calculatNumericForString($scope.name);
//  $scope.summary = "hope this helps";
//  $scope.totalValue = 0;

//  $scope.displayNumeric = function () {

//  };
//  $scope.stateOfBeing = "hungry";

//  $scope.sayMessage = function () {
//    return "Yaakov likes to eat healthy snacks at night!";
//  };

//  $scope.LunchCheck = function () {
//  $scope.stateOfBeing = "fed";
//  };

$scope.totalValue = 0;

$scope.displayNumeric = function () {
  var totalNameValue = calculatNumericForString($scope.name);
  $scope.totalValue = totalNameValue;
};


function calculatNumericForString(string) {



  var totalStringValue = 0;
  var temp = [];
  var a=0;
//  for (var i = 0; i < string.length; i++) {
//    totalStringValue += string.charCodeAt(i);
//  }
 temp = string.split(",");
 console.log(temp);
 console.log(temp.length);
 a=temp.length;

 if (a==0) {
  totalStringValue = 'Please enter data first';
}  else if (a<4){
   totalStringValue = 'Enjoy!';
}  else{
   totalStringValue = 'Too much!';
};

//totalStringValue = temp.length;



  return totalStringValue;
}






$scope.performcheck = function () {
  //$scope.name = "wtf";
  $scope.summary = "0";
};

};

})();
