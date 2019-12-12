namespace L09_Vector_Übung {
    window.addEventListener("load", handleLoad);

    class Vector {
        x: number = 0;
        y: number = 0;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
    }

    function handleLoad(): void {
        console.log("loaded");

        let v1: Vector = new Vector(10, -3);
        console.log(v1);
        v1.scale(2);
        console.log(v1);
    }
}