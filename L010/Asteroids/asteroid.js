"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Asteroid {
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            if (_position)
                this.position = new L10_Asteroids.Vector(_position.x, _position.y);
            else
                this.position = new L10_Asteroids.Vector(0, 0);
            this.velocity = new L10_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("Asteroid move");
            let offset = new L10_Asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Asteroids.crc2.canvas.height;
            if (this.position.x > L10_Asteroids.crc2.canvas.width)
                this.position.x -= L10_Asteroids.crc2.canvas.width;
            if (this.position.y > L10_Asteroids.crc2.canvas.height)
                this.position.y -= L10_Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Asteroid draw");
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.scale(this.size, this.size);
            L10_Asteroids.crc2.translate(-50, -50);
            L10_Asteroids.crc2.stroke(L10_Asteroids.asteroidPaths[this.type]);
            L10_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitSize = 50 * this.size;
            let difference = new L10_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize);
        }
    }
    L10_Asteroids.Asteroid = Asteroid;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=asteroid.js.map