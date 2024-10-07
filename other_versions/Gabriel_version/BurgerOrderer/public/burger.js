
var checkbox = document.querySelectorAll('input[type="checkbox"]');
const form = document.querySelector("form");
const button = document.getElementById("sendOrder");
baseurl = "http://localhost:8080";
let options = [];


async function getHTML(){
    await fetch("http://localhost:8080/api")
        .then(response => response.text())
        .then(text => {
            document.getElementById("container").innerHTML = text
        
        })
}
getHTML();
var parent = document.querySelectorAll(".parent")
var child = document.querySelectorAll(".child")
console.log("")
//Loops parent checkboxes and adds onclick function.
parent.forEach((element) => {
        
    element.onclick = function(){
            
        var index = getCheckboxIndex(element)
        // checkNestedChildren(index);
        //Loops nested checkboxes under selected parent and checks them
            for(var i = index; i < checkbox.length - 1; i++){
                
                if (checkbox[i+1].classList.contains("parent")){
                    checkbox[i].checked = this.checked;
                    break
                }
                else{
                    checkbox[i+1].checked = this.checked;
                }
            }
                
        }
        
    });
/**
 * @param selected parent checkbox
 * @returns the index of selected parent checkbox
 */
function getCheckboxIndex(element)
{
    for(i=0;i<checkbox.length; i++)
                
        if(checkbox[i].value == element.value){
            index = i
            break
        }
    return index
}
// function checkNestedChildren(index){
    
//     for(var j = index; j < checkbox.length; j++){
           
//         if (checkbox[j+1].classList.contains("parent")){
//             checkbox[j].checked = this.checked;
//             break
//         }
//         else{
//             checkbox[j].checked = this.checked;
//         }
//     }
    
// }

/**
 * Loops every checkbox and calls addOrder to check for selected items.
 * @returns Array of full order.
 */
function selectOrder(){
    options = []
    
    
    checkbox.forEach((item, index) => {
        
        options = addOrder(options, item, index)
        
      
    });
    
    return options;
}
/**
 * If item is parent and checked loop all childern(ingredients) and check if they are unchecked. And add them to array.
 * @param {*} arr The array to store order details.
 * @param {*} item Every checkbox on page.
 * @param {*} index The checkbox index.
 * @returns Array of selected order items.
 */
function addOrder(arr, item, index){
    if (item.checked == true && item.classList.contains("parent")){
        options.push("One "+ item.value)
        
        for(i = index + 1; i < checkbox.length; i++)
                    
            if (checkbox[i].classList.contains("parent") ){
             
                break
            }
            else if(checkbox[i].checked == false && checkbox[i].classList.contains("child")){
                arr.push("Without " + checkbox[i].value)
            }
        }
    console.log("orr",arr)
    return arr;
}

button.addEventListener('click', (e) => {
    e.preventDefault()

    options = selectOrder();
    console.log("options", options)
    
    if (options == "") {return}
    //Sends a Post fetch to express server with the made order.
    fetch(baseurl + "/send", 
    {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
        body: JSON.stringify({
            parcel: options
        }),
    
    });
   
});