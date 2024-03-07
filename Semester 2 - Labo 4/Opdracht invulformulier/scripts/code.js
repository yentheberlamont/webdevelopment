const setup = () => {
    addEventListener("change", zip);
    cursor();
}

const zip = () => {

    let code = document.getElementById(zipCode).type;
    if(isNaN(code)) {
        // Als het geen getal is, wis de inhoud
        document.getElementById("zipCode").value = "";
    }

}

const cursor = () => {

    let input = document.getElementById('fName');
    input.focus();

}

window.addEventListener("load", setup);