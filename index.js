const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const spinner = document.querySelector('#spinner');

/* function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
      spinner.className = spinner.className.replace("show", "");
    }, 5000);
} */

const btnTranslator = document.querySelector('#btn-translate');
btnTranslator.addEventListener('click', () => {
    /* showSpinner() */
    const URL = "https://api.funtranslations.com/translate/minion.json?text=" + inputText.value
    const response = fetch(URL)
    .then(response => response.json())
    .then(json => outputText.innerHTML = json.contents.translated + "\nThanks see you around")
    .catch(error => outputText.innerHTML = "Unable to fetch data please try again after some time")
})