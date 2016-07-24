/**
 * Created by sagakulk on 7/17/2016.
 */

notesApp.controller('notesController', function ($scope,notesService) {

    $scope.sort = function () {
        $scope.sortOrder="-"+$scope.sortOrder
    }
    $scope.sortOrder='project'


    notesService(function (data){
        $scope.notes=data;
    });
})




