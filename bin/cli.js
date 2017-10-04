#!/usr/bin/env node
const program = require('commander');
const executer = require('../index');
const package = require('../package');

program
	.version(package.version)
	.option(`-e, --endpoint [endpoint]`, `API endpoint, e.g. repos`)
	.option(`-m, --method [method]`, `API method, e.g. getForOrg`)
	.option(`-d, --data [data]`, `Data payload, e.g '{"org": "skunkworks"}'`)
	.option(`-p, --pass [password]`, `A password to unlock the token file`)
	.option(`--meta`, `Include meta data (headers) in the output`)
	.option(`--debug`, `Enabled logging`)
	.option(`--pretty`, `Indent output`)
	.parse(process.argv);

// TODO check all inputs
try{
	if(program.data !== undefined){
		program.data = JSON.parse(program.data);
	}
}catch(err){
	console.error('Failed to parse data argument as JSON!');
	process.exit(1);
}
executer(program);
