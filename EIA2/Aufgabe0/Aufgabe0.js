/*
Aufgabe: Aufgabe 0: Arbeitsfähigkeit
Name: Ebru Yeniay
Matrikel: 259405
Datum: 09.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var a = prompt('Hallo, wie heisst du?');
console.log("Hallo " + a);
function writeHTML() {
    var node = document.getElementById("main");
    node.innerHTML += ("Hallo " + a);
}
document.addEventListener('DOMContentLoaded', writeHTML);
//# sourceMappingURL=Aufgabe0.js.map