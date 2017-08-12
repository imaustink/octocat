const GitHubApi = require("github");

class GitHub {
	constructor(token, {debug}){
		this.github = new GitHubApi({
			protocol: "https",
			host: "api.github.com",
			headers: {
				// TODO add headers for preview APIs
				"user-agent": "Octocat CLI"
			},
			Promise: require('bluebird'),
			followRedirects: false,
			timeout: 5000,
			debug
		});
		this.github.authenticate({
			type: "token",
			token
		});
	}
	execute(endpoint, method, data){
		return this.github[endpoint][method](data);
	}
}

module.exports = GitHub;




