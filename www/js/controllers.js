angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    var socket = io('http://127.0.0.1:1337');
    a = socket;
    //socket.on('connect', function(){});
    //socket.on('event', function(data){console.log(data);});
    //socket.on('data', function(data){console.log(data)i;
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    someMode: true
  };
});
