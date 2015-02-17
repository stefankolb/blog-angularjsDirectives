var app = angular.module('myApp', [ ]);

app.controller('appController',
  [ '$scope', function ($scope) {

    $scope.isDialogVisible = false;

    $scope.showDialog = function () {
      $scope.isDialogVisible = true;
    };

    $scope.closeDialog = function () {
      $scope.isDialogVisible = false;
    };

  }]
);
