namespace L09_Canvas_Birdhouse {
    export class Bird {
        position: Vector;
        velocity: Vector;
        activity: string;
        size: number;

        constructor(_position: number) {
            console.log("constructed");
            this.position = new Vector (this.position.x, this.position.y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {
            console.log("moved");
        }

        draw(): void {
            console.log("drawn");
        }
    }
}