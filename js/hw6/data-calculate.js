var date_day;//masiv which contain calendar days

function CalculateDate() {
    this.year;
    this.month;
    this.date;

    this.initialize();
    this.calculate();
}
CalculateDate.prototype.calculate = () => {
    var date_week;
  
    date = 1 - full_date.getDay();
    date_day = null;
    date_day = [];

    for (var i = 0; i < 6; i++) {
        date_week = null;
        date_week = [];
        for (var j = 0; j < 7; j++) {
            date_week.push(new Date(year, month, date));
            date++;
        }
        date_day.push(date_week);
    }
}
CalculateDate.prototype.initialize = () => {
    year = new Date().getFullYear();
    month = new Date().getMonth();
    date = new Date().getDate(); 
    full_date=  new Date(year, month, date);
  
}

CalculateDate.prototype.next = () => {   
    month++;
   if (month>11) {
       month = 0;
   }
}
CalculateDate.prototype.previous = () =>{   
    month--;  
    if (month<0) {
        month =11;
    }  
}

CalculateDate.prototype.getDay= ()=>{
    var day = { 
year :this.year,
month : this.month
    };
    return day;
}

var a =  new Date().toLocaleDateString();

console.log(  a);



