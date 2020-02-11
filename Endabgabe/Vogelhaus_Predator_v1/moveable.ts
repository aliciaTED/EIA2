namespace Endabgabe {
    export abstract class Moveable {
        position: Vector;
        velocity: Vector;
        isHit: boolean;
        isLured: boolean;
        score: number;
        isPartyBird: boolean;
        exists: boolean;

        constructor() {
            // console.log("constructed");   

            let x: number = 800 * Math.random();
            let y: number = 700 * golden * Math.random();
            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung, wird von Subklassen überschrieben
            this.velocity = new Vector(0, 0);
        }

        move(): void {
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

        draw(): void {
            //console.log("Moveable drawn");
        }

        showScore(): void {
            for (let i: number = 0; i < moveables.length; i++) {
                if (moveables[i] instanceof Slingshot && moveables[i].exists){
                    scoreBird.push(new Score(this.position.x, this.position.y, this.score, 0));
                    /*crc2.beginPath();
                    crc2.font = "20px Arial";
                    crc2.fillStyle = "darkred";
                    crc2.fillText("+ " + this.score, this.position.x, this.position.y);
                    crc2.closePath();*/
                }
            }
        }
    }
}