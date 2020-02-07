"use strict";
var L10_Canvas_Birdhouse;
(function (L10_Canvas_Birdhouse) {
    class Bird extends L10_Canvas_Birdhouse.Moveable {
        constructor() {
            super();
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 * L10_Canvas_Birdhouse.golden * Math.random();
            this.position = new L10_Canvas_Birdhouse.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new L10_Canvas_Birdhouse.Vector(-2, 2);
        }
        draw() {
            //console.log("flying");
            L10_Canvas_Birdhouse.crc2.beginPath();
            L10_Canvas_Birdhouse.crc2.save();
            L10_Canvas_Birdhouse.crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            L10_Canvas_Birdhouse.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L10_Canvas_Birdhouse.crc2.arc(-15, -2, (1 / 2) * 15, 0, 2 * Math.PI);
            L10_Canvas_Birdhouse.crc2.ellipse(5, -5, (1 / 3) * 15, 15, 13, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < 20; drawn++) {
                let colorAngle = 120 - Math.random() * 290;
                let color = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
                L10_Canvas_Birdhouse.crc2.fillStyle = color;
                L10_Canvas_Birdhouse.crc2.fill();
                // crc2.restore();
            }
            L10_Canvas_Birdhouse.crc2.restore();
            L10_Canvas_Birdhouse.crc2.closePath();
        }
    }
    L10_Canvas_Birdhouse.Bird = Bird;
})(L10_Canvas_Birdhouse || (L10_Canvas_Birdhouse = {}));
//# sourceMappingURL=bird.js.map