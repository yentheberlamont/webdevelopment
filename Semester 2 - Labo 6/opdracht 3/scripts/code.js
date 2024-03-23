const setup = () => {
    createParagraph();
}

const createParagraph = () => {

    let paragraph = document.createElement('p');

    let text = document.createTextNode('Dit is een nieuw alinea-element.');
    paragraph.appendChild(text);

    let div = document.getElementById('myDIV');

    div.appendChild(paragraph);
}
window.addEventListener("load", setup);