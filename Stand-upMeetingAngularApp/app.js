/**
 * Created by sagakulk on 7/17/2016.
 */

var notesApp = angular.module('notes-app',['ngResource', 'ngRoute'])
.config(function($routeProvider){

        $routeProvider.when('/notes',{
            templateUrl:'template/notes.html',
            controller:'notesController'
        });
        $routeProvider.when('/newNote',{
            templateUrl:'template/newnote.html',
            controller:'newNoteController'
        });

        $routeProvider.otherwise({redirectTo:'/notes'});
    });