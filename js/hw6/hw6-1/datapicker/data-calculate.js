
function CalculateDate() {
    this.year;
    this.month;
    this.date;
    this.date_day;
    this.initialize();
    this.calculate();
}
CalculateDate.prototype.calculate = () => {   
    date = 1 - full_date.getDay();
    date_day = null;
    date_day = [];

    for (var i = 0; i < 6; i++) {     
        for (var j = 0; j < 7; j++) {
            date_day.push(new Date(year, month, date).getDate());
            date++;
        }        
    }
    return arrayResult(date_day);
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
   var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return this.year+","+ monthsShort[this.month];
}
CalculateDate.prototype.getWeek = ()=>{
 var massiv = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
 return arrayResult( massiv);
}

function arrayResult( massiv){
 var result_view = "";
 massiv.forEach(function(element) {
    result_view+= "<div class='hw6-calendar__day'>"+element+"</div>";
 });
 return  result_view;
}


var a =  new Date().toLocaleDateString();

console.log(  a);



