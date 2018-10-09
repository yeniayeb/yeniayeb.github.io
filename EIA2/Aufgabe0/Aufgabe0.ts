        var a: string= prompt ('Hallo, wie geht es dir ?');

            console.log ("Hallo " + a);

    function writeHTML() : void {
        
        var node : any = document.getElementById("main");
        node.innerHTML += ("Hallo " + a);
        }

document.addEventListener('DOMContentLoaded', writeHTML);