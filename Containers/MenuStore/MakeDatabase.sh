#!/bin/bash
mongoimport --db MenuStore --collection FoodItems --drop --file /MenuStoreData.json --jsonArray