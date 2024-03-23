const setup = () => {
    let label = document.getElementById("label");
    let input = document.getElementById("tafelVan");
    label.addEventListener("click", input.focus);

    let button = document.getElementById("button");
    button.addEventListener("click", checkGetal);
}

const checkGetal = () => {
    let input = document.getElementById("tafelVan").value;
    let legeDiv = document.getElementById("legeDiv");
    let currentDate = new Date();
    let currenttime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let tekst = '<div class="headers"> Tafel van ' + input + ' aangemaakt op: ' + currenttime + '</div>\n';
    if(isNaN(input)) {
        alert("Geef een getal mee als waarde");
    } else {
        for(let i = 1; i <= 10; i++) {
            let res = i*input
            tekst += '<div class="bewerkingen">' + input + ' x ' + i + ' = ' + res + '</div>\n';
        }
        legeDiv.innerHTML = tekst;
    }
}
window.addEventListener("load", setup);