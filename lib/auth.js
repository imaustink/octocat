const KeySafe = require('key-safe');
const path = require('path');
const homedir = require('os').homedir();
const inquirer = require('inquirer');
const keySafe = new KeySafe(path.join(homedir, '.github-access-token'));

const createPasswordQuestion = {
	type: 'password',
	name: 'password',
	message: 'Please create a password'
};
const enterPasswordQuestion = {
	type: 'password',
	name: 'password',
	message: 'Please enter your password'
};
const authTokenQuestion = {
	type: 'password',
	name: 'token',
	message: 'Please enter an access token (github.com/settings/tokens)'
};

module.exports = function(pass){
	if(!keySafe.key){
		return inquirer.prompt([authTokenQuestion]).then(({token}) => {
			return inquirer.prompt([createPasswordQuestion]).then(({password}) => {
				keySafe.set(password, token);
				return token;
			});
		});
	}
	if(pass){
		return Promise.resolve(keySafe.unlock(pass));
	}
	return inquirer.prompt([enterPasswordQuestion]).then(({password}) => {
		return keySafe.unlock(password);
	});
};
