angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
            console.log("Dash Ctrl");
    try{
        navigator.splashscreen.hide();
    } catch (ex) { console.log("navigator.splashscreen is not supported on this platform"); }

})

.controller('FriendsCtrl', function($scope, Friends) {
            console.log("Frien Ctrl");
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
            console.log("Detail Ctrl");
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
            console.log("Account Ctrl");
});
