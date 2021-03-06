
function CalculateDate() {
    this.year;
    this.month;
    this.date;
    this.date_day;
    this.full_date;
    this.initialize();
    this.calculate();
}
CalculateDate.prototype.calculate = () => {
    date = 2 - (full_date.getDay() || 7);
    var date_switch = false;
    date_day = null;
    date_day = "";
    var date_set = function (date) {
        return new Date(year, month, date);
    }
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (date < 1) {
                date_day += "<div  class='hw6-calendar__day hw6-calendar__day_bleak '>" + date_set(date).getDate() + "</div>";

            }
            else if (date_set(date - 1).getDate() > date_set(date).getDate() && date > 1 || date_switch) {
                date_switch = true;
                date_day += "<div  class='hw6-calendar__day hw6-calendar__day_bleak '>" + date_set(date).getDate() + "</div>";
            }
            else
                if (date_set(date).toLocaleDateString() === new Date().toLocaleDateString())
                    date_day += "<div style='background-color:yellow' class='hw6-calendar__day'>" + date_set(date).getDate() + "</div>";
                else
                    date_day += "<div class='hw6-calendar__day'>" + date_set(date).getDate() + "</div>";
            date++;
        }
    }  
    return date_day;

    //  return arrayResult(date_day);
}
CalculateDate.prototype.initialize = () => {
    year = new Date().getFullYear();
    month = new Date().getMonth();
    date = 1;
    full_date = new Date(year, month, date);

}

CalculateDate.prototype.next = () => {
    month++;
    if (month > 11) {
        month = 0;
    }
}
CalculateDate.prototype.previous = () => {
    month--;
    if (month < 0) {
        month = 11;
    }
}

CalculateDate.prototype.getDay = () => {
    var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return this.year + "," + monthsShort[this.month];
}
CalculateDate.prototype.getWeek = () => {
    var massiv = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
       var result_view = "";
    massiv.forEach(function (element) {
        result_view += "<div class='hw6-calendar__week-day'>" + element + "</div>";
    });
    return result_view; 

}




