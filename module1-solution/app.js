(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('TheCheck', TheCheck);

TheCheck.$inject = ['$scope'];
function TheCheck($scope) {
$scope.name = "";

$scope.totalValue = "";

$scope.calculateNumber = function () {
  var totalNameValue = calculatstr($scope.name);
  $scope.totalValue = totalNameValue;
};


function calculatstr(string) {
  var totalStringValue = 0;
  var temp = [];
  var a=0;

 temp = string.split(",");
 console.log(temp);
 console.log(temp.length);
 a=temp.length;

if (string=="") {
  totalStringValue = 'Please enter data first';
}  else if (a<4){
   totalStringValue = 'Enjoy!';
}  else{
   totalStringValue = 'Too much!';
};

  return totalStringValue;
}

};

})();
