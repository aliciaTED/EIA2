"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Snowflake extends Endabgabe.Moveable {
        constructor() {
            super();
            // console.log("constructed");
            // let x: number = 800 * Math.random();
            // let y: number = 600 * Math.random();
            // this.position = new Vector(x, y);
            // Geschwindigkeit & Richtung
            let a = Math.random() * 0.3;
            let b = Math.random() * 2 + 1;
            this.velocity = new Endabgabe.Vector(a, b);
        }
        draw() {
            //console.log("drawn");
            let gradient = Endabgabe.crc2.createRadialGradient(0, 0, 0, 0, 0, 7);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            Endabgabe.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.03)");
            Endabgabe.crc2.fillStyle = gradient;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Snowflake = Snowflake;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=snowflake.js.map