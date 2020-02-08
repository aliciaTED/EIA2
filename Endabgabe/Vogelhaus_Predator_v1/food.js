"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Food extends Endabgabe.Moveable {
        constructor(_position) {
            super();
            this.position = new Endabgabe.Vector(_position.x, _position.y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(0, 0);
        }
        draw() {
            //console.log("drawn");
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            Endabgabe.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "HSLA(20, 80%, 20%)";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Food = Food;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=food.js.map