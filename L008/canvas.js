"use strict";
window.addEventListener("load", handleLoad);
function handleLoad() {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FF0000"; //Farbe für canvas wählen
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    //Arc (5 arguments: Abstand seitlich, Abstand oben, Radius, Startpunkt, Endpunkt)
    crc2.beginPath();
    crc2.arc(100, 100, 20, 20, 10 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    //Ellipse (7 - 8 arguments)
    crc2.beginPath();
    crc2.ellipse(100, 50, 20, 30, 0, Math.PI / 1, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    //Dreieck
    crc2.beginPath(); //erstes Element für Zeichnungen
    crc2.moveTo(60, 50);
    crc2.lineTo(20, 30);
    crc2.lineTo(80, 10);
    crc2.closePath(); // wichtig zum Beenden der Zeichnung
    crc2.stroke(); // letztes Element für Zeichnungen, damit überhaupt gezeichnet wird
    //Kurven
    //Text
    crc2.font = "30px Arial";
    crc2.fillText("Ich bin ein Canvas-Text!", 100, 130);
    crc2.closePath();
    crc2.strokeText("Ich bin ein Canvas-Text!", 100, 130);
    //Pfadobjekte
    let path = new Path2D();
    path.arc(60, 60, 50, 0, 2 * Math.PI);
    crc2.stroke(path);
    //Farbverlauf
    let gradient = crc2.createLinearGradient(0, 0, 0, 100);
    crc2.beginPath();
    gradient.addColorStop(0, "black");
    gradient.addColorStop(.5, "red");
    gradient.addColorStop(1, "gold");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, 200, 100);
    crc2.closePath();
    crc2.stroke();
}
//# sourceMappingURL=canvas.js.map