var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = [
    'http://www.nbrb.by/API/ExRates/Currencies',
    'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
    'http://www.nbrb.by/API/ExRates/Rates/145',
    'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
    'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'
];
function httpGet(url) {
    
      return new Promise(function(resolve, reject) {    
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);    
        xhr.onload = function() {
          if (this.status == 200) 
            resolve( url + '\n' + this.responseText.slice(0, 100) + '\n');         
        };    
        xhr.onerror = function() {
          reject(new Error("Network Error"));
        };
    
        xhr.send();
      });    
    }

httpGet(url[0])
.then((res)=>{console.log(res);return httpGet(url[1])})
.then((res)=>{console.log(res);return httpGet(url[2])})
.then((res)=>{console.log(res);return httpGet(url[3])})
.then((res)=>{console.log(res);return httpGet(url[4])})
.then((res)=>{console.log(res)})