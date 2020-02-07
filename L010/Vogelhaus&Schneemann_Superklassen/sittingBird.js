"use strict";
var L10_Canvas_Birdhouse;
(function (L10_Canvas_Birdhouse) {
    class SittingBird extends L10_Canvas_Birdhouse.Moveable {
        constructor() {
            super();
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 - (80 * Math.random());
            this.position = new L10_Canvas_Birdhouse.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new L10_Canvas_Birdhouse.Vector(1, 0);
        }
        draw() {
            //console.log("sitting");
            L10_Canvas_Birdhouse.crc2.beginPath();
            L10_Canvas_Birdhouse.crc2.save();
            L10_Canvas_Birdhouse.crc2.translate(this.position.x, this.position.y);
            //crc2.scale(this.size, this.size);
            L10_Canvas_Birdhouse.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            let wing = -10;
            L10_Canvas_Birdhouse.crc2.arc(wing, 0, 10, 0, 0.5 * Math.PI);
            L10_Canvas_Birdhouse.crc2.arc(0, wing, (1 / 2) * 10, 0, 2 * Math.PI);
            let color = "HSLA(100%, 90%, 50%, 0.7)";
            L10_Canvas_Birdhouse.crc2.fillStyle = color;
            L10_Canvas_Birdhouse.crc2.fill();
            L10_Canvas_Birdhouse.crc2.restore();
            L10_Canvas_Birdhouse.crc2.closePath();
        }
    }
    L10_Canvas_Birdhouse.SittingBird = SittingBird;
})(L10_Canvas_Birdhouse || (L10_Canvas_Birdhouse = {}));
//# sourceMappingURL=sittingBird.js.map