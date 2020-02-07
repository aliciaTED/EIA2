"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Moveable {
        constructor() {
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 * Endabgabe.golden * Math.random();
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("moved");
            this.position.add(this.velocity);
            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += Endabgabe.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Endabgabe.crc2.canvas.height;
            if (this.position.x > 800)
                this.position.x -= Endabgabe.crc2.canvas.width;
            if (this.position.y > 725)
                this.position.y -= Endabgabe.crc2.canvas.height;
        }
        draw() {
            //console.log("Moveable drawn");
        }
    }
    Endabgabe.Moveable = Moveable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=moveable.js.map