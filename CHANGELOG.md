# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.5.2](https://github.com/philopian/npm-standard-versioning/compare/v0.5.1...v0.5.2) (2025-04-13)


### Bug Fixes

* update workflow_run trigger to match the exact name of the release workflow ([23891a4](https://github.com/philopian/npm-standard-versioning/commit/23891a43e1c434df2b45257d5e174b24602fdd4e))

### [0.5.1](https://github.com/philopian/npm-standard-versioning/compare/v0.5.0...v0.5.1) (2025-04-13)


### Bug Fixes

* add workflow_run trigger for release completion ([e062f83](https://github.com/philopian/npm-standard-versioning/commit/e062f83742cce4bf338cbb0acf0129bcc4e54dca))

## [0.5.0](https://github.com/philopian/npm-standard-versioning/compare/v0.4.0...v0.5.0) (2025-04-13)


### Bug Fixes

* remove unnecessary blank lines in README.md ([58d1bc8](https://github.com/philopian/npm-standard-versioning/commit/58d1bc86e8364845904ca47f392f6d491ce31ccb))
* update release event types in publish workflow ([493d8b0](https://github.com/philopian/npm-standard-versioning/commit/493d8b09f9f82601804722cc57877854c66a4997))

## [0.4.0](https://github.com/philopian/npm-standard-versioning/compare/v0.3.0...v0.4.0) (2025-04-13)


### Features

* add /hello route to respond with greeting ([95e2a02](https://github.com/philopian/npm-standard-versioning/commit/95e2a02ab72ebbb80d0225dee7c2c4f7b7099ac9))


### Bug Fixes

* correct response for /something route ([619e996](https://github.com/philopian/npm-standard-versioning/commit/619e996a40c1631b05c2a778f71ac82e6515f466))
* update the /hello response ([fb64ac2](https://github.com/philopian/npm-standard-versioning/commit/fb64ac28e73bae93a3a353bfd22dc930aaa72e4d))

## [0.3.0](https://github.com/philopian/npm-standard-versioning/compare/v0.2.4...v0.3.0) (2025-04-13)


### Bug Fixes

* add dockerfile space ([39ea0d2](https://github.com/philopian/npm-standard-versioning/commit/39ea0d24485b35b1cfe93f586c89c35aad098be3))

### [0.2.4](https://github.com/philopian/npm-standard-versioning/compare/v0.2.3...v0.2.4) (2025-04-13)


### Bug Fixes

* streamline release workflow by improving label handling and updating release notes generation ([e42288e](https://github.com/philopian/npm-standard-versioning/commit/e42288eb22763d49513d1c22731c745a95dda062))
* update release workflow to correctly output new version and changelog content ([3672213](https://github.com/philopian/npm-standard-versioning/commit/36722132571010c2661c08c419e88c134e4eef49))

### [0.2.3](https://github.com/philopian/npm-standard-versioning/compare/v0.2.2...v0.2.3) (2025-04-13)


### Bug Fixes

* update release workflow to improve label handling and streamline release process ([8363e4c](https://github.com/philopian/npm-standard-versioning/commit/8363e4c0199988b852bf0f8c27611b740d704340))

### [0.2.2](https://github.com/philopian/npm-standard-versioning/compare/v0.2.1...v0.2.2) (2025-04-13)


### Bug Fixes

* enhance release workflow to capture and save release notes ([488d517](https://github.com/philopian/npm-standard-versioning/commit/488d517376478df5bf8a3728407706f48641d0d8))

### [0.2.1](https://github.com/philopian/npm-standard-versioning/compare/v0.2.0...v0.2.1) (2025-04-13)


### Bug Fixes

* simplify changelog content escaping in release workflow ([40c992c](https://github.com/philopian/npm-standard-versioning/commit/40c992cb831a6c178fc345aba6817c3e1eee27d1))
* update release workflow to trigger on both created and published events ([ab66914](https://github.com/philopian/npm-standard-versioning/commit/ab6691475cb00762f530c440295d8ae0de0f8859))

## [0.2.0](https://github.com/philopian/npm-standard-versioning/compare/v0.1.0...v0.2.0) (2025-04-13)


### Bug Fixes

* update release workflow to use outputs for version and release type ([f817e1e](https://github.com/philopian/npm-standard-versioning/commit/f817e1e7283609782517e722ee19587892b41124))

## [0.1.0](https://github.com/philopian/npm-standard-versioning/compare/v0.0.4...v0.1.0) (2025-04-13)


### Features

* add Dockerfile and .dockerignore for containerization ([5e59aea](https://github.com/philopian/npm-standard-versioning/commit/5e59aeae396b7e191a03d16cafa3ef4d46a65525))
* add GitHub Actions workflow for building and pushing Docker image on release ([8ac0333](https://github.com/philopian/npm-standard-versioning/commit/8ac03332f8b982277152997f42b20cad1a24517f))
* add Makefile for building and running Docker container locally ([449e365](https://github.com/philopian/npm-standard-versioning/commit/449e36578307e5c59c9301c7b065baf1e3e1a7b2))
* update Node.js version to 22 in GitHub Actions workflow ([a2e44db](https://github.com/philopian/npm-standard-versioning/commit/a2e44dba2acba3b38323d4b5ff6123383d6bfdbd))


### Bug Fixes

* update Dockerfile to use npm instead of pnpm for installation and build ([8b2d925](https://github.com/philopian/npm-standard-versioning/commit/8b2d92507576144d931d02542301d878e51a9499))

### [0.0.4](https://github.com/philopian/npm-standard-versioning/compare/v0.0.3...v0.0.4) (2025-04-13)


### Bug Fixes

* exclude CHANGELOG.md from .gitignore ([bc727eb](https://github.com/philopian/npm-standard-versioning/commit/bc727eb428c3f461d2a5a312acf3dec6042794d8))

### [0.0.3](https://github.com/philopian/npm-standard-versioning/compare/v0.0.2...v0.0.3) (2025-04-13)


### Bug Fixes

* update version bumping instructions in README ([3bae08e](https://github.com/philopian/npm-standard-versioning/commit/3bae08e0a03340e15b62423662bf60169254c037))

### 0.0.2 (2025-04-13)


### Features

* add dist folder ([bb95a33](https://github.com/philopian/npm-standard-versioning/commit/bb95a331fb720f5e32771597d2056cb050f0c435))
* add gitignore ([9bd1fd2](https://github.com/philopian/npm-standard-versioning/commit/9bd1fd26525e56ad520a9193c37737d184bb3f22))
* add init ts file & packages.json ([f24ae41](https://github.com/philopian/npm-standard-versioning/commit/f24ae41328cf918c64ce0dabbd869e12a393d453))
* add readme ([118cca8](https://github.com/philopian/npm-standard-versioning/commit/118cca8ec525e2db40e9d89badeabfa6d2095ff7))
* add rest-client http file ([88625d4](https://github.com/philopian/npm-standard-versioning/commit/88625d42a5ddeea86407c6ba7453fb15574c9206))
