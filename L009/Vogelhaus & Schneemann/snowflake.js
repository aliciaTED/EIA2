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
        }
    }
    L09_Canvas_Birdhouse.Snowflake = Snowflake;
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=snowflake.js.map