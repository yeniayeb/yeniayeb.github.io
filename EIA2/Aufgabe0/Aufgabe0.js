/*
Aufgabe: Aufgabe 0: Arbeitsfähigkeit
Name: Ebru Yeniay
Matrikel: 259405
Datum: 09.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
function hallo() {
    var i = prompt("Gib deinen Namen ein");
    var node = document.getElementById("content");
    node.innerHTML += "Hey";
    node.innerHTML += i;
    node.innerHTML += ",  Liebe Grueße von Ebru!";
    console.log("Hey", i, ", Willkommen bei EIA2!");
}
document.addEventListener('DOMContentLoaded', hallo);
//# sourceMappingURL=Aufgabe0.js.map