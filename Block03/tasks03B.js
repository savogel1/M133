function varFunction() {
    var v = 1;
    if (true) {
        var v = 2;
        console.log(v);
    }
    console.log(v);
}

varFunction();

function letFunction() {
    let l = 1;
    if (true) {
        let l = 2;
        console.log(l);
    }
    console.log(l);
}

letFunction();