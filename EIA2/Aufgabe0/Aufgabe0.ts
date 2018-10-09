/*
Aufgabe: Aufgabe 0: Arbeitsfähigkeit
Name: Ebru Yeniay
Matrikel: 259405
Datum: 09.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

var i : string ="";
        
    function main() {
        var i = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("content");
        node.innerHTML += "Gruezi";
        node.innerHTML += i;
        node.innerHTML += ",  Liebe Grueße von Hilal!";
        console.log("Gruezi",i,", willkommen bei EIA2!");
        }
    
    document.addEventListener('DOMContentLoaded',main);