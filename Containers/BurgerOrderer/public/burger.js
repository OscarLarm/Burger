
const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
const form = document.querySelector("form");
const button = document.getElementById("sendOrder");
baseurl = "http://localhost:8080";
let options = {};


const dataContainer = document.getElementById("container");
const menuOptions = fetch("http://localhost:8080/api")
.then((response) => response.text())
.then((text) => {
    dataContainer.innerHTML = text;
});

    
    function selectOrder(){
        
       
        document.querySelectorAll("[type='checkbox']").forEach(item => {
            if(item.checked == true){
                options[item.value] = item.checked;
            }
            
            
        });
        console.log(options)
        return options
    }

button.addEventListener('click', (e) => {
    
    options = selectOrder();

    if (options == "") {return}
    const res = fetch(baseurl + "/send", 
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