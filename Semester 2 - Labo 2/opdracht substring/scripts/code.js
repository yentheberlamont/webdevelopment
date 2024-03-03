const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", maakSubstring);
}

const maakSubstring = () => {
    let woord = document.getElementById("txtInput").value;
    let g1 = parseInt(document.getElementById("inputGetal1").value);
    let g2 = parseInt(document.getElementById("inputGetal2").value);
    let output = document.getElementById("output");

    // Controleer of g1 en g2 getallen zijn
    if (!isNaN(g1) && !isNaN(g2)) {
        let resultaat = woord.substring(g1, g2);
        output.innerHTML = resultaat;
    } else {
        output.innerHTML = "(ongeldige invoer)";
    }
}

window.addEventListener("load", setup);
