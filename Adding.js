const message = window.prompt("give me a number");
const number = Number(message);
let message2 = "";
if (isNaN(message)) {
  message2 = "Please enter #";
} else {
  message2 = `number aren't lmao idk ${message * 2}`;
}

("Guyssss we is nice");

window.alert(message2);
