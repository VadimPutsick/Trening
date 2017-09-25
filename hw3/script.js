    var elements = document.getElementsByTagName("div");
    var a = 1;
    function Click() {
      var t = event.target || event.srcElement;
      if (t.value == "plus")
        a = a + 0.1;
      else
        a = a - 0.1;
      for (var index = 0; index < elements.length; index++) {
        elements[index].style.fontSize = a * 1 / (index + 1) + "em";
      }
    }

    for (var index = 0; index < elements.length; index++) {
      if (index % 2 == 0)
        elements[index].style.color = "red";
      else {
        elements[index].style.color = "green";
        if (index >= 4)
          elements[index].style.textDecoration = "underline";
      }
      if (index < 4)
        elements[index].style.textTransform = "lowercase";
      else
        elements[index].style.textTransform = "uppercase";
      elements[index].style.fontSize = 1 / (index + 1) + "em";
    }
