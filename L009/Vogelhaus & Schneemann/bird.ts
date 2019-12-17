namespace L09_Canvas_Birdhouse {
    export class Bird {
        positon: Vector;
        velocity: Vector;
        activity: string;
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