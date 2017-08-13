const GitHub = require('./lib/github');
const auth = require('./lib/auth');

function stringify(object, pretty){
	if(pretty){
		return JSON.stringify(object, null, '\t');
	}else{
		return JSON.stringify(object);
	}
}

module.exports = function({endpoint, method, data, meta, debug, pretty, pass}){
	auth(pass).then(token => {
		const github = new GitHub(token, {debug});
		return github.execute(endpoint, method, data);
	}).then(result => {
		if(meta){
			process.stdout.write(stringify(result, pretty) + '\n');
		}else{
			process.stdout.write(stringify(result.data, pretty) + '\n');
		}
	});
};
