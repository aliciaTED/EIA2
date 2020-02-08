"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Food extends Endabgabe.Moveable {
        constructor() {
            super();
            // console.log("constructed");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.mousePosition = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(0, 2);
        }
        draw() {
            //console.log("drawn");
            let gradient = Endabgabe.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            Endabgabe.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 80%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 50%, 0)");
            Endabgabe.crc2.fillStyle = gradient;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Food = Food;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=food.js.map