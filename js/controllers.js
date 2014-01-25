'use strict';

/* Controllers */

var CCurrencyApp = angular.module('CCurrencyApp', []);

CCurrencyApp.controller('CurrencyListCtrl', function($scope, $http) {
  $http.get('http://www.cryptocoincharts.info/v2/api/listCoins').success(function(data) {
    $scope.currencies = data;
  });

  $scope.orderProp = 'name';
});
