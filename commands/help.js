module.exports = function commandForHelp() {
	console.log(
		`
Usage:-
help 		: Prints help for commands
add 		: adds new todo in given syntax
		  -> todo add "Your todo"
remove 		: removes specific todo
		  -> todo remove your_todo_number
show 		: shows all todos
completed  	: chek todo number as completed
			-> todo completed your_todo_number
* We currently does not support any mutiple addition of todo or removel too.
`
	);
};
