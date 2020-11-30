const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');

const btnTranslator = document.querySelector('#btn-translate');
btnTranslator.addEventListener('click', () => {
    const URL = "https://api.funtranslations.com/translate/minion.json?text=" + inputText.value
    const response = fetch(URL)
    .then(response => response.json())
    .then(json => outputText.innerHTML = json.contents.translated + "\nThanks see you around")
    .catch(error => outputText.innerHTML = "Unable to fetch data please try again after some time")
})