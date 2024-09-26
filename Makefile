#!/usr/bin/env make

DOCKER_BIN ?= 'docker'
DOCKER_COMPOSE_BIN ?= $(DOCKER_BIN) compose
DOCKER_COMPOSE_RUN = $(DOCKER_COMPOSE_BIN) run --rm --no-deps -u "`id -u`:`id -g`"
DOCKER_COMPOSE_EXEC = $(DOCKER_COMPOSE_BIN) exec
DOCKER_RUN = $(DOCKER_BIN) run --rm
DOCKER_BUILD = DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 $(DOCKER_COMPOSE_BIN) \
	-f compose.build.yml build

APP_SRV = ui

## v=1 - verbose mode
ifeq ($(v),1)
.SHELLFLAGS = -exc
else
.SILENT:
endif

.DEFAULT_GOAL := help

## List available commands
help:
	@grep --color=never -P "^(##|[a-z_/\-]+:)" "$(abspath $(lastword $(MAKEFILE_LIST)))" \
	 | sed ':a ; /##[^\n]*/ {N; s/\n\([^#]\)/|\1/ ; Ta}' \
	 | column -t -s'|' | sed -e 's/^##//' | sed -e 's/\:[^\:]*$$//'

##
## ## Up & run
##

.PHONY: init update env-copy run open stop

init: docker-dev env-copy vendors-install run open
update: vendors-update

## Copy env examples
env-copy:
	cp .env.example .env

## Run project
run:
	$(DOCKER_COMPOSE_BIN) up -d

## Stop project
stop:
	$(DOCKER_COMPOSE_BIN) down

## See logs in console
logs:
	$(DOCKER_COMPOSE_BIN) logs -f


# -----------------------------------------------------------------------------

.PHONY: vendors-install vendors-update sh db-sh

## Install vendors
vendors-install:
	$(DOCKER_COMPOSE_RUN) $(APP_SRV) npm install

## Update vendors
vendors-update:
	$(DOCKER_COMPOSE_RUN) $(APP_SRV) npm update

## Quick shell
sh: app-sh

## Quick app shell
app-sh:
	$(DOCKER_COMPOSE_RUN) -it -u"`id -u`:`id -g`" $(APP_SRV) bash

##
## ## Lint & build
##

.PHONY: lint lint-fix

## Lint sources
lint:
	${DOCKER_COMPOSE_RUN} $(APP_SRV) npm run lint

## Fix lint errors
lint-fix:
	$(DOCKER_COMPOSE_RUN) $(APP_SRV) npm run lint-fix

