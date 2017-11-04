function Renderer() {
    this.mas;
    this.parent;
}

Renderer.prototype.render = function (root) {

    var parent = document.querySelector(root);
    for (var index = 0; index < mas.length; index++) {
        parent.appendChild(mas[index]);
    }
    console.log(parent);
}

Renderer.prototype.create = function (setting, ...elems) {
    mas = [];
    for (var index = 0; index < elems.length; index++) {
        var htmlelement = document.createElement("div");
        if (elems[index].class) htmlelement.classList.add(elems[index].class);
        if (elems[index].properties) {
            if (setting[elems[index].properties])
                htmlelement.innerHTML = setting[elems[index].properties]();
            else
                htmlelement.innerHTML = elems[index].properties;
        }

        mas[index] = htmlelement;

    }
}
