var renderCalendar = new Renderer();

renderCalendar.create(new CalculateDate(),
    {       
        tag: "div",
        class: "hw6-calendar-head",
        properties: "<"
    },
    {
        tag: "div",
        class: "hw6-calendar-head__date",
        properties: "getDay"
    },
    {
        tag: "div",
        class: "hw6-calendar-head",
        properties: ">"
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
    }
);
renderCalendar.render(".hw6-calendar");