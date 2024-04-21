const setup = () => {
    bereken();
}

const bereken = () => {
    let geboorteDatum = new Date(2005, 7, 21);
    let vandaag = new Date();
    let atlDagen = vandaag - geboorteDatum;
    atlDagen /= 1000;
    atlDagen /= 3600;
    atlDagen /= 24;

    console.log("Geboortedatum: " + geboorteDatum.toLocaleDateString('nl-be'));
    console.log("Vandaag: " + vandaag.toLocaleDateString('nl-be'));
    console.log("Aantal dagen sinds " + geboorteDatum.toLocaleDateString('nl-be') + ": " +
        Math.floor(atlDagen) + " dagen");
}
window.addEventListener("load", setup);