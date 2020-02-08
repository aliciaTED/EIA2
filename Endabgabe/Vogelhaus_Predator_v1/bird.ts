namespace Endabgabe {
    export class Bird extends Moveable {
        color: string;

        target: boolean;
        isLured: boolean;
        //Aktivität für späteres Picken von Futter 

        constructor() {
            super();

            // console.log("constructed");

            let x: number = 800 * Math.random();
            let y: number = 700 * golden * Math.random();
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(-2, 2);

            // Farbe für Vögel
            this.color = Bird.getRandomColor();

            if (Math.random() <= 0.2) {
                this.isLured = true;
                //this.eatFood();
                console.log("I am lured & hungry.");
            } else {
                this.isLured = false;
            }
        }

        static getRandomColor(): string {
            let colorAngle: number = 120 - Math.random() * 300;
            let color: string = "HSLA(" + colorAngle + ", 90%, 45%, 1)";

            return color;
        }

        eatFood(_mousePosition: Vector): void {
            let newVelocityX: number = (_mousePosition.x - this.position.x) * 0.01;
            //console.log(this.position.x);
            let newVelocityY: number =  (_mousePosition.y - this.position.y) * 0.01;
            //console.log(this.position.y);
            let newVelocity: Vector = new Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            console.log("Birds are lured to food.");

            let destinationX: number = this.position.x + newVelocity.x / 0.01;
            let destinationY: number = this.position.y + newVelocity.y / 0.01;
            let destination: Vector = new Vector(destinationX, destinationY);

            if (destination == _mousePosition) {
                let stop: Vector = new Vector(0, 0);
                this.velocity = stop;
                console.log("Birds stopped to eat.");
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
                // let color: string = "HSLA(100%, 90%, 50%, 0.7)";
                // crc2.fillStyle = color;
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