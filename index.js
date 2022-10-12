var numberOfButtons = document.querySelectorAll(".drum").length;

// Funktions
function makeSound(search_key){
    switch(search_key){
        case "w":
            var ton1= new Audio("sounds/tom-1.mp3");
            ton1.play();
            break;
        case "a":
            var ton2= new Audio("sounds/tom-2.mp3");
            ton2.play();
            break;
        case "s":
            var ton3= new Audio("sounds/tom-3.mp3");
            ton3.play();
            break;
        case "d":
            var ton4= new Audio("sounds/tom-4.mp3");
            ton4.play();
            break;
        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

    }
}

function buttonPressed(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);

}

//Detecting Button-Press
for (var i=0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonPressed(buttonInnerHTML);
})
}


//Detecting Keyboard-Press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonPressed(event.key);

});