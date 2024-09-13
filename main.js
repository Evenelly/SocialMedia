var pressed = false;

function submit(element){ //submits login information (changes css)
    if(pressed == false){
        element.style.backgroundColor="rgb(115, 112, 146)";
        pressed = true;
    }else{
        element.style.backgroundColor="white";
        pressed = false;
    }
};


function invite(element){ //invited friends (changes html and css)
    element.innerHTML="Invited";
    element.style.color="rgb(115, 112, 146)";
};



var input = document.getElementById("input");
var field = document.getElementById("field");


input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
})

function sendMessage(){ 

    inputValue = input.value;

    if(inputValue != ""){
        var p = document.createElement("p");
        var node = document.createTextNode(inputValue);
        p.appendChild(node);
        field.appendChild(p);
    
        p.classList.add("send");
    
        input.value = "";
    
        setTimeout("bubble(inputValue)", 1000);
    }
}

function bubble(inputUser){
    var returnValue;

    var p = document.createElement("p");
    var node = document.createTextNode("...");
    p.appendChild(node);
    field.appendChild(p);

    p.classList.add("recieve");


    if(inputUser.toLowerCase() == "hi" || inputUser.toLowerCase() == "hello"){
        returnValue = "Hello, how are you doing?";
    }else if (inputUser.toLowerCase() == "good" || inputUser.toLowerCase() == "great"){
        returnValue = "That's great!"
    }else if(inputUser.toLowerCase() == "bad" || inputUser.toLowerCase() == "okay"){
        returnValue = "What can I do to help you make the day better?"
    }else{
        returnValue = "Sorry, I couldn't quite catch that"
    }

    var time = returnValue.length * 150;

    setTimeout(returnMessage, time, returnValue, p);
    console.log(time);


}

function returnMessage(returnValue, p){ 
    p.innerHTML = returnValue;
}