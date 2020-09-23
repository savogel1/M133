function countWordsOf(text) {
    const words = text.split(" ");

    let dictionary = {};
    for (const word of words) {
        if (dictionary[word]) {
            dictionary[word]++;
        } else {
            dictionary[word] = 1;
        }
    }

    let countedWords = [];
    for (const word in dictionary) {
        const count = dictionary[word];
        countedWords = [...countedWords, {word: word, count: count}];
    }

    let outputString = "";
    for (const word in countedWords) {
        outputString += "Word: " + countedWords[word].word + ", Count: " + countedWords[word].count + " * ";
    }
    
    return outputString;
}

document.write(countWordsOf("Das ist ein Test der ein Test ist"));
console.log(countWordsOf("Das ist ein Test der ein Test ist"));

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