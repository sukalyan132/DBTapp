angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

// With the new view caching in Ionic, Controllers are only called
// when they are recreated or on app start, instead of every page change.
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//$scope.$on('$ionicView.enter', function(e) {
//});

// Form data for the login modal
$scope.loginData = {};

// Create the login modal that we will use later
$ionicModal.fromTemplateUrl('templates/login.html', {
  scope: $scope
}).then(function(modal) {
  $scope.modal = modal;
});

// Triggered in the login modal to close it
$scope.closeLogin = function() {
  $scope.modal.hide();
};

// Open the login modal
$scope.login = function() {
  $scope.modal.show();
};

// Perform the login action when the user submits the login form
$scope.doLogin = function() {
  console.log('Doing login', $scope.loginData);

  // Simulate a login delay. Remove this and replace with your login
  // code if using a login system
  $timeout(function() {
    $scope.closeLogin();
  }, 1000);
};
})

.controller('PlaylistsCtrl', function($scope) {
$scope.playlists = [
  { title: 'Reggae', id: 1 },
  { title: 'Chill', id: 2 },
  { title: 'Dubstep', id: 3 },
  { title: 'Indie', id: 4 },
  { title: 'Rap', id: 5 },
  { title: 'Cowbell', id: 6 }
];
  $scope.tdbt         = 213317.37;
  $scope.tdbt2        = 18182.87;
  $scope.tnot         = 27.27;
  $scope.ministries   = 49;
  $scope.nos          = 267;
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
// Home page controller 
.controller('homeCtrl',function($scope,$stateParams){
  // static values for home page
  $scope.tdbt         = 213317.37;
  $scope.tdbt2        = 18182.87;
  $scope.tnot         = 27.27;
  $scope.ministries   = 49;
  $scope.nos          = 267;
})
.controller('consolidatedViewCtrl',function($scope,$rootScope,$stateParams){

})
.controller('dbtOnboardedSchemesCtrl',function($scope,$rootScope,$stateParams){
  $scope.scemesType=1;
  // on type change event fire 
  $scope.changeValuesTypeWise=function(){
    console.log("here");
  }

})
.controller('aadhaarEnabledServicesCtrl',function($scope,$rootScope,$stateParams){
  //Static values for display
  $scope.totalService       = 31;
  $scope.totalBeneficiaries = 17.04;

})
// directive for select box
.directive('convertToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) {
        return parseInt(val, 10);
      });
      ngModel.$formatters.push(function(val) {
        return '' + val;
      });
    }
  };
})