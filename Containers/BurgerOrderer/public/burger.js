/**
 * Fetches all data from the /database route with GET.
 * @function
 * @async
 * @returns Data parsed from json to js object.
 */
async function getData() {
    var res = await fetch('/database');
    var menu = await res.json()
    return menu
}
/**
 * Used to generate the forms that send order data from the burgerOrderer site.
 * Reads all data from the getData() function, then creates a new array containing only the objects with the key-value of "type": "argument".
 * It then create a HTML form with input fields for the key "name" and "ingredients" if the values exist.
 * @function
 * @param {string} food - The value from the key "type".
 * @async
 * @example
 * renderFood('burger')
 * <form action="/order" method="post" id="Original Chicken Burger">
 * <h2>Original Chicken Burger</h2>
 * <input type="hidden" name="foodItem" value="Original Chicken Burger"></input>
 * <input type="submit" value="Buy">
 * </form>
 */
async function renderFood(food){
    const menuData = await getData()
    const foodItem = menuData.filter(item => item.type === food);

    var container = document.getElementById("container")
    container.innerHTML += `<ul id=foodList>`
    var foodList = document.getElementById("foodList")
    foodItem.forEach(item => {
        foodList.innerHTML += `<form action="/order" method="post" id="${item.name}">`
        container = document.getElementById(`${item.name}`)
        container.innerHTML += `<h2>${item.name}<input type="checkbox" class="burgerCheckbox" name="foodItem" value="${item.name}"</input></h2>`
        if (item.ingredients.length !== 0){
            container.innerHTML += `<h4>Ingredients:</h4>`;
            item["ingredients"].forEach(ingredient => {
                container.innerHTML += `<input type="checkbox" class="ingredientCheckbox" name ="ingredients" value = "${ingredient}">${ingredient}</input>`;
            });
        }
        container.innerHTML += `\n<input type="submit" value= "Buy"></input>`
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
