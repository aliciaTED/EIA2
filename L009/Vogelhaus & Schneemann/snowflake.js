"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    class Snowflake {
        constructor(_position) {
            console.log("constructed");
        }
        move(_timeslice) {
            console.log("moved");
        }
        draw() {
            console.log("drawn");
            let radiusSnowflake = 10;
            let snowflake = new Path2D();
            let gradient = L09_Canvas_Birdhouse.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusSnowflake);
            snowflake.arc(0, 0, radiusSnowflake, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Canvas_Birdhouse.crc2.save();
            L09_Canvas_Birdhouse.crc2.translate(_position.x, _position.y);
            L09_Canvas_Birdhouse.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nSnowflakes; drawn++) {
                L09_Canvas_Birdhouse.crc2.save();
                let x = Math.random() * 800;
                let y = -(Math.random() * 600);
                L09_Canvas_Birdhouse.crc2.translate(x, y);
                L09_Canvas_Birdhouse.crc2.fill(snowflake);
                L09_Canvas_Birdhouse.crc2.restore();
            }
            L09_Canvas_Birdhouse.crc2.restore();
        }
    }
    L09_Canvas_Birdhouse.Snowflake = Snowflake;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=snowflake.js.map