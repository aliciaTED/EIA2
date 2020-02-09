namespace Endabgabe {
    export class Bird extends Moveable {
        color: string;
        aim: Vector;
        isLured: boolean;
        isHit: boolean;
        score: number;

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
                console.log("I am lured & hungry.");
            } else {
                this.isLured = false;
            }

            this.isHit = false; 
        }

        static getRandomColor(): string {
            let colorAngle: number = 120 - Math.random() * 300;
            let color: string = "HSLA(" + colorAngle + ", 90%, 45%, 1)";

            return color;
        }

        getFood(_mousePosition: Vector): void {
            this.aim = _mousePosition;
            let newVelocityX: number = (_mousePosition.x - this.position.x) * 0.01;
            let newVelocityY: number = (_mousePosition.y - this.position.y) * 0.01;
            let newVelocity: Vector = new Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Birds are lured to food.");
        }

        eatFood(): void {
            if (this.aim && (this.position == this.aim || (this.position.x <= this.aim.x + 12 && this.position.y <= this.aim.y + 12 && this.position.x >= this.aim.x - 12 && this.position.y >= this.aim.y - 12))) {
                let stop: Vector = new Vector(0, 0);
                this.velocity = stop;
                // console.log("Birds stopped to eat.");
                setTimeout(changeDirection, 1300);
            }
        }

        hitBird(_mousePosition: Vector): void {
            this.aim = _mousePosition;
            if (this.aim && (this.position == this.aim || (this.position.x <= this.aim.x + 10 && this.position.y <= this.aim.y + 10 && this.position.x >= this.aim.x - 10 && this.position.y >= this.aim.y - 10))) {
                this.isHit = true;
                console.log("Bird is hit: " + this.isHit);
            }
        }

        draw(): void {

            //sitzende/laufende Vögel

            if (this.position.y >= 490) {
                crc2.fillStyle = this.color;
                crc2.beginPath();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                let head: number = -15;
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
                // for (let drawn: number = 0; drawn < 20; drawn++) {
                //     let colorAngle: number = 120 - Math.random() * 290;
                //     let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                //     crc2.fillStyle = color;
                //     crc2.fill();
                //     crc2.restore();
                // }
                crc2.fill();
                crc2.restore();
                crc2.closePath();
            }
        }
    }
}