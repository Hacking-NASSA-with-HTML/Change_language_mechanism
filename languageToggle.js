console.log('We changing language');

/*document.getElementById('welcomeMesage').innerText = 'Йо Привет Шеф!!!';*/

let RussianLgDiv = document.getElementById('Russian');
let DeutschLgDiv = document.getElementById('Deutsch');
let EnglishLgDiv = document.getElementById('English');


let rus = () => {
    document.getElementById('welcomeMesage')
        .innerText = 'Русский язык выбран';
}

let deutsch = () => {
    document.getElementById('welcomeMesage')
        .innerText = 'Немецкий язык выбран';
}

let eng = () => {
    document.getElementById('welcomeMesage')
        .innerText = 'English language has chosen';
}

function languageToDisplay(userChosenLanguage) {
    console.log(userChosenLanguage);
    switch (userChosenLanguage) {
        case 'Russian':
            rus();
            break;
        case 'Deutsch':
            deutsch();
            break;
        case 'English':
            eng();
            break;
    }
}

let pageLanguage = () => {
    languageToDisplay('Russian');

    RussianLgDiv.addEventListener('click', function () {
        languageToDisplay('Russian');
    })

    DeutschLgDiv.addEventListener('click', function () {
        languageToDisplay('Deutsch');
    })

    EnglishLgDiv.addEventListener('click', function () {
        languageToDisplay('English');
    })
}

pageLanguage();