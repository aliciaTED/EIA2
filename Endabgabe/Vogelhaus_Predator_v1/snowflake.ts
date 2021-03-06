namespace Endabgabe {
    export class Snowflake extends Moveable {

        public constructor() {
            super();
            // console.log("constructed");

            // Geschwindigkeit & Richtung
            let a: number = Math.random() * 0.3;
            let b: number = Math.random() * 2 + 1;
            this.velocity = new Vector(a, b);
        }

        public draw(): void {
            //console.log("drawn");

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 7);

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.03)");

            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
}