# Make sure you can run a docker file by using example docker destop 
# Use Makefile Tools Nameable extension
# Make sure to have a make version on youre computer "make --version"
# (Ctrl+Shift+P) to search for "Convert Indentation to Tabs". if you have a problem it might fix it 
# Then "make" in the terminal to start it


all: up down test reset debug

up:
	docker compose -f Containers/compose.yml up --no-attach mongodb

down:
	docker compose -f Containers/compose.yml down

test:
	docker compose -f Containers/compose.yml -f Containers/compose.test.yml up --no-attach mongodb 

reset:
	docker rm -vf menustore burgerorder kitchenview
	docker rmi -f mongo containers-website containers-kitchenview
	docker buildx prune -f

debug: 
	docker compose -f Containers/compose.yml -f Containers/compose.debug.yml up --no-attach mongodb

docs:
	open function_documentation/index.html