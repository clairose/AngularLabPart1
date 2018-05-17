"use strict";

{
    function TodoController() {
        let task1 = {
            task: "Walk the dog.",
            completed: false
        }
        let task2 = {
            task: "Go to the store.",
            completed: true
        }
        let task3 = {
            task: "Get gas.",
            completed: false
        }
        let task4 = {
            task: "Wash the car.",
            completed: false
        }
        const vm = this;
        vm.todolist = [task1, task2, task3, task4];
    }
    angular
        .module("todoapp")
        .controller("TodoController", TodoController);
};
