# Burger

- [Description](#description)
- [Components](#components)
- [Usage](#usage)
- [Installation](#installation)
    - [Requirements](#requirements)
    - [Setup](#setup)
- [Authors](#authors)

## Description

## Components

### MenuStore
MenuStore is a noSQL Database running on mongoDB. It stores all food items available to order.

### BurgerOrderer
The website where customers can order food. The food displayed is retrieved from the MenuStore database. 

When a user places an order, the data is converted and sent in JSON format to a route on BurgerOrderer, which then sends it to an endpoint in the KitchenView component.

### KitchenView
KitchenView is where the data is sent from BurgerOrderer. Kitchenview goes through the data and prints it in KitchenViews Terminal.

## Usage

## Installation

### Requirements

### Setup

## Authors

### [Gabriel Höglund / Gabe-Hog/Gabriel-](https://github.com/Gabe-Hog)
### [Malte Eriksson / Tatte01](https://github.com/Tatte01)
### [Moltas Åkerström / Molake00](https://github.com/Molake00)
### [Maximilian Åberg / MaxiL04](https://github.com/MaxiL04)
### [Oscar Larm / oscar-larm](https://github.com/oscar-larm)
