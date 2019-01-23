
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    console.log('page executed')
    

  $http.get("http://techserver.techbuiz.com:8081/api/getAllProducts")
  .then(function(response) {
      console.log('response getAllProducts', response);
      $scope.products = response;
      console.log('products', $scope.products);
  });

});