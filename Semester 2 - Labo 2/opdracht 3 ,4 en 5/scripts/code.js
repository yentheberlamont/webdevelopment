const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig"); // Nieuwe button selecteren
    btnWijzig.addEventListener("click", wijzigTekst); // Eventlistener toevoegen voor klik op de button
}

const wijzigTekst = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);
