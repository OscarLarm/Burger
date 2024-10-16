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
- [Testing](#testing)
- [JsDoc](#jsdoc)
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

2. **Go into the project root folder and setup the containers with the makefile script**
    ```bash
    # From Project Root
    make up
    ```

## Usage

## Testing

To test, repeat step 1 from [Installation](#installation), then run
```bash
make test
```

## JsDoc

You can find documentation for functions in [./function_documentation/index.html](./function_documentation/index.html)

## Authors

#### Gabriel Höglund | [Gabe-Hog](https://github.com/Gabe-Hog) / Gabriel-
#### Malte Eriksson | [Tatte01](https://github.com/Tatte01)
#### Moltas Åkerström | [Molake00](https://github.com/Molake00)
#### Maximilian Åberg | [MaxiL04](https://github.com/MaxiL04)
#### Oscar Larm | [oscar-larm](https://github.com/oscar-larm)
