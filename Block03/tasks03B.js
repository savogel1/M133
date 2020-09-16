function wordCounter(text) {
    let countedWords = [];
    //let oldWords = [];
    let numberOfWords = 0;

    for (" " in text) {
        numberOfWords++;
    }
    numberOfWords++;

    for (i = 0; i <= numberOfWords; i++) {
        //let word = text[]
    }

    //return countedWords;
}


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

function constFunction() {
    const l = 1;
    if (true) {
        const l = 2;
        console.log(l);
    }
    console.log(l);
}

constFunction();