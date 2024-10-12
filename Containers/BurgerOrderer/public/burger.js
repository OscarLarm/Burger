async function getData() {
    var res = await fetch('/database');
    var menu = await res.json()
    return menu
}

async function renderFood(food){
    const menuData = await getData()
    const foodItem = menuData.filter(item => item.type === food);

    var container = document.getElementById("container")
    container.innerHTML += `<ul id=foodList>`
    var foodList = document.getElementById("foodList")
    foodItem.forEach(item => {
        foodList.innerHTML += `<form action="/order" method="post" id="${item.name}">`
        container = document.getElementById(`${item.name}`)
        container.innerHTML += `<h2>${item.name}</h2>`
        container.innerHTML += `<input type="hidden" name="foodItem" value="${item.name}"</input>`
        if (item.ingredients.length !== 0){
            container.innerHTML += `<h4>Ingredients:</h4>`;
            item["ingredients"].forEach(ingredient => {
                container.innerHTML += `<input type="checkbox" name ="ingredients" value = "${ingredient}">${ingredient}</input>`;
            });
        }
        container.innerHTML += `<input type="submit" value= "Buy"></input>`
        container.innerHTML += `</form>`
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

renderFood('burger');
renderFood('salad');
renderFood('sides');
renderFood('drinks');
