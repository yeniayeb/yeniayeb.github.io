var i : string ="";
        
    function main() {
        var i = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("content");
        node.innerHTML += "Hallo";
        node.innerHTML += i;
        node.innerHTML += ",  Liebe Grueße Ebru!";
        console.log("Selam",i,", Willkommen bei EIA2!");
        }
    
    document.addEventListener('DOMContentLoaded',main);