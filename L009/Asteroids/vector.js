"use strict";
var L09_Vector_Übung;
(function (L09_Vector_Übung) {
    window.addEventListener("load", handleLoad);
    class Vector {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    function handleLoad() {
        console.log("loaded");
        let v1 = new Vector(10, -3);
        console.log(v1);
        v1.scale(2);
        console.log(v1);
    }
})(L09_Vector_Übung || (L09_Vector_Übung = {}));
//# sourceMappingURL=vector.js.map