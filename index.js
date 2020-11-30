var inputText = document.querySelector('#input-text')
var outputText = document.querySelector('#output-text')

const btnTranslator = document.querySelector('#btn-translate')
btnTranslator.addEventListener('click', () => {
    var URL = "https://api.funtranslations.com/translate/minion.json?text=" + inputText.value
    var response = fetch(URL)
    .then(response => response.json())
    .then(json => outputText.innerHTML = json.contents.translated)
    .catch(error => outputText.innerHTML = "Unable to translate the text please try after some time")
})