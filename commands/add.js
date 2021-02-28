const fs = require("fs");
const chalk = require("chalk");

module.exports = function commandForAddingTodos(
	todo,
	fileToAddDataIn = "todo.txt"
) {
	let messageToShow;
	if (fileToAddDataIn === "todo.txt") {
		messageToShow = chalk.green(`todo ${todo} added successfully`);
	} else {
		messageToShow = chalk.blue(`todo ${todo} checked successfully`);
	}
	fs.appendFile(`./${fileToAddDataIn}`, `${todo}\r\n`, (err) => {
		if (err) console.log(err.message);
		else console.log(messageToShow);
	});
};
