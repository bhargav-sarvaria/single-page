 (function(){
'use-strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope){
     $scope.message = '';
     $scope.inputText = '';

     $scope.generate = function(){
       var foodArray = $scope.inputText.split(',')
       if(isBlank($scope.inputText)){
         $scope.message = 'Please enter data first';
       }else if(foodArray.length > 0 && foodArray.length <= 3){
         $scope.message = 'Enjoy!';
       }else if(foodArray.length > 3){
         $scope.message = 'Too much!';
       }
     }

     var isBlank = function(text){
       if(text == null){
         return true;
       }else if(text == ''){
         return true;
       }else{
         return false;
       }
     }

   }
 })();
