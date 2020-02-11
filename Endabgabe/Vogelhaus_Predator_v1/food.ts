namespace Endabgabe {
    export class Food extends Moveable {


        constructor(_position: Vector) {
            super();
            this.position = new Vector(_position.x, _position.y);
            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0, 0);
        }

        draw(): void {
            //console.log("drawn");

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);

            crc2.fillStyle = "HSLA(20, 80%, 20%)";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x + 7, this.position.y + 5);
            // crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);

            crc2.fillStyle = "HSLA(20, 70%, 40%)";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x - 5, this.position.y + 8);
            // crc2.scale(this.size, this.size);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);

            crc2.fillStyle = "HSLA(20, 80%, 30%)";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
}