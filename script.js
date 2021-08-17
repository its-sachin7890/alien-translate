
var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector(".text-input");

var textOutput = document.querySelector(".text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function translationURL(text){
    return serverURL + "?" +"text=" + text;
}

function errorHandler(error){
    console.log(`Error occured ${error}`);
}

function clickHandler(){

   fetch(translationURL(textInput.value))
   .then(response => response.json())
   .then(json => {
    var translatedText= json.contents.translated;
    textOutput.innerText = translatedText;
    })
   .catch(errorHandler)
};



btnTranslate.addEventListener('click', clickHandler);