"use strict";
var L10_Canvas_Birdhouse;
(function (L10_Canvas_Birdhouse) {
    class Moveable {
        constructor() {
            console.log("constructed");
            let x = 800 * Math.random();
            let y = 700 * L10_Canvas_Birdhouse.golden * Math.random();
            this.position = new L10_Canvas_Birdhouse.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new L10_Canvas_Birdhouse.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("moved");
            this.position.add(this.velocity);
            //Vogel-Endless-Schleife
            if (this.position.x < 0)
                this.position.x += L10_Canvas_Birdhouse.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Canvas_Birdhouse.crc2.canvas.height;
            if (this.position.x > 800)
                this.position.x -= L10_Canvas_Birdhouse.crc2.canvas.width;
            if (this.position.y > 725)
                this.position.y -= L10_Canvas_Birdhouse.crc2.canvas.height;
        }
        draw() {
            //console.log("Moveable drawn");
        }
    }
    L10_Canvas_Birdhouse.Moveable = Moveable;
})(L10_Canvas_Birdhouse || (L10_Canvas_Birdhouse = {}));
//# sourceMappingURL=moveable.js.map