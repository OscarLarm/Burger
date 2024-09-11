run-database:
	docker compose -f ./Containers/MenuStore/docker-compose.yml up
	docker exec MenuStore 	mongoimport --db MenuStore --collection FoodItems --drop --file /MenuStoreData.json --jsonArray
