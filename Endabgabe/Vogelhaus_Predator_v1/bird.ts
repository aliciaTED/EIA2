namespace Endabgabe {
    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;
        activity: string;
        color: string;
        size: number;

        constructor() {
            super();

            console.log("constructed");   
                     
            let x: number = 800 * Math.random();
            let y: number = 700 * golden * Math.random();
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(-2, 2);
        }

        draw(): void {
            //console.log("flying");

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);

            crc2.arc(-15, -2, (1 / 2) * 15, 0, 2 * Math.PI);
            crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);

            for (let drawn: number = 0; drawn < 20; drawn++) {
                let colorAngle: number = 120 - Math.random() * 290;
                let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                crc2.fillStyle = color;
                crc2.fill();
                // crc2.restore();
            }

            crc2.restore();
            crc2.closePath();

        }
    }
}