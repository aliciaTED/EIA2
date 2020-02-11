namespace Endabgabe {
    export class Slingshot extends Moveable {
        aim: Vector;

        public constructor() {
            super();
            this.position = new Vector(crc2.canvas.width - 50, crc2.canvas.height - 70);
            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0, 0);
        }

        public targetBird(_mousePosition: Vector): void {
            this.aim = _mousePosition;
            let newVelocityX: number = (_mousePosition.x - this.position.x) * 0.05;
            let newVelocityY: number = (_mousePosition.y - this.position.y) * 0.05;
            let newVelocity: Vector = new Vector(newVelocityX, newVelocityY);
            this.velocity = newVelocity;
            // console.log("Slingshot shot.");
        }

        public reachedTarget(): void {
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
                setTimeout(this.deleteSlingshot, 500);
            }
            // drawTarget(this.aim);
        }

        public draw(): void {
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

        private deleteSlingshot(): void {
            for (let i: number = 0; i < moveables.length; i++) {
                if (moveables[i] instanceof Slingshot) {
                    moveables.splice(i, 1);
                }
            }
            let slingShot: Slingshot = new Slingshot();
            moveables.push(slingShot);
        }
    }
}