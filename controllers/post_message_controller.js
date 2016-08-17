app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.vw.post = function(message) {
    console.log(message);
    MessagesService.add(message);
    $location.url('/');
  }
})
