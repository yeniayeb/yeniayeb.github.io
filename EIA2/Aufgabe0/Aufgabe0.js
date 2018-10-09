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