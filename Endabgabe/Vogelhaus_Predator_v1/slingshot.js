"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Slingshot extends Endabgabe.Moveable {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(Endabgabe.crc2.canvas.width - 50, Endabgabe.crc2.canvas.height + 50);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(0, 0);
        }
        targetBird(_mousePosition) {
            this.aim = _mousePosition;
            let newVelocityX = (_mousePosition.x - this.position.x) * 0.03;
            let newVelocityY = (_mousePosition.y - this.position.y) * 0.03;
            let newVelocity = new Endabgabe.Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Slingshot shot.");
        }
        reachedTarget() {
            if (this.aim && (this.position == this.aim || (this.position.x <= this.aim.x + 10 && this.position.y <= this.aim.y + 10 && this.position.x >= this.aim.x - 10 && this.position.y >= this.aim.y - 10))) {
                let stop = new Endabgabe.Vector(0, 0);
                this.velocity = stop;
                // console.log("Slingshot stopped.")
                setTimeout(Endabgabe.deleteSlingshot, 2000);
            }
        }
        draw() {
            //console.log("drawn");
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "HSLA(0, 0%, 0%)";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.restore();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Slingshot = Slingshot;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=slingshot.js.map