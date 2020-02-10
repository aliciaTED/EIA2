"use strict";
var Endabgabe_copy;
(function (Endabgabe_copy) {
    class Bird extends Moveable {
        constructor() {
            super();
            // console.log("constructed");
            // Geschwindigkeit & Richtung
            this.velocity = new Vector(-1, 1);
            // Farbe für Vögel
            this.color = Bird.getRandomColor();
            // anlockbare Vögel
            if (Math.random() <= 0.2) {
                this.isLured = true;
                this.isNormal = false;
                console.log("I am lured & hungry.");
            }
            else {
                this.isLured = false;
                this.isNormal = true;
            }
            this.isHit = false;
        }
        static getRandomColor() {
            let colorAngle = 120 - Math.random() * 300;
            let color = "HSLA(" + colorAngle + ", 90%, 45%, 1)";
            return color;
        }
        getFood(_mousePosition) {
            this.aim = _mousePosition;
            let newVelocityX = (_mousePosition.x - this.position.x) * 0.01;
            let newVelocityY = (_mousePosition.y - this.position.y) * 0.01;
            let newVelocity = new Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Birds are lured to food.");
        }
        eatFood() {
            if (this.aim && (this.position == this.aim || (this.position.x <= this.aim.x + 10 && this.position.y <= this.aim.y + 10 && this.position.x >= this.aim.x - 10 && this.position.y >= this.aim.y - 10))) {
                let stop = new Vector(0, 0);
                this.velocity = stop;
                // console.log("Birds stopped to eat.");
                this.aim = new Vector(-1, -1);
                setTimeout(this.changeDirection, 1300);
            }
        }
        changeDirection() {
            for (let i = 0; i <= moveables.length; i++) {
                if (moveables[i] instanceof Bird) {
                    if (moveables[i].isLured) {
                        // moveables[i].isLured = false;
                        let a = -1 + Math.random() * 3;
                        let b = -1 + Math.random() * 3;
                        moveables[i].velocity = new Vector(a, b);
                    }
                }
            }
        }
        createLuredBirds() {
            console.log("test");
            for (let i = 0; i >= moveables.length; i++) {
                if (moveables[i] instanceof Bird) {
                    for (let n = 0; n <= 3; n++) {
                        moveables[i].isLured = true;
                    }
                }
            }
        }
        // changeDirection(): void {
        //     for (let moveable of moveables) {
        //         if (moveable instanceof Bird && moveable.isLured) {
        //             if (Math.random() * 5 < 0.07) {
        //                 let a: number = Math.random() * 5;
        //                 let b: number = Math.random() * 5;
        //                 moveable.velocity = new Vector(a, b);
        //             }
        //         }
        //     }
        // }
        hitBird(_mousePosition) {
            this.aim = _mousePosition;
            if (this.aim && (this.position == this.aim || (this.position.x <= this.aim.x + 9 && this.position.y <= this.aim.y + 9 && this.position.x >= this.aim.x - 9 && this.position.y >= this.aim.y - 9))) {
                this.isHit = true;
                console.log("Bird is hit: " + this.isHit);
            }
        }
        // deleteBird(): void {
        //     // for (let i: number = 0; i < moveables.length; i++) {
        //     if (this.isHit) {
        //         if (this.isLured) {
        //             this.score = 10;
        //             highscore += this.score;
        //             this.showScore();
        //             delete this.isLured;
        //             console.log("Your Highscore: " + highscore);
        //         }
        //         if (!this.isLured) {
        //             this.score = 20;
        //             highscore += this.score;
        //             this.showScore();
        //             console.log("Your Highscore: " + highscore);
        //             delete this.isNormal;
        //         }
        //         // moveables.splice(this.moveables, 1);
        //         console.log("Bird was hit and killed!");
        //     }
        //     // }
        // }
        draw() {
            //sitzende/laufende Vögel
            if (this.position.y >= crc2.canvas.height * golden) {
                crc2.fillStyle = this.color;
                crc2.beginPath();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                let head = -15;
                crc2.arc(head, 0, 15, 0, 0.5 * Math.PI);
                crc2.arc(0, head, (1 / 2) * 15, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
                crc2.closePath();
            }
            // fliegende Vögel
            else {
                crc2.fillStyle = this.color;
                crc2.beginPath();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.arc(-15, -2, (1 / 2) * 15, 0, 2 * Math.PI);
                crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);
                crc2.fill();
                crc2.restore();
                crc2.closePath();
            }
        }
    }
    Endabgabe_copy.Bird = Bird;
})(Endabgabe_copy || (Endabgabe_copy = {}));
//# sourceMappingURL=bird.js.map