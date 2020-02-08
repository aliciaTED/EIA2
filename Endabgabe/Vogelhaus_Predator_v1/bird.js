"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Bird extends Endabgabe.Moveable {
        constructor() {
            super();
            // console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 * Endabgabe.golden * Math.random();
            this.position = new Endabgabe.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Endabgabe.Vector(-2, 2);
            // Farbe für Vögel
            this.color = Bird.getRandomColor();
            // anlockbare Vögel
            if (Math.random() <= 0.2) {
                this.isLured = true;
                console.log("I am lured & hungry.");
            }
            else {
                this.isLured = false;
            }
        }
        static getRandomColor() {
            let colorAngle = 120 - Math.random() * 300;
            let color = "HSLA(" + colorAngle + ", 90%, 45%, 1)";
            return color;
        }
        getFood(_mousePosition) {
            this.target = _mousePosition;
            let newVelocityX = (_mousePosition.x - this.position.x) * 0.01;
            let newVelocityY = (_mousePosition.y - this.position.y) * 0.01;
            let newVelocity = new Endabgabe.Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Birds are lured to food.");
        }
        eatFood() {
            if (this.target && (this.position == this.target || (this.position.x <= this.target.x + 10 && this.position.y <= this.target.y + 10 && this.position.x >= this.target.x - 10 && this.position.y >= this.target.y - 10))) {
                let stop = new Endabgabe.Vector(0, 0);
                this.velocity = stop;
                // console.log("Birds stopped to eat.");
                setTimeout(Endabgabe.changeDirection, 3000);
            }
        }
        draw() {
            //sitzende/laufende Vögel
            if (this.position.y >= 490) {
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x, this.position.y);
                Endabgabe.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                let head = -15;
                Endabgabe.crc2.arc(head, 0, 15, 0, 0.5 * Math.PI);
                Endabgabe.crc2.arc(0, head, (1 / 2) * 15, 0, 2 * Math.PI);
                // let color: string = "HSLA(100%, 90%, 50%, 0.7)";
                // crc2.fillStyle = color;
                Endabgabe.crc2.fill();
                Endabgabe.crc2.restore();
                Endabgabe.crc2.closePath();
            }
            // fliegende Vögel
            else {
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x, this.position.y);
                Endabgabe.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                Endabgabe.crc2.arc(-15, -2, (1 / 2) * 15, 0, 2 * Math.PI);
                Endabgabe.crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);
                // for (let drawn: number = 0; drawn < 20; drawn++) {
                //     let colorAngle: number = 120 - Math.random() * 290;
                //     let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                //     crc2.fillStyle = color;
                //     crc2.fill();
                //     crc2.restore();
                // }
                Endabgabe.crc2.fill();
                Endabgabe.crc2.restore();
                Endabgabe.crc2.closePath();
            }
        }
    }
    Endabgabe.Bird = Bird;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=bird.js.map