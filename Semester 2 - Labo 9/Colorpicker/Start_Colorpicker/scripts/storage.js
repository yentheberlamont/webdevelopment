const storeSliderValues = () => {
    localStorage.setItem("redSlider", document.getElementById("sldRed").value);
    localStorage.setItem("greenSlider", document.getElementById("sldGreen").value);
    localStorage.setItem("blueSlider", document.getElementById("sldBlue").value);
};

const restoreSliderValues = () => {
    let red = localStorage.getItem("redSlider");
    let green = localStorage.getItem("greenSlider");
    let blue = localStorage.getItem("blueSlider");
    if (red && green && blue) {
        document.getElementById("sldRed").value = red;
        document.getElementById("sldGreen").value = green;
        document.getElementById("sldBlue").value = blue;
    }
};

const storeSwatches = () => {
    let swatchComponents = document.getElementById("swatchComponents").children;
    let swatches = [];
    for (let i = 0; i < swatchComponents.length; i++) {
        let swatch = swatchComponents[i];
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");
        swatches.push({red: red, green: green, blue: blue});
    }
    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let storedSwatches = localStorage.getItem("swatches");
    if (storedSwatches) {
        let swatches = JSON.parse(storedSwatches);
        for (let i = 0; i < swatches.length; i++) {
            let { red, green, blue } = swatches[i];
            addSwatchComponent(red, green, blue);
        }
    }
};