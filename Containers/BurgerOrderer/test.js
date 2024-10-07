const { MongoClient } = require('mongodb');
const express = require('express');

async function fetchFoodItems() {
  const client = new MongoClient('mongodb://localhost:27017');
  try {
    await client.connect();
    const db = client.db('MenuStore');
    const foodItems = await db.collection('FoodItems').find().toArray();
    
    return foodItems;
  } finally {
    await client.close();
  }
}


async function fetchAPIDataForItem(item) {
  let apiUrl;

  if (item.type === 'Food') {
    apiUrl = 'https://api.example.com/food';
  } else if (item.type === 'Beverage') {
    apiUrl = 'https://api.example.com/sides';
  } else if (item.type === 'Dessert') {
    apiUrl = 'https://api.example.com/sides';
  } else if (item.type === 'Dessert') {
    apiUrl = 'https://api.example.com/desserts';
  }


  try {
    const response = await axios.get(apiUrl, { params: { itemName: item.name } });
    return { ...item, apiData: response.data };
  } catch (error) {
    console.error(`Error fetching data for ${item.name}:`, error);
    return { ...item, apiData: null }; 
  }
}

async function fetchItemsWithAPIData() {
  const foodItems = await fetchFoodItems();

  const itemsWithAPIData = await Promise.all(foodItems.map(async item => {
    return await fetchAPIDataForItem(item);
  }));

  console.log(itemsWithAPIData);
  return itemsWithAPIData;
}

fetchItemsWithAPIData();
