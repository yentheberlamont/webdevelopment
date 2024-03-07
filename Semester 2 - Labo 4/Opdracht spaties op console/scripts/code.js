const setup = () => {
    document.querySelector('button').addEventListener('click', function() {
        const inputText = document.getElementById('tekst').value;
        const result = maakMetSpaties(inputText);
        console.log(result);
    });
}

const maakMetSpaties = (inputText) => {

    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i] + " ";
    }
    return result.trim();

}

window.addEventListener("load", setup);