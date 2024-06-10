install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint . --fix
link:
	sudo npm link
run:
	gendiff __fixtures__/file1.json __fixtures__/file2.json
run-json:
	gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
test: 
	npm test
coverage:
	npx jest --coverage