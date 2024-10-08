staticBurgers = [
    {
        "name":"Fettburgare",
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
        "name":"Gnuttburgare",
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
        "name":"Isterburgare",
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

function renderBurgers(){
    var container = document.getElementById("container")
    container.innerHTML += "<ul id=burgerList>"
    var burgerList = document.getElementById("burgerList")

    getBurgers().forEach(burger => {
        burgerList.innerHTML += "<hr></hr>";
        burgerList.innerHTML += `<form action="/order" method="post" id=${burger["name"]}>`
        burgerContainer = document.getElementById(`${burger["name"]}`)
        burgerContainer.innerHTML += `<h2>${burger["name"]} <input type="checkbox" class="burgerCheckbox" name="burger" value="${burger["name"]}"</input></h2>`
        burgerContainer.innerHTML += `<h4>Ingredients:</h4>`;
        burger["ingredients"].forEach(ingredient => {
        burgerContainer.innerHTML += `<input type="checkbox" class="ingredientCheckbox" name ="ingredients" value = "${ingredient}">${ingredient}</input>`;
            
        });
        burgerContainer.innerHTML += `<br><br>`
        burgerContainer.innerHTML += `<input type="submit" value= "Add to Cart">`
        burgerContainer.innerHTML += `</form>`
    });
    container.innerHTML += "</ul>";

    document.querySelectorAll(".burgerCheckbox").forEach(burgerCheckbox => {
        burgerCheckbox.addEventListener("change", function () {
            const form = this.closest("form");
            const ingredientsCheckboxes = form.querySelectorAll(".ingredientCheckbox");

            ingredientsCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked
            });
        });
    });
}

renderBurgers()