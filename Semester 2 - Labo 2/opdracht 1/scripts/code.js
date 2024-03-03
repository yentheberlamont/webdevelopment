const setup = () => {
}
window.addEventListener("load", setup);

window.alert("Dit is een mededeling");
let resultConfirm = window.confirm("Weet u het zeker?");
let resultPrompt = window.prompt("Wat is uw naam", "onbekend");

console.log(resultConfirm);
console.log(resultPrompt);