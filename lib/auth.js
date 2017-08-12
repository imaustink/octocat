const KeySafe = require('keysafe');
const inquirer = require('inquirer');
const keySafe = new KeySafe('/Users/austin/.github-access-token');

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
	message: 'Please enter an access token'
};

module.exports = function(){
	if(!keySafe.key){
		return inquirer.prompt([authTokenQuestion]).then(({token}) => {
			return inquirer.prompt([createPasswordQuestion]).then(({password}) => {
				keySafe.set(password, token);
				return token;
			});
		});
	}
	return inquirer.prompt([enterPasswordQuestion]).then(({password}) => {
		return keySafe.unlock(password);
	});
};
