#!/bin/bash
mongoimport --db MenuStore --collection FoodItems --drop --file /data/db/MenuStoreData.json --jsonArray