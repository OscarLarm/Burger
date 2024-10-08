let menu = {}
async function getData() {
    var res = await fetch('/database');
    menu = await res.json()
    return menu
}

async function renderBurgers(){
    const menuData = await getData()
    const burgers = menuData.filter(burger => burger.type === 'burger');
    const sides = menuData.filter(sides => sides.type === 'sides')
    const drinks = menuData.filter(drinks => drinks.type === 'drinks')
    const salad = menuData.filter(salad => salad.type === 'salad')

    var container = document.getElementById("container")
    container.innerHTML += `<ul id=burgerList>`
    var burgerList = document.getElementById("burgerList")
    burgers.forEach(burger => {
        burgerList.innerHTML += `<form action="/order" method="post" id="${burger.name}">`
        container = document.getElementById(`${burger.name}`)
        container.innerHTML += `<h2>${burger.name}</h2>`
        container.innerHTML += `<input type="hidden" name="burger" value="${burger.name}"</input>`
        container.innerHTML += `<h4>Ingredients:</h4>`;
        burger["ingredients"].forEach(ingredient => {
            container.innerHTML += `<input type="checkbox" name ="ingredients" value = "${ingredient}">${ingredient}</input>`;
        });
        container.innerHTML += `<input type="submit" value= "Buy"></input>`
        container.innerHTML += `</form>`
    });
    container.innerHTML += "</ul>";
};

renderBurgers();
