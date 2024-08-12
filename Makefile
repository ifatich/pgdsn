list: 
	@grep '^[^#[:space:]].*:' Makefile

link:
	npm  link --local 
	cd ./test 
	npm  link --local pgdsn
	cd ..

install:
	npm  install

build: 
	npm run build 

watch: 
	npm run watch

next:
	cd ./test && npm  install && npm run dev

publish: 
	npm publish
