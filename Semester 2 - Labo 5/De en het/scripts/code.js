const setup = () => {
    vervang();
}

const vervang = () => {

    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    let woorden = tekst.split(' ');

    for(let i = 0; i < woorden.length; i++) {

        let huidigeWoord = woorden[i];
        if(huidigeWoord.toLowerCase() === "de") {
            woorden[i] = "het";
        }

    }
    console.log(woorden.join(" "));
}

window.addEventListener("load", setup);