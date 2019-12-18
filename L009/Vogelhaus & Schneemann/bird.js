"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    class Bird {
        constructor(_position) {
            console.log("constructed");
            this.position = new L09_Canvas_Birdhouse.Vector(this.position.x, this.position.y);
            // Geschwindigkeit & Richtung
            this.velocity = new L09_Canvas_Birdhouse.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            console.log("moved");
        }
        draw() {
            console.log("drawn");
        }
    }
    L09_Canvas_Birdhouse.Bird = Bird;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=bird.js.map