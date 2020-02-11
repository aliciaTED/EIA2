namespace Endabgabe {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

         // Geschwindigkeit zufällig berechnen & Richtung festlegen
         public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength = Math.random() * (_maxLength - _minLength);
            this.scale(length);
        }
    }
}