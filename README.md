# Octocat

[![Greenkeeper badge](https://badges.greenkeeper.io/imaustink/octocat.svg)](https://greenkeeper.io/)

Octocat is a CLI for the GitHub.com API. It's great for testing API calls and doing maintenance stuff.

Octocat CLI leverages the [`github`](https://www.npmjs.com/package/github) package to handle API calls. For the complete API reference, visit their [docs](https://mikedeboer.github.io/node-github/).

## Install

- $ `npm i octocat-cli -g`

## Setup
Upon running the first time, Octocat will ask for a [GiHub Access Token](https://github.com/settings/tokens). Once a token is entered, it will ask you to create a password. The token will be encrypted with this password, using `AES192`, and any subsequent runs will only need your password.

## Usage

- $ `octocat -e repos -m getForOrg -d '{"org": "skunkworks"}' --pretty`
	- Get all `repos` for `skunkworks` org and indent the output.

## Options

```
-V, --version              output the version number
-e, --endpoint [endpoint]  API endpoint, e.g. "repos"
-m, --method [method]      API method, e.g. "getForOrg"
-d, --data [data]          Data payload, e.g {org: 'skunkworks'}
-p, --pass [password]      A password to unlock the token file
--meta                     Include meta data (headers) in the output
--debug                    Enabled logging
--pretty                   Indent output
-h, --help                 output usage information
```
