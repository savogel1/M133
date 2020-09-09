for(var i = 10; i <= 30; i++) {
    var text = `<span style="font-size: ${i}px;"><br>Schrift mit Pixel Groesse: ${i}</span>`;
    document.write(text);
}

function fibonacci() {
    var fibonacci = 0;
    var a = 0;
    var b = 1;
    var c = 0;

    for(var i = 1; i <= 10; i++) {
        c = a + b;
        a = b;
        b = c;
        
        fibonacci = fibonacci + "," + c;
    }
    
    return fibonacci;
}

document.write("<br><br>");
document.write(fibonacci());
document.write("<br>");

for (const method in document) {
    var text = `<br>document.${method}: ${document[method]}`;
    document.write(text);
}