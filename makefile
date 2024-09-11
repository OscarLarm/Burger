run-database:
	docker compose -f ./Containers/MenuStore/docker-compose.yml up -d
	docker exec MenuStore 	mongoimport --db MenuStore --collection StoreItems --file /MenuStoreData.json --jsonArray
