 window.onload = ()=>{ window.localStorage.clear();};
function SetDefaultValue(name) {
  var per_num = document.getElementsByName(name);
  per_num.forEach(function (element) {
    if (element.getAttribute("type") === "radio" && element.value === window.localStorage.getItem(name)) {
      element.checked = true;
    }
    else {
      element.value = window.localStorage.getItem(name);
    }

  });
}
function Load() {
  for (var index = 0; index < window.localStorage.length; index++) {
    SetDefaultValue(window.localStorage.key(index));
  }
}
function Storage() {
  window.localStorage.setItem(event.target.name, event.target.value);
}

Load();