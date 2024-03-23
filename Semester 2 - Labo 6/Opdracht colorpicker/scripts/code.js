const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.querySelector("#button").firstElementChild;
    updateColorField()

    for (let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change", updateColorField);
        sliders[i].addEventListener("input", updateColorField);
    }

    button.addEventListener("click", saveColor);
}

const updateColorField = () => {
    let redValue = document.getElementById("redSlider").value;
    let greenValue = document.getElementById("greenSlider").value;
    let blueValue = document.getElementById("blueSlider").value;

    document.getElementById("rood").textContent = "Rood: " + redValue;
    document.getElementById("groen").textContent = "Groen: " + greenValue;
    document.getElementById("blauw").textContent = "Blauw: " + blueValue;

    let field = document.getElementById("voorbeeld");
    field.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}

const saveColor = () => {
    let color = document.getElementById("voorbeeld").style.backgroundColor;

    let field = document.createElement("div");
    field.classList.add("save-div"); // Verander save-field naar save-div
    field.style.backgroundColor = color;

    let buttonDiv = document.createElement("div");
    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "X";

    removeButton.addEventListener("click", removeColorSave);

    buttonDiv.appendChild(removeButton);
    field.appendChild(buttonDiv);

    document.getElementById("save-field").appendChild(field); // Verander saveDiv naar field

}

const removeColorSave = (event) => {
    let field = event.target.parentElement.parentElement;
    field.remove();
}

window.addEventListener("load", setup);