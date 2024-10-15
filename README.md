# Burger

This is our project for the BTH course 'Basic Software Engineering - PA1489' from 2024.

## Table of Contents

- [Description](#description)
- [Components](#components)
    - [MenuStore](#menustore)
    - [BurgerOrderer](#burgerorderer)
    - [KitchenView](#kitchenview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Adjustments](#adjustments)
- [Testing](#testing)
- [Contribute](#contribute)
- [Authors/Credits](#authorscredits)

## Description
This is our project for the BTH course 'Basic Software Engineering - PA1489' from 2024.
General summary of this project: Its a food ordering application that is built using modern development techniques such as containers, databases and API's. 
The program componenets are a user interface that retrives the menu from at database and displays it as options and then taking order choices from the user and sending it through api requests to the kitchen in the back for processing, all of which are run in respektive containers. We hope this program can be useful for a small startup burger resturante or any resturante, we also hope that this project can be a base for any future development.



## Components
Each componenet is containerized using Docker. 
The below image shows the structure of the containers and how they send information between them, the /public folder represents the static folder the burgerOrderer uses. The BurgerOrderer retrives the menu from the database Menustore and then sends it to the burger.js file in the public folder to render the food items on the page, when a order has been made it sends it back to the burgerOrderer server which then sends it to the KitchenView.
![image](https://github.com/user-attachments/assets/58703202-25fc-4746-9d21-3601c2ab099a)

### MenuStore
MenuStore is a noSQL Database running on mongoDB. It stores all food items available to order.

The MongoDB Image is on ports: 27017 which is default. 

[MongoDB Docker Official Image](https://hub.docker.com/_/mongo)

### BurgerOrderer
The website where customers can order food run in node.js express. The food displayed is retrieved from the MenuStore database.

When a user places an order, the data is converted and sent in JSON format to a route on BurgerOrderer, which then sends it to an endpoint in the KitchenView component.

### KitchenView
KitchenView is where the data is sent from BurgerOrderer. Kitchenview goes through the data and prints it in KitchenViews Terminal and is also run with node.js express.

## Requirements

- Makefile
- Docker

## Installation

1. **Clone the repository to your local machine. Either with SSH or with HTTPS.**
    
    Clone with ***SSH:***
    ```bash
    git clone git@github.com:oscar-larm/Burger.git
    ```

    Clone with ***HTTPS:***
    ```bash
    git clone https://github.com/oscar-larm/Burger.git
    ```
    <br>

2. **Go into the project root folder in a terminal and setup the containers with the makefile script**
    ```bash
    # From Project Root 
    make up
    ```

## Usage
1. Make sure all containers are running.
```bash
    # From Project Root
    make up
    ```
```
2.Open your browser and go into localhost:3000.

3. All orders made should be displayed in the KitchenView terminal.

## Adjustments 
To change the database containg the menu: 
1. ```bash
   #Reset all containers.. NOTE! This may remove other containers you have in docker. 
   make reset
   
   ```
2. Adjust the MenuStoreData.json found in Burger/Containers/MenuStore/data.
   Rerun step 1 in usage and your menu should be updated. 
## Testing

To test either run the following command in the terminal, which will start the containers and run the test command.
```bash
make test
```
Or run follwoing command in terminal.
```bash
npm test
```
## Contribute

Make an issue after review fork the project and make a pull request.

## Authors/Credits

#### Gabriel Höglund | [Gabe-Hog](https://github.com/Gabe-Hog) / Gabriel-
#### Malte Eriksson | [Tatte01](https://github.com/Tatte01)
#### Moltas Åkerström | [Molake00](https://github.com/Molake00)
#### Maximilian Åberg | [MaxiL04](https://github.com/MaxiL04)
#### Oscar Larm | [oscar-larm](https://github.com/oscar-larm)
