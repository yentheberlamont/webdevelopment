const setup = () => {
    trigram();
}

const trigram = () => {

    const tekst = "onoorbaar";

    for(let i = 0; i < tekst.length - 2; i++) {

        let returnValue = tekst.substring(i, i+3);
        console.log(returnValue);

    }

}

window.addEventListener("load", setup);