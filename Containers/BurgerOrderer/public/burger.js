




var checkbox = document.querySelectorAll('input[type="checkbox"]');

const form = document.querySelector("form");

const button = document.getElementById("sendOrder");
baseurl = "http://localhost:8080";
let options = [];
var parent = document.querySelectorAll(".parent")
var child = document.querySelectorAll(".child")
console.log("parent", parent)
console.log("child", child)


    // for(var i=0; i < child.length; i++){
    //     child[i].onclick = function(){
    //         var childrenBoxes = document.querySelectorAll(".child:checked").length;

    //         this.closest(".parent") = childrenBoxes > 0
    //     }
    // }
    parent.forEach((element, index) => {
        console.log("event", parent)
        element.onclick = function(){
            const index1 = index
            
            
           
            for(i=0;i<checkbox.length; i++)
                if(checkbox[i].value == element.value){
                    index = i
                    console.log("looped index",index)
                    break
                }
                for(var j = index; j < checkbox.length; j++){
                    console.log("j" , j)
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
            options.push(item.value)
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