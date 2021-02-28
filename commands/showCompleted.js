const showTodo = require("./show");

module.exports = function commandToShowCompletedTodos() {
	showTodo("completed.txt");
};
