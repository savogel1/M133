document.getElementById("calculatePriceScrews").onsubmit = function () {
    let screw = document.getElementById("screw").value;
    let screwnut = document.getElementById("screwnut").value;
    let grommet = document.getElementById("grommet").value;
    
    let price = 0;
    price += screw * 20;
    price += screwnut * 10;
    price += grommet * 5;

    price = price/100;
    document.getElementById("price").innerText = "Total: " + price + " CHF";

    return false;
};