# Burger

This is our project for the BTH course 'Basic Software Engineering - PA1489' from 2024.

- [Description](#description)
- [Components](#components)
- [Usage](#usage)
- [Installation](#installation)
    - [Requirements](#requirements)
    - [Setup](#setup)
- [Authors](#authors)

## Description

## Components
Each component is containerized in Docker containers.

Both BurgerOrderer and KitchenView is running with Express.

### MenuStore
MenuStore is a noSQL Database running on mongoDB. It stores all food items available to order.

The MongoDB Image is on ports: 27017 which is default. 

[MongoDB Docker Official Image](https://hub.docker.com/_/mongo)

### BurgerOrderer
The website where customers can order food. The food displayed is retrieved from the MenuStore database.

When a user places an order, the data is converted and sent in JSON format to a route on BurgerOrderer, which then sends it to an endpoint in the KitchenView component.

### KitchenView
KitchenView is where the data is sent from BurgerOrderer. Kitchenview goes through the data and prints it in KitchenViews Terminal.

## Usage

### Requirements:

- Makefile
- Docker

### Installation:

1. Clone the repository to your local machine. Either with SSH or with HTTPS.
    
    SSH:
    ```bash
    git clone git@github.com:oscar-larm/Burger.git
    ```

    HTTPS:
    ```bash
    git clone https://github.com/oscar-larm/Burger.git
    ```
2. Go into the project root folder and start the containers with the makefile script:
    ```bash
    # From Project Root
    make start
    ```

### Testing:

To test, repeat step 1 from [Installation](#installation), then run
```bash
make test
```

## Authors

### [Gabriel Höglund / Gabe-Hog/Gabriel-](https://github.com/Gabe-Hog)
### [Malte Eriksson / Tatte01](https://github.com/Tatte01)
### [Moltas Åkerström / Molake00](https://github.com/Molake00)
### [Maximilian Åberg / MaxiL04](https://github.com/MaxiL04)
### [Oscar Larm / oscar-larm](https://github.com/oscar-larm)
