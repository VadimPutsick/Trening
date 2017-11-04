var calendar = new CalculateDate();
var renderCalendar = new Renderer(".hw6-calendar",calendar,
{       
    tag: "div",
    class: "hw6-calendar-head",
    properties: "<",
    events:prevMonth
},
{
    tag: "div",
    class: "hw6-calendar-head__date",
    properties: "getYearMonth"
},
{
    tag: "div",
    class: "hw6-calendar-head",
    properties: ">",
    events:nextMonth
},
{
    tag: "div",
    class: "hw6-calendar-mas",
    properties: "getWeek"
},
{
    tag: "div",
    class: "hw6-calendar-mas",
    properties: "calculate"
});

function nextMonth(){
    calendar.next();
    renderCalendar.render();
}
function prevMonth(){
    calendar.previous();
    renderCalendar.render();
}

renderCalendar.render();