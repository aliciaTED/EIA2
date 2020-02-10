"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Moveable {
        constructor() {
            // console.log("constructed");   
            let x = 800 * Math.random();
            let y = 700 * Endabgabe.golden * Math.random();
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung, wird von Subklassen überschrieben
            this.velocity = new Endabgabe.Vector(0, 0);
        }
        move() {
            //console.log("moved");
            this.position.add(this.velocity);
            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += Endabgabe.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Endabgabe.crc2.canvas.height;
            if (this.position.x > 800)
                this.position.x -= Endabgabe.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= Endabgabe.crc2.canvas.height;
        }
        draw() {
            //console.log("Moveable drawn");
        }
        showScore() {
            for (let i = 0; i < Endabgabe.moveables.length; i++) {
                if (Endabgabe.moveables[i] instanceof Endabgabe.Slingshot && Endabgabe.moveables[i].exists) {
                    let score = new Path2D;
                    Endabgabe.crc2.font = "20px Arial";
                    Endabgabe.crc2.fillStyle = "darkred";
                    Endabgabe.crc2.fillText("+ " + this.score, this.position.x, this.position.y);
                    Endabgabe.crc2.closePath();
                    Endabgabe.scoreBird.push([score, 0]);
                }
            }
        }
    }
    Endabgabe.Moveable = Moveable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=moveable.js.map