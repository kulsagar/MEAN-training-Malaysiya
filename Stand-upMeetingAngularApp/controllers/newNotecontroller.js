/**
 * Created by sagakulk on 7/17/2016.
 */

notesApp.controller('newNoteController', function($scope,newNote){

    $scope.save=function(){
        console.log('Save called!');
        console.log($scope.note);//

       newNote($scope.note,function(resp){
            console.log(resp);
        })
    }
});