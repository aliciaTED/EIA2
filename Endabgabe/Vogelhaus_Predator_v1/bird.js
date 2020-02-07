"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Bird extends Endabgabe.Moveable {
        constructor() {
            super();
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 * Endabgabe.golden * Math.random();
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(-2, 2);
        }
        draw() {
            //console.log("flying");
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            Endabgabe.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            Endabgabe.crc2.arc(-15, -2, (1 / 2) * 15, 0, 2 * Math.PI);
            Endabgabe.crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < 20; drawn++) {
                let colorAngle = 120 - Math.random() * 290;
                let color = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                Endabgabe.crc2.fillStyle = color;
                Endabgabe.crc2.fill();
                // crc2.restore();
            }
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Bird = Bird;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=bird.js.map