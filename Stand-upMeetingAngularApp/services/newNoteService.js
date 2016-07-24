/**
 * Created by sagakulk on 7/24/2016.
 */

notesApp.service('newNote', function($http){

    return function(note,cb){
        $http({

            method:'POST',
            url:'http://localhost:3000/createNote',
            data:note
        }).then(function(resp){
            cb(resp);
        });
    }
});