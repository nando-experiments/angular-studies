
var app = angular.module('searchApp', []);

app.controller('searchController', function($scope, $http){
  $scope.pesquisar = function(q) {
    if (q != "" && q != undefined && q.length >= 1) {
      $http.get('http://nandomoreira.me/search.json', { "data" : q }).success(function(data) {
        $scope.posts = data;
      }).error(function(data) {
        console.error('error...');
      });
    } else {
      $scope.posts = [];
    }
  };
});
