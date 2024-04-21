const setup = () => {
    zetOm();
    printEigenschapTweedeVeld();
}

let student1 = {
    voornaam: "Lars",
    achternaam: "Van Hoof",
    geboortedatum: new Date(2005, 2, 18)
};

let zetOm = () => {
    let tekst = JSON.stringify(student1);
    console.log("Student1\n" + tekst);
}

let student2 = JSON.parse("{\"voornaam\":\"Lars\",\"achternaam\":\"Van Hoof\",\"geboortedatum\":\"2005-03-17T23:00:00.000Z\"}");
let printEigenschapTweedeVeld = () => {
    console.log("student2\nVoornaam: " + student2.voornaam);
}
window.addEventListener("load", setup);