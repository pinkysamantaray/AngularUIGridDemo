'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $rootScope) {
    $scope.myData = [];
    
    $scope.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        },
        {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        },
        {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }
    ];
    
    $scope.gridOptions = {
      //enableSorting: true, //default
      enableCellEditOnFocus: true,
      enableFiltering: true, //default: false
      rowHeight : 35, //default: 30
      headerTemplate : '', //default: 'ui-grid-header'
      gridMenuTemplate : '',
      rowTemplate : '', //default:'ui-grid-row'
      footerTemplate : '<div style="text-align: center">@All Rights Reserved!!</div>', //default: 'ui-grid-footer'
      //gridFooterTemplate : '',
      showColumnFooter : true, //default: false
      showGridFooter : true, //default: false
      //showHeader : true //default
      columnDefs: [ 
        { name: 'firstName', displayName : 'FIRST NAME', enableSorting: false },
        { name: 'lastName', displayName : 'LAST NAME' },
        { name: 'company', visible: false },
        { name: 'employed' }
      ],
      columnFooterHeight : 10,
      data: $scope.myData,
      onRegisterApi : function ( gridApi ) {
          $scope.gridApi = gridApi;
          //$scope.gridApi.selection.selectAllRows( $scope.gridApi.grid );
      }
    };
});