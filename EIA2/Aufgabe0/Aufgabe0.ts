   



function hallo() {
        var a: string;
        var a = prompt("Wie ist dein Name?");
        var node: any = document.getElementById("content");

        node.innerHTML = "Hallo ";
        node.innerHTML += a;
        node.innerHTML += "! Wie geht es dir?";
        console.log("Hallo", a, "!" );
    }

    document.addEventListener('DOMContentLoaded', hallo);

