namespace Endabgabe {
    export class Slingshot extends Moveable {
        aim: Vector;

        constructor() {
            super();
            this.position = new Vector(crc2.canvas.width - 50, crc2.canvas.height + 50);
            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0, 0);
        }

        targetBird(_mousePosition: Vector): void {
            this.aim = _mousePosition;
            let newVelocityX: number = (_mousePosition.x - this.position.x) * 0.03;
            let newVelocityY: number = (_mousePosition.y - this.position.y) * 0.03;
            let newVelocity: Vector = new Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Slingshot shot.");
            flyingSlingshot = true;
        }

        reachedTarget(): void {
            if (this.aim && (this.position == this.aim || (this.position.x <= this.aim.x + 10 && this.position.y <= this.aim.y + 10 && this.position.x >= this.aim.x - 10 && this.position.y >= this.aim.y - 10))) {
                let stop: Vector = new Vector(0, 0);
                this.velocity = stop;
                // console.log("Slingshot stopped.")
                for (let moveable of moveables) {
                    if (moveable instanceof Bird) {
                        moveable.hitBird(this.aim);
                    }
                    if (moveable instanceof PartyBird) {
                        moveable.hitPartyBird(this.aim);
                    }
                }
                setTimeout(deleteSlingshot, 500);
            }
            // drawTarget(this.aim);
        }

        draw(): void {
            //console.log("drawn");

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);

            crc2.fillStyle = "HSLA(0, 0%, 0%)";
            crc2.fill();

            crc2.restore();
            crc2.closePath();
        }
    }
}