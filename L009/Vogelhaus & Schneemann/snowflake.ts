namespace L09_Canvas_Birdhouse {
    export class Snowflake {
        positon: Vector;
        velocity: Vector;
        size: number;

        constructor(_position: number) {
            console.log("constructed");
        }

        move(_timeslice: number): void {
            console.log("moved");
        }

        draw(): void {
            console.log("drawn");
        }
    }
}