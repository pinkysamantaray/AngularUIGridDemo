'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $rootScope, i18nService) {
    $scope.myData = [];
    $scope.countRows =0;
    
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
        },        
        {
            "firstName": "Mark",
            "lastName": "Heck",
            "company": "Orson Quarry",
            "employed": true
        },
        {
            "firstName": "Sue",
            "lastName": "Heck",
            "company": "Spudsy",
            "employed": true
        },        
        {
            "firstName": "Axl",
            "lastName": "Heck",
            "company": "Boss Co.",
            "employed": true
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
      paginationPageSizes: [5, 10, 20],
      paginationPageSize: 5,
      columnDefs: [ 
        { name: 'firstName', displayName : 'FIRST NAME', enableSorting: false, enableCellEdit: false, width: 120 },
        { name: 'lastName', displayName : 'LAST NAME', enableCellEdit: false, width: 120 },
        { name: 'company', visible: true, enableCellEdit: true, width: 150 },
        { name: 'employed', enableCellEdit: true,
           cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (grid.getCellValue(row,col) === true) {
                return 'text-success';
              } else if (grid.getCellValue(row,col) === false) {
                return 'text-warning';
              }
            }
        }
      ],
      columnFooterHeight : 10,
      data: $scope.myData,
      onRegisterApi : function ( gridApi ) {
          $scope.gridApi = gridApi;
          console.log(gridApi.core.on);
          console.log(gridApi.grid);
          gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef){
              
              $scope.$apply();
          })
      }
    };
    
    
      $rootScope.languages = i18nService.getAllLangs();
      $rootScope.currentLanguage = i18nService.getCurrentLang();
      $rootScope.changeLanguage = function(){
          i18nService.setCurrentLang($rootScope.currentLanguage);
      };

});