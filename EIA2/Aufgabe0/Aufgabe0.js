/*
Aufgabe: Aufgabe 0: Arbeitsfähigkeit
Name: Ebru Yeniay
Matrikel: 259405
Datum: 09.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/




function hallo() {
    var a;
    var a = prompt("Wie ist dein Name?");
    var node = document.getElementById("content");
    node.innerHTML = "Hallo ";
    node.innerHTML += a;
    node.innerHTML += "! Wie geht es dir?";
    console.log("Hallo", a, "!");
}
document.addEventListener('DOMContentLoaded', hallo);
//# sourceMappingURL=Aufgabe0.js.map