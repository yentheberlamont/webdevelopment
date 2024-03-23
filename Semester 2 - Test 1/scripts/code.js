const setup = () => {
    let list = document.getElementById("ei");
    list.addEventListener("change", staatVanKip);
}

const staatVanKip = () => {

    let list = document.getElementById("ei");
    let legeDiv = document.getElementById("img");
    let tekst = '';
    let tweedeTekst = '';
    let legeP = document.getElementById("note");

    if(list.value === "metEi") {
        tekst = '<img id="fotoMetEi" src="with-egg.png" alt="Foto kip met ei">'
        legeDiv.classList.remove('hidden');
        tweedeTekst = 'Hierboven, een kip ' + list.content;
    } else if(list.value === "zonderEi") {
        tekst = '<img id="fotoZonderEi" src="without-egg.png" alt="Foto kip zonder ei">'
        legeDiv.classList.remove('hidden');
        tweedeTekst = 'Hierboven, een kip ' + list.content;
    }
    legeDiv.innerHTML = tekst;
    legeP.innerHTML = tweedeTekst;
}
window.addEventListener("load", setup);