namespace Endabgabe {
    export class Bird extends Moveable {
        color: string;
        aim: Vector;
        isNormal: boolean;
        isLured: boolean;
        isHit: boolean;
        isFeeding: boolean;
        score: number;

        constructor() {
            super();
            // console.log("constructed");

            // Geschwindigkeit & Richtung
            let a: number = -3 + Math.random() * 3;
            let b: number = -1 + Math.random() * 3;
            this.velocity = new Vector(a, b);

            // Farbe für Vögel
            this.color = Bird.getRandomColor();

            // anlockbare Vögel
            if (Math.random() <= 0.2) {
                this.isLured = true;
                this.isNormal = false;
                console.log("I am lured & hungry.");
            } else {
                this.isLured = false;
                this.isNormal = true;
            }

            this.isFeeding = false;
            this.isHit = false;
        }

        static getRandomColor(): string {
            let colorAngle: number = 120 - Math.random() * 300;
            let color: string = "HSLA(" + colorAngle + ", 90%, 45%, 1)";

            return color;
        }

        getFood(_mousePosition: Vector): void {
            this.aim = _mousePosition;
            this.isFeeding = true;
            let newVelocityX: number = (_mousePosition.x - this.position.x) * 0.01;
            let newVelocityY: number = (_mousePosition.y - this.position.y) * 0.01;
            let newVelocity: Vector = new Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Birds are lured to food.");
        }

        eatFood(): void {

            if (this.aim && this.isFeeding && !this.isHit && (this.position == this.aim || (this.position.x <= this.aim.x + 9 && this.position.y <= this.aim.y + 9 && this.position.x >= this.aim.x - 9 && this.position.y >= this.aim.y - 9))) {
                let stop: Vector = new Vector(0, 0);
                this.velocity = stop;
                // console.log("Birds stopped to eat.");
                this.aim = new Vector(-1, -1);
                setTimeout(this.changeDirection, 1300);
            }
        }

        changeDirection(): void {
            for (let i: number = 0; i <= moveables.length; i++) {
                if (moveables[i] instanceof Bird) {
                    let bird: Bird = moveables[i] as Bird; // typecast = Typumwandlung (möglich, da Moveables = Elternklasse von Bird) >> Zugriff auf Eigenschaften von Bird ohne sie in Moveables zu deklarieren
                    if (bird.isLured) {
                        // moveables[i].isLured = false;
                        let a: number = -3 + Math.random() * 3;
                        let b: number = -1 + Math.random() * 3;
                        bird.velocity = new Vector(a, b);
                        bird.isFeeding = false;
                    }
                }
            }
        }

        // createLuredBirds(): void {
        //     console.log("test");
        //     for (let i: number = 0; i >= moveables.length; i++) {
        //         if (moveables[i] instanceof Bird) {
        //             for (let n: number = 0; n <= 3; n++) {
        //                 moveables[i].isLured = true;
        //             }
        //         }
        //     }
        // }

        hitBird(_mousePosition: Vector): void {
            this.aim = _mousePosition;
            if (this.position == this.aim || (this.position.x <= this.aim.x + 12 && this.position.y <= this.aim.y + 12 && this.position.x >= this.aim.x - 12 && this.position.y >= this.aim.y - 12)) {
                this.isHit = true;
                console.log("Bird is hit: " + this.isHit);
            }
        }

        showScore(): void {
            for (let i: number = 0; i < moveables.length; i++) {
                    scoreBird.push(new Score(this.position.x, this.position.y, this.score, 0));
            }
        }

        draw(): void {

            //sitzende/laufende Vögel

            if (this.position.y >= crc2.canvas.height * golden) {
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
                crc2.fill();
                crc2.restore();
                crc2.closePath();
            }
        }
    }
}