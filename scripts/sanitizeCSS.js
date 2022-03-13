const Readline = require('readline');

process.stdin.setEncoding('utf-8');

const reader = Readline.createInterface({
	input: process.stdin,
});
let string = '';
reader.on('line', (line) => {
	string = string + line;
});
reader.on('close', () => {
	if (string.charCodeAt(0) === 0xFEFF) {
		string = string.substring(1);
	}
	process.stdout.write(string);
});
