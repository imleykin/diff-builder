install:
	npm install

start:
	npx babel-node -- src/bin/gendiff.js

help:
	npx babel-node -- src/bin/gendiff.js -h

test:
	npm run test

publish:
	npm publish

lint:
	npx eslint .

build:
	npm run build
