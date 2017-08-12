# Octocat

Octocat is a CLI for the GitHub.com API. It's great for testing API calls and doing maintenance stuff.

Octocat CLI leverages the [`github`](https://www.npmjs.com/package/github) package to handle API calls. For the complete API reference, visit their [docs](https://mikedeboer.github.io/node-github/).

## Install

- $ `npm i octocat-cli -g`

## Usage

- $ `octocat -e repos -m getForOrg -d '{"org": "canjs"}' --pretty`
	- Get all `repos` for `canjs` org and indent the output.

## Options

```
-V, --version              output the version number
-e, --endpoint [endpoint]  API endpoint, e.g. "repos"
-m, --method [method]      API method, e.g. "getForOrg"
-d, --data [data]          Data payload, e.g {org: 'skunkworks'}
--meta                     Include meta data (headers) in the output
--debug                    Enabled logging
--pretty                   Indent output
-h, --help                 output usage information
```
