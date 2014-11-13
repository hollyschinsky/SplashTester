angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$timeout) {
    alert("Dash Ctrl");
    /*try{
     navigator.splashscreen.hide();
     } catch (ex) { console.log("navigator.splashscreen is not supported on this platform"); }*/

    $scope.hideSpashScreen = function() {
        alert("Call to hide");
        $timeout(function() {
            try{
                navigator.splashscreen.hide();
            } catch (ex) { console.log("navigator.splashscreen is not supported on this platform"); }
        }, 0);
    };

    document.addEventListener("deviceready", function(e) {
        alert("This Device is ready");
        $timeout(function() {
            $scope.hideSpashScreen();
        }, 2000);
    });

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
