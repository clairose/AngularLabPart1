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
        vm.class1 =false;
        vm.clicked = true;
        vm.changeStyle = function(index){
            let x = vm.todolist[index];
            x.className = "complete";
            vm.todolist[index] = x;
        }
        vm.add = function(newToDo){
            let tasknew = {
                task: newToDo,
                className: ""
            }
            vm.todolist.push(tasknew);
        }
        vm.remove = function(index){
            vm.todolist.splice(index, 1);
        }
    }

    angular
        .module("todoapp")
        .controller("TodoController", TodoController);
};
