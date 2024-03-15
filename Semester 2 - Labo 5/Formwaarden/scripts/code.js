const setup = () => {
    let button = document.getElementById("toonResultaat");
    button.addEventListener("click", uitvoering);
}

const rooker = () => {

    let checkboxRoker = document.getElementById("roker");
    let isRoker = checkboxRoker.checked;

    if(isRoker) {
        console.log("Is een roker");
    } else {
        console.log("Is geen roker");
    }
}

const moederTaal = () => {

    let radioMoedertaal = document.getElementsByName("language");
    let moedertaal;
    for(let i = 0; i < radioMoedertaal.length; i++) {
        if(radioMoedertaal[i].checked) {
            moedertaal = radioMoedertaal[i].value;
            break;
        }
    }

    if(moedertaal.toLowerCase() === "nederlands") {
        console.log("moedertaal is nl");
    } else if(moedertaal.toLowerCase() === "frans") {
        console.log("moedertaal is fr");
    } else {
        console.log("moedertaal is en");
    }
}

const buurland = () => {
    let listFavorieteBuurland = document.getElementById("buurland");
    let favorieteBuurland = listFavorieteBuurland.value;

    console.log("favoriete buurland is " + favorieteBuurland);
}


const bestelling = () => {
    let listBestelling = document.getElementById("bestelling");
    let bestelling = [];
    let returnvalue = "Bestelling bestaat uit ";
    for(let i = 0; i < listBestelling.length; i++) {
        if(listBestelling[i].selected) {
            bestelling.push(listBestelling[i]);
        }
    }

    for(let i = 0; i < bestelling.length; i++) {
        returnvalue += bestelling[i].value + " ";
    }
    console.log(returnvalue);
}

const uitvoering = () => {
    rooker();
    moederTaal();
    buurland();
    bestelling();
}

window.addEventListener("load", setup);