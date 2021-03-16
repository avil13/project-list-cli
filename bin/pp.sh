#!/usr/bin/env bash

# node ./dist/index.js
# node -p -e "const {main} = require('./dist'); main()"

if [ -z $1 ]; then
  node -p -e "const {main} = require('./dist'); main('ls')"
fi

if [ "$1" == "ls" ]; then
  node -p -e "const {main} = require('./dist'); main('ls')"
  GO_TO_PATH=$(node -p -e "require('${HOME}/.project-list.json').lastProjectPath")
  cd $GO_TO_PATH
fi

if [ "$1" == "add" ]; then
  node -p -e "const {main} = require('./dist'); main('add')"
fi

if [ "$1" == "rm" ]; then
  node -p -e "const {main} = require('./dist'); main('rm')"
fi
