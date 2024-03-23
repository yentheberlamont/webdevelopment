const setup = () => {
    changeColor();
    createNewElement();
    setImg();
}

const changeColor = () => {
    let listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.classList.add('listitem');
    });

    let style = document.createElement('style');
    let rules = '.listitem { color: red; }';
    style.appendChild(document.createTextNode(rules)); // Voeg regel toe zonder innerHTML
    document.head.appendChild(style);
}

const createNewElement = () => {
    let img = document.createElement('img');
    return img;
}

const setImg = () => {
    let img = createNewElement();
    img.setAttribute("src", "images/smiley.png");
    document.body.appendChild(img);
}

window.addEventListener("load", setup);
