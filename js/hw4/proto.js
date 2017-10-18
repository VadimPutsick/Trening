function auto(manufact_year, producer) {
    this.manufact_year = manufact_year;
   this.producer = producer;    
}
auto.prototype.description = function() {
   console.log(`This auto was propuced in the ${this.producer}. And manufactored at the ${this.manufact_year}`);
}

function jeep(manufact_year, producer) {
   jeep.prototype.constructor(manufact_year, producer);
   this.model= "jeep";  
   this.character = function () {
       console.log(`${this.model} is good to move on the bad road `);
   }
}
function sedan(manufact_year, producer) {
    sedan.prototype.constructor(manufact_year, producer);
   this.model= "sedan";  
   this.character = function () {
       console.log(`${this.model} is has two seat and two door `);
   }
}
function universal( manufact_year, producer) {
    sedan.prototype.constructor(manufact_year, producer);
   this.model= "universal";  
   this.character = function () {
       console.log(`${this.model} is has four seat and four door `);
   }
}

jeep.prototype = Object.create(auto.prototype);
sedan.prototype = new auto();
universal.prototype = auto.prototype;
var jeep97 = new jeep("1996","chine");
jeep97.character();
jeep97.description();
var sedan92 = new sedan("1992","USA");
sedan92.character();
sedan92.description();
var universal92 = new universal("1992","russia");
universal92.character();
universal92.description();