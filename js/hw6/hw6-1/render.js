
var massiv = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
function Renderer() {
   
     
}

Renderer.prototype.render = function(root,mas)  {   
   
var parent =  document.querySelector(root);
for (var index = 0; index < mas.length; index++) {
     parent.appendChild(mas[index]);
  }
  console.log(parent);
}

Renderer.prototype.create = function(setting, ...elems)  { 
   var mas = [];
    for (var index = 0; index < elems.length; index++) {     
    // var htmlelement =   document.createElement(elems[index].tag);    
     var htmlelement =   document.createElement("div");    
    var a = "getDay().month";
    htmlelement.classList.add(elems[index].class); 
    htmlelement.innerHTML = setting.a;
    // mas.push(htmlelement);
   var obj = {a:1,v:2};
 
    }
    this.render(".hw6-calendar",mas);
  console.log(obj);
    
}




var renderCalendar = new Renderer();
var setting;
renderCalendar.create(new CalculateDate(),
    {
        tag: "div",
        class: "hw6-sample",
        properties:"getsample"
    },
    {
        tag: "div",
        class: "hw6-sample",
        properties:""
    }
);
// renderCalendar.render(".hw6-calendar");