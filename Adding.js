const message = window.prompt("give me a number");
const number = Number(message);
let message2 = "";
if (isNaN(message)) {
  message2 = "Please enter #";
} else {
  message2 = `number are ${message * 2}`;
}
window.alert(message2);
