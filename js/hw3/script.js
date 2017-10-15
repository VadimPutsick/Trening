function arg_sum() {
    var elements = [];
    return function () {
        if (arguments.length > 0)
            for (var index = 0; index < arguments.length; index++)
                elements.push(arguments[index]);
        console.log(elements.join(","));
    }
}

var f = arg_sum();
f(1, 3, "ef3erf");
f();
f("aewfwq",20,{a:2},null);
f();
f();