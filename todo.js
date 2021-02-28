const funcsAvailable = {
	help: require("./commands/help"),
	add: require("./commands/add"),
	show: require("./commands/show"),
	remove: require("./commands/remove"),
	completed: require("./commands/completed"),
	showCompleted: require("./commands/showCompleted"),
};

function startTheApplication() {
	const cmd = process.argv[2];
	let otherArgvs = process.argv.splice(3);
	otherArgvs = otherArgvs.length > 0 ? otherArgvs : null;
	funcsAvailable[cmd || "help"](otherArgvs);
}

// exports.startTheApplication = startTheApplication;
module.exports = startTheApplication;
