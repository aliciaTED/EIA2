namespace Endabgabe {
    export abstract class Moveable {
        position: Vector;
        velocity: Vector;

        public constructor() {
            // console.log("constructed");   

            let x: number = 800 * Math.random();
            let y: number = 700 * golden * Math.random();
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung, wird von Subklassen überschrieben
            this.velocity = new Vector(0, 0);
        }

        public move(): void {
            //console.log("moved");
            this.position.add(this.velocity);

            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > 800)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= crc2.canvas.height;
        }

        public draw(): void {
            //console.log("Moveable drawn");
        }
    }
}