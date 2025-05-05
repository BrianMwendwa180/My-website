// element.addEventListener(eventType,handlerFunction)

function clickHandler() {
    alert("Button clicked");

}
Button.addEventListener("click", clickHandler);
const button = document.getElementById

// With an arrow function
button.addEventListener("click", () => {
    alert("Button clicked!");
});

// commo Event in Js
//1. Mouse Events
//-click, double click, mousedown, mouseup
//2. Keyboard Events
//-Keydown, Keyup , key pressKey