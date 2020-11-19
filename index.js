var var_names = [];
var var_values = [];
console.clear();
while(true) {
	var line = prompt('\x1b[36m');
	if(line.substr(0, 7) == 'print "' && line[line.length - 1] == '"') {
		console.log('\x1b[37m' + line.slice(7).replace('"', ''));
	} else if(line.substr(0, 2) == '//') {
		// Comment created
	} else if(line.substr(0, 1) == '#') {
		// Comment created
	} else if(line.substr(0, 7) == "print '" && line[line.length - 1] == "'") {
		console.log('\x1b[37m' + line.slice(7).replace("'", ''));
	} else if(line == 'clear()') {
		console.clear();
	}
	else if(line.substr(0, 7) == 'input "' && line[line.length - 1] == '"') {
		prompt('\x1b[37m' + line.slice(7).replace('"', ' ') + '\n');
	} else if(line.substr(0, 7) == "input '" && line[line.length - 1] == "'") {
		prompt('\x1b[37m' + line.slice(7).replace("'", ' ') + '\n');
	} else if(line.substr(0, 4) == 'var ' && line.includes('=') && line[line.indexOf('=') + 1] != ' ') {
		var var_name = line.substring(4, line.indexOf('='));
		var var_value = line.substr(line.indexOf('=') + 1);
		var_names.push(var_name);
		var_values.push(var_value);
	} else if(line.substr(0, 4) == 'var ' && line.includes(' = ') && line[line.indexOf(' = ') + 1] != ' ') {
		var var_name = line.substring(4, line.indexOf('='));
		var var_value = line.substr(line.indexOf('=') + 1);
		var_names.push(var_name);
		var_values.push(var_value);
	} else if(line.substr(0, 4) == 'var ' && line.includes('=')) {
		var var_name = line.substr(4, line.substr(4).indexOf(' '));
		var var_value = line.substr(line.indexOf('=') + 2);
		var_names.push(var_name);
		var_values.push(var_value);
	} else if(line.substr(0, 6) == 'print ' && var_names.includes(line.substr(6))) {
		console.log('\x1b[37m' + var_values[var_names.indexOf(line.substr(6))].split('"').join('').split("'").join(''));
	} else if(line.substr(0, 15) == 'using datetime ') {
    // Errors
		if(line.substr(0, 31) == 'using datetime print date') {
			console.log('\x1b[37m' + new Date().toString().slice(0, date.toString().indexOf(':') - 3));
		} else if(line.substr(0, 31) == 'using datetime print time') {
			console.log('\x1b[37m' + new Date().toString().slice(new Date().toString().indexOf(':') - 3, new Date().toString().indexOf(':') + 6));
		}
	}
}
