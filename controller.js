"use strict";

{
    function TodoController() {
        let task1 = {
            task: "Walk the dog.",
            className: ""
        }
        let task2 = {
            task: "Go to the store.",
            className: "complete"
        }
        let task3 = {
            task: "Get gas.",
            className: ""
        }
        let task4 = {
            task: "Wash the car.",
            className: ""
        }
        const vm = this;
        vm.todolist = [task1, task2, task3, task4];
    }

        var fetch = angular.module('todoapp', []);

        fetch.controller('secondController', ['$scope', '$http', function ($scope, $http) {
          $scope.class1 = false;
          $scope.clicked = true;

          $scope.changeStyle = function(){
            $scope.class1 = true;
            $scope.clicked = false;
          }
        }])

    
    angular
        .module("todoapp")
        .controller("TodoController", TodoController);
};
