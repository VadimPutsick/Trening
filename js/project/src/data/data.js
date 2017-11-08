var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = [
    // 'http://www.nbrb.by/API/ExRates/Currencies',
    './src/data/data.json',
    'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
    'http://www.nbrb.by/API/ExRates/Rates/145',
    'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
    'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'
];

export function httpGet(url) {
    
      return new Promise(function(resolve, reject) {    
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);    
        xhr.onload = function() {
          if (this.status == 200) 
        //     resolve( url + '\n' + this.responseText.slice(0, 100) + '\n');         
        resolve( this.response);         
        
      };    
        xhr.onerror = function() {
          reject(new Error("Network Error"));
        };
    
        xhr.send();
      });    
    }
    
var data = "sample";
//  httpGet(url[0])
// .then((res)=>{
//   console.log(res);  
// data = res;
//   })
export {data as data}
export {url as url}
 