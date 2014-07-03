angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.loading = false;
  $scope.link = {};
  $scope.link.url = '';
  $scope.addLink = function(longlink){
    $scope.loading = true;
    Links.post(longlink).then(function(resp){
      $scope.loading = false;
    }).catch(function(error){
      console.log(error);
    });
  };
});