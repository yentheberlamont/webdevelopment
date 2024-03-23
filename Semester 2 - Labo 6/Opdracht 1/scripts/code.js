const setup = () => {
    changeText();
}

const changeText = () => {
    let p = document.querySelectorAll("p");
    for(let i = 0; i < p.length; i++) {
        p[i].textContent = "Good job!";
    }
}

window.addEventListener("load", setup);