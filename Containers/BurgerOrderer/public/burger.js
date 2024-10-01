staticBurgers = [
    {
        "name":"fettburgare",
        "ingredients": [
            "Beef Patty",
            "Cheddar Cheese",
            "Letuce",
            "Fried Onion",
            "Dressing",
            "Bacon",
            "Sesame Bread"
        ]
    },
    {
        "name":"gnuttburgare",
        "ingredients": [
            "Beef patty",
            "Cheddar Cheese",
            "Mustard",
            "Ketchup",
            "Pickles",
            "Sesame Bread"
        ]
    },
    {
        "name":"isterburgare",
        "ingredients": [
            "Fried Chicken Patty",
            "Bread",
            "Dressing",
            "Brioche bread"
        ]
    }
];

function getBurgers(){
    return staticBurgers;
};

function renderFrontpage(){
    var container = document.getElementById("container")
    getBurgers().forEach(burger => {
        container.innerHTML += `<h2>${burger["name"]}: <button type="button" onclick="buy('${burger["name"]}')">Add to Cart</button></h2>`
        container.innerHTML += `<h4>Ingredients:</h4>`;
        burger["ingredients"].forEach(ingredient => {
            container.innerHTML += `<li>${ingredient}</li>`;
        });
        container.innerHTML += "<hr></hr>";
    });
    container.innerHTML += "</UL>";
}

renderFrontpage()