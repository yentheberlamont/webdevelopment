const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;

    let txtOutput = document.getElementById("txtOutput");
    txtOutput.textContent = tekst; // Vervang de tekstcontent van het <p>-element
}

window.addEventListener("load", setup);
