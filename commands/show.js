const fs = require("fs");
const {
	splitAllTodos,
	getSpecificTodo,
	readTodosFromFile,
} = require("../utility");
const chalk = require("chalk");
const logSymbols = require("log-symbols");

module.exports = function commandToShowAllTodos(
	fileToReadFrom,
	specificTodoIndex
) {
	readTodosFromFile(fileToReadFrom || "todo.txt", function (todos) {
		todos = splitAllTodos(todos);
		if (specificTodoIndex) {
			const specificTodo = getSpecificTodo(todos, specificTodoIndex);
			console.log(logSymbols.success, chalk.green(specificTodo));
		} else {
			showAllTodos(todos);
		}
	});
};

function showAllTodos(todos) {
	let count = 1;
	for (let todo of todos) {
		if (todo) {
			console.log(logSymbols.warning, chalk.blue(`[${count}] ${todo}`));
			count++;
		}
	}
}
