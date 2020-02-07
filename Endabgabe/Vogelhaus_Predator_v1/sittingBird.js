"use strict";
var Endabgabe;
(function (Endabgabe) {
    class SittingBird extends Endabgabe.Moveable {
        constructor() {
            super();
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 - (80 * Math.random());
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(1, 0);
        }
        draw() {
            //console.log("sitting");
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            Endabgabe.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            let wing = -10;
            Endabgabe.crc2.arc(wing, 0, 10, 0, 0.5 * Math.PI);
            Endabgabe.crc2.arc(0, wing, (1 / 2) * 10, 0, 2 * Math.PI);
            let color = "HSLA(100%, 90%, 50%, 0.7)";
            Endabgabe.crc2.fillStyle = color;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.SittingBird = SittingBird;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=sittingBird.js.map