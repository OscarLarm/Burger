




var checkbox = document.querySelectorAll('input[type="checkbox"]');

const form = document.querySelector("form");

const button = document.getElementById("sendOrder");
baseurl = "http://localhost:8080";
let options = [];
var parent = document.querySelectorAll(".parent")
var child = document.querySelectorAll(".child")
console.log("parent", parent)
console.log("child", child)


    
    parent.forEach((element, index) => {
        
        element.onclick = function(){
            
            for(i=0;i<checkbox.length; i++)
                
                if(checkbox[i].value == element.value){
                    index = i
                    break
                }
                for(var j = index; j < checkbox.length; j++){
                    
                    if (checkbox[j+1].classList.contains("parent")){
                        checkbox[j].checked = this.checked;
                        break
                    }
                    else{
                        checkbox[j].checked = this.checked;
                    }
                }
                
            }
        
        });








 



function selectOrder(){
    options = []
    console.log("array", options)
    checkbox.forEach((item, index) => {
        
        if (item.checked == true && item.classList.contains("parent")){
            options.push("One "+ item.value)
            console.log("index__",index)

            for(i = index + 1; i < checkbox.length; i++)
                
                if (checkbox[i+1].classList.contains("parent")){
                    if (checkbox[i].checked == false){
                        options.push("Without " + checkbox[i].value)
                    }
                    break
                }
                else if((checkbox[i].checked == false)){
                    options.push("Without " + checkbox[i].value)
                }

        }
      
    });
    console.log(options)
    return options;
}

button.addEventListener('click', (e) => {
    e.preventDefault()

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