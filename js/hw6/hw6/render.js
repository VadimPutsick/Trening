

function RenderCalendar() {
    this.weekdaysShort;
    this.monthsShort;   
    this.calendar;
     this.calculateDate;
    this.initialize();
    this.render();    
     
}
RenderCalendar.prototype.initialize = () => {
    weekdaysShort = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    calculateDate  = new CalculateDate();   
   
}
RenderCalendar.prototype.render = () => {   
    calculateDate.calculate();
    calendar = document.querySelector(".hw6-calendar");
    calendar.innerHTML = "";
    var div = createEl('hw6-calendar-row');
    div.innerHTML += "<div onclick='prev()'> < </div>";
     div.innerHTML += calculateDate.getDay().year + "," + monthsShort[calculateDate.getDay().month];
    div.innerHTML += "<div onclick='next()'> > </div>";
    calendar.appendChild(div);

    var div = createEl('hw6-calendar-row');
    calendar.appendChild(div);
    for (var j = 0; j < 7; j++) {
        var day = createEl('hw6-calendar__week-day');
        day.innerHTML = weekdaysShort[j];
        div.appendChild(day);

    }
    for (var i = 0; i < 6; i++) {
        var div = createEl('hw6-calendar-row');
        this.calendar.appendChild(div);
        renderWeek(div, date_day[i], 'hw6-calendar__day');
    }

}
// RenderCalendar.prototype.renderweek = () => {
//     var div = createEl('hw6-calendar-row');
//     calendar.appendChild(div);
//     for (var j = 0; j < 7; j++) {
//         var day = createEl('hw6-calendar__week-day');
//         day.innerHTML = weekdaysShort[j];
//         div.appendChild(day);

//     }

// }
// RenderCalendar.prototype.renderDateDays = () => {

//     for (var i = 0; i < 6; i++) {
//         var div = createEl('hw6-calendar-row');
//         this.calendar.appendChild(div);
//         renderWeek(div, date_day[i], 'hw6-calendar__day');
//     }

// }

function next() {
    calculateDate.next();    
    renderCalendar.render();
   
}
function prev() { 
    calculateDate.previous();    
    renderCalendar.render();
}


function createEl(el_class) {
    var div = document.createElement('div');
    div.classList.add(el_class);
    return div;
}

function renderWeek(div, date_day, div_class) {
    for (var j = 0; j < 7; j++) {
        var day = createEl(div_class);
        if(date_day[j].toLocaleDateString()===new Date().toLocaleDateString())
        day.style.backgroundColor = "yellow";
        day.innerHTML = date_day[j].getDate();
        div.appendChild(day);

    }
}

var renderCalendar = new RenderCalendar();


