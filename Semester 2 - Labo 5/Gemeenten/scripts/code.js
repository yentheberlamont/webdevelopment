const setup = () => {
    toevoegen();
}

const gemeente = () => {
    let lijstGemeenten = [];
    let input = window.prompt("Gemeente", "stop");

    while (input !== "stop" && input !== null) {
        lijstGemeenten.push(input);
        input = window.prompt("Gemeente", "stop");
    }

    return lijstGemeenten.sort();
}


const toevoegen = () => {

    let array = gemeente();
    let gemeentesInDoc = document.getElementById("gemeenten");
    for(let i = 0; i < array.length; i++) {

        gemeentesInDoc.innerHTML += "<option value=" + array[i] + "\">" + array[i] + "</option>"
    }

}

window.addEventListener("load", setup);