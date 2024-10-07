# make sure to have a make version on youre computer "make --version"
#(Ctrl+Shift+P) to search for "Convert Indentation to Tabs". if you have a problem it might fix it 
#Then "make" in the terminal to start it


all: up down test reset

up:
	docker-compose -f Containers/compose.yml up

down:
	docker-compose -f Containers/compose.yml down

test:
	echo ello

reset:
	docker rm -vf menustore burgerorder kitchenview
	docker rmi -f mongo containers-website containers-kitchenview
	docker builder prune -f