var chatApp = angular.module('chatApp', ['ngResource', 'angularMoment', 'ngAnimate']);

chatApp.controller('chatCtrl', ['$scope', '$resource', '$timeout','$http', function($scope, $resource, $timeout,$http) {

  $scope.feedEntries = $resource('/chatusers').query();
  console.log("$scope.feedEntries",$scope.feedEntries)

  
  
  
  $scope.sendData = function () {
  var chat = $scope.chatData;
      console.log(chat);
            $http.get("/chatusers/create?icon=" + chat.name.charAt(0).toUpperCase()  + '&name=' +  chat.name + '&message=' + chat.message).success(function(data) {
              $scope.saveName=true;
			  console.log(data);
			  $scope.chatData.message="";
			  //$scope.items.push(data);
              //console.log($scope.items)
            }).
  error(function(data, status, headers, config) {
    alert(data.summary);
  });
        };

  io.socket.get('/chatusers/subscribe', function(data, jwr) {
  console.log(">>>>>>>>1111>>>>>>>");
    io.socket.on('new_entry', function(entry) {
	 console.log(">>>>>>2222>>>>>>>>>",entry);
	console.log(entry)
      $timeout(function() {
	  console.log(">>>>>>6666>>>>>>>>>",entry);
        $scope.feedEntries.unshift(entry);
      });
    });
  });
}]);
