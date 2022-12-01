var numberOfButtons = document.querySelectorAll(".drum").length

// Detecting Keyboard Press
for (i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        // this.style.backgroundColor = "pink"; (This thinking of adding this or not and how to add it.)

        // Audio event
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        // animation
        buttonAnimation(buttonInnerHTML)

        // end of this.addEventListener
    });
    
}  // end of for loop



//keyboard event listner. Asigned event to the whole document for it to listen to keyboard presses. 

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key)
});


//switches bassed on parameter 
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 
    
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;   
            
            
        default: console.log(buttonInnerHTML)
            break;
    }
    
}


function buttonAnimation (currentKey){
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    // time how long the anuimation will last
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}