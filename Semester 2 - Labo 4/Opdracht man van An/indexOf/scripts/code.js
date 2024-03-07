const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";

    let count = 0;
    let index = tekst.indexOf("an");
    while (index !== -1) {
        count++;
        index = tekst.indexOf("an", index + 1);
    }
    console.log("Aantal keren 'an' gevonden (met indexOf):", count);
}

window.addEventListener("load", setup);