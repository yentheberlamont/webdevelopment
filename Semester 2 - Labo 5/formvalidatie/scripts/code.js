const setup = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', validateForm);
}

const validateForm = () => {
    const voornaamInput = document.getElementById('voornaam');
    const familienaamInput = document.getElementById('familienaam');
    const geboortedatumInput = document.getElementById('geboortedatum');
    const emailInput = document.getElementById('email');
    const aantalKinderenInput = document.getElementById('atlKinderen');

    const voornaam = voornaamInput.value.trim();
    const familienaam = familienaamInput.value.trim();
    const geboortedatum = geboortedatumInput.value.trim();
    const email = emailInput.value.trim();
    const aantalKinderen = aantalKinderenInput.value.trim();

    let isValid = true;

    // Validatie voornaam
    if (voornaam.length > 30) {
        voornaamInput.style.borderColor = 'red';
        isValid = false;
        voornaamInput.nextElementSibling.innerText = 'max. 30 karakters';
    } else {
        voornaamInput.style.borderColor = '';
        voornaamInput.nextElementSibling.innerText = '';
    }

    // Validatie familienaam
    if (familienaam === '') {
        familienaamInput.style.borderColor = 'red';
        isValid = false;
        familienaamInput.nextElementSibling.innerText = 'verplicht veld';
    } else if (familienaam.length > 50) {
        familienaamInput.style.borderColor = 'red';
        isValid = false;
        familienaamInput.nextElementSibling.innerText = 'max 50 karakters';
    } else {
        familienaamInput.style.borderColor = '';
        familienaamInput.nextElementSibling.innerText = '';
    }

    // Validatie geboortedatum
    if (geboortedatum === '') {
        geboortedatumInput.style.borderColor = 'red';
        isValid = false;
        geboortedatumInput.nextElementSibling.innerText = 'verplicht veld';
    } else if (!isValidDateFormat(geboortedatum)) {
        geboortedatumInput.style.borderColor = 'red';
        isValid = false;
        geboortedatumInput.nextElementSibling.innerText = 'formaat is niet jjjj-mm-dd';
    } else {
        geboortedatumInput.style.borderColor = '';
        geboortedatumInput.nextElementSibling.innerText = '';
    }

    // Validatie e-mail
    if (email === '') {
        emailInput.style.borderColor = 'red';
        isValid = false;
        emailInput.nextElementSibling.innerText = 'verplicht veld';
    } else if (!isValidEmail(email)) {
        emailInput.style.borderColor = 'red';
        isValid = false;
        emailInput.nextElementSibling.innerText = 'geen geldig email adres';
    } else {
        emailInput.style.borderColor = '';
        emailInput.nextElementSibling.innerText = '';
    }

    // Validatie aantal kinderen
    if (aantalKinderen === '' || isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen >= 99) {
        aantalKinderenInput.style.borderColor = 'red';
        isValid = false;
        aantalKinderenInput.nextElementSibling.innerText = 'is geen positief getal';
    } else {
        aantalKinderenInput.style.borderColor = '';
        aantalKinderenInput.nextElementSibling.innerText = '';
    }

    if (isValid) {
        alert('Proficiat!');
    }
}

const isValidDateFormat = (date) => {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    return dateFormat.test(date);
}

const isValidEmail = (email) => {
    const emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(email);
}

window.addEventListener("load", setup);
