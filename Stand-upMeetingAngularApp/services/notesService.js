/**
 * Created by sagakulk on 7/17/2016.
 */

notesApp.service('notesService', function ($http) {

    return function (cb) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/notes'
        }).then(function (resp) {
            cb(resp.data);

        }, function (resp) {
            console.log(resp.status);
            console.log("error occurred");

        });
    }

});