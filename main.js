var pressed = false;

function submit(element){
    if(pressed == false){
        element.style.backgroundColor="rgb(115, 112, 146)";
        pressed = true;
    }else{
        element.style.backgroundColor="white"
        pressed = false;
    }
};


function invite(element){
    element.innerHTML="Invited";
    element.style.color="rgb(115, 112, 146)";
};


function sendMessage(){
    var input = document.getElementById("input");
    var field = document.getElementById("field");

    var inputValue = input.value

    var p = document.createElement("p")
    var node = document.createTextNode(inputValue)
    p.appendChild(node)
    field.appendChild(p)

    p.classList.add("messagePop")

    input.value = "";
}

