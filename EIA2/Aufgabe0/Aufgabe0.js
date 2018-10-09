var i = "";
function main() {
    var i = prompt("Gib deinen Namen ein");
    var node = document.getElementById("content");
    node.innerHTML += "Hallo";
    node.innerHTML += i;
    node.innerHTML += ",  Liebe Grueße Ebru!";
    console.log("Selam", i, ", Willkommen bei EIA2!");
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=Aufgabe0.js.map