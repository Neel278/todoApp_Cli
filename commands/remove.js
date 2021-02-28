const fs = require("fs");
const { readTodosFromFile, splitAllTodos } = require("../utility");

module.exports = function commandToRemoveATodo(
	todoIndex,
	fileToReadFrom = "todo.txt",
	callback = () => {}
) {
	readTodosFromFile(fileToReadFrom, function deletingOneTodo(todos) {
		todos = splitAllTodos(todos);
		let deletedItem = todos.splice(todoIndex - 1, 1);
		let todosString = "";
		for (let todo of todos) {
			if (todo) {
				todosString += `${todo}\r\n`;
			}
		}
		fs.writeFile("./todo.txt", todosString, (err) => {
			if (err) console.log(err.message);
		});
		// return deletedItem;
		return callback(deletedItem);
	});
	// console.log(deletedItem, 2);
	// return deletedItem;
};
