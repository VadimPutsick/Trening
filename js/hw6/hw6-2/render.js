function Renderer(root, setting, ...elems) {
    this.root = root;
    this.setting = setting;
    this.elems = [...elems];

}

Renderer.prototype.render = function () {
    var root = this.root;
    var setting = this.setting;
    var elems = this.elems;
    var parent = document.querySelector(root);
    parent.innerHTML = "";
    for (var index = 0; index < elems.length; index++) {
        var htmlelement = document.createElement("div");
        if (elems[index].class) htmlelement.classList.add(elems[index].class);
        if (elems[index].properties) {
            if (setting[elems[index].properties])
                htmlelement.innerHTML = setting[elems[index].properties]();
            else
                htmlelement.innerHTML = elems[index].properties;
        }
         if (elems[index].events) htmlelement.addEventListener("click",elems[index].events);       

        parent.appendChild(htmlelement);        
    }

}
