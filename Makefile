.PHONY: build run


################################################################################
# *NOTE:
# Makefile for building and running a Docker container locally on your machine
################################################################################

build:
	@docker build -t semver-testing --load .
run:
	@docker run --rm -it -p 3000:3000 semver-testing 