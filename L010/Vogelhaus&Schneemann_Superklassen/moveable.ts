namespace L10_Canvas_Birdhouse {
    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor() {
            console.log("constructed");   
                     
            let x: number = 800 * Math.random();
            let y: number = 700 * golden * Math.random();
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0, 0);
        }

        move(_timeslice: number): void {
            //console.log("moved");
            this.position.add(this.velocity);

            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > 800)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > 725)
                this.position.y -= crc2.canvas.height;
            }

        draw(): void {
            //console.log("Moveable drawn");
        }
    }
}