let menu = {}
async function getData() {
    var res = await fetch('/database');
    menu = await res.json()
    console.log(menu)
}

async function renderBurgers(){
    const menuData = await getData()
    menuData.forEach(burger => {
        console.log(burger)
    });
    // var container = document.getElementById("container")
    // container.innerHTML += "<ul id=burgerList>"
    // var burgerList = document.getElementById("burgerList")
    // getBurgers().forEach(burger => {
    //     burgerList.innerHTML += "<hr></hr>";
    //     burgerList.innerHTML += `<form action="/order" method="post" id=${burger["name"]}>`
    //     burgerContainer = document.getElementById(`${burger["name"]}`)
    //     burgerContainer.innerHTML += `<h2>${burger["name"]}</h2>`
    //     burgerContainer.innerHTML += `<input type="hidden" name="burger" value="${burger["name"]}"</input>`
    //     burgerContainer.innerHTML += `<h4>Ingredients:</h4>`;
    //     burger["ingredients"].forEach(ingredient => {
    //         burgerContainer.innerHTML += `<input type="checkbox" name ="ingredients" value = "${ingredient}">${ingredient}</input>`;
    //     });
    //     burgerContainer.innerHTML += `<input type="submit" value= "Add to Cart">`
    //     burgerContainer.innerHTML += `</form>`
    // });
    // container.innerHTML += "</ul>";
}

renderBurgers()