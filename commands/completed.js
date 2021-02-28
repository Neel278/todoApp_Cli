const removeTodo = require("./remove");
const addTodo = require("./add");

module.exports = function commandToCheckmarkATodo(todoIndex) {
	removeTodo(todoIndex, "todo.txt", function (todoToRemove) {
		addTodo(todoToRemove, "completed.txt");
	});
};
