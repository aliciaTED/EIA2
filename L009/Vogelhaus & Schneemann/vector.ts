namespace L09_Canvas_Birdhouse {
    export class Vector {
        x: number = 0;
        y: number = 0;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        // Geschwindigkeit zufällig berechnen & Richtung festlegen
        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength = Math.random() * (_maxLength - _minLength);

            this.set(0, 10);
            this.scale(length);
        }
    }
}