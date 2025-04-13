# npm-standard-versioning

A project demonstrating the use of `standard-version` for semantic versioning and changelog generation in Node.js projects.

## Features

- Automated version bumping based on commit messages.
- Changelog generation.
- Git tagging for releases.

## Installation

```bash
npm install
```


## Usage

### Bumping Version

Run the following command to bump the version and generate a changelog:

```bash
$ npm run release patch
$ npm run release minor
$ npm run release major
```

### Publishing

After bumping the version, push the changes and publish the package:

```bash
$ git push --follow-tags origin main
```



## Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages to ensure proper versioning.

## License

This project is licensed under the MIT License.