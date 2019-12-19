"use strict";
var L10_Canvas_Birdhouse;
(function (L10_Canvas_Birdhouse) {
    class Snowflake {
        constructor() {
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new L10_Canvas_Birdhouse.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new L10_Canvas_Birdhouse.Vector(0, 3);
        }
        move(_timeslice) {
            //console.log("moved");
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(this.velocity);
            //Schneeflocken-Endless-Schleife
            if (this.position.y > 600)
                this.position.y -= L10_Canvas_Birdhouse.crc2.canvas.height;
        }
        draw() {
            //console.log("drawn");
            let gradient = L10_Canvas_Birdhouse.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            L10_Canvas_Birdhouse.crc2.beginPath();
            L10_Canvas_Birdhouse.crc2.save();
            L10_Canvas_Birdhouse.crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            L10_Canvas_Birdhouse.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Canvas_Birdhouse.crc2.fillStyle = gradient;
            L10_Canvas_Birdhouse.crc2.fill();
            L10_Canvas_Birdhouse.crc2.restore();
            L10_Canvas_Birdhouse.crc2.closePath();
        }
    }
    L10_Canvas_Birdhouse.Snowflake = Snowflake;
})(L10_Canvas_Birdhouse || (L10_Canvas_Birdhouse = {}));
//# sourceMappingURL=snowflake.js.map