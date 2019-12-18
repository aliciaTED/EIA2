namespace L09_Canvas_Birdhouse {
    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_position: Vector) {
            console.log("constructed");
            this.position = new Vector (_position.x, _position.y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {
            console.log("moved");
        }

        draw(): void {
            console.log("drawn");

            let radiusSnowflake: number = 10;
            let snowflake: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusSnowflake);

            snowflake.arc(0, 0, radiusSnowflake, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nSnowflakes; drawn++) {
                crc2.save();
                let x: number = Math.random() * 800;
                let y: number = - (Math.random() * 600);
                crc2.translate(x, y);
                crc2.fill(snowflake);
                crc2.restore();
            }
            crc2.restore();
        }
    }
}
}