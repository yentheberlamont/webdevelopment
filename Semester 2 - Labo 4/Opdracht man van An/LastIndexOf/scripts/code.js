const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";

    let count = 0;
    let index = tekst.lastIndexOf("an");
    while (index !== -1) {
        count++;
        index = tekst.lastIndexOf("an", index - 1);
    }
    console.log("Aantal keren 'an' gevonden (met lastIndexOf):", count);
}

window.addEventListener("load", setup);