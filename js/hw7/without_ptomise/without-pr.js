 var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = [
    'http://www.nbrb.by/API/ExRates/Currencies',
    'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
    'http://www.nbrb.by/API/ExRates/Rates/145',
    'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
    'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'
];
function httpGet(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url[0], true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
            }
            else {
                document.writeLn            
             console.log( url[0] + '\n' + xhr.responseText.slice(0, 100) + '\n'); // responseText -- текст ответа.
                   url.shift();
                 if (url.length > 1)
                    httpGet(url) 
            }
        }
    }
}
httpGet(url);


