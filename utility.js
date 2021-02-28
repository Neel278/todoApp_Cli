const fs = require("fs");
module.exports = {
	readTodosFromFile(fileToReadFrom = "todo.txt", callback) {
		fs.readFile(`./${fileToReadFrom}`, "utf8", (err, data) => {
			if (err) console.log(err.message);
			else {
				return callback(data);
			}
		});
	},
	splitAllTodos(todos) {
		return todos.split("\r\n");
	},
	getSpecificTodo(todos, specificTodoIndex) {
		return todos[Number(specificTodoIndex) - 1];
	},
};
