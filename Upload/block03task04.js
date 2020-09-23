document.querySelector(".reset").addEventListener("click", resetFormular());

function resetFormular() {
    let inputs = document.querySelector("input");
    inputs.innerHTML = "";
}