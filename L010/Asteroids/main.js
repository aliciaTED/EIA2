"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Asteroids.crc2 = canvas.getContext("2d");
        L10_Asteroids.crc2.fillStyle = "black";
        L10_Asteroids.crc2.strokeStyle = "white";
        L10_Asteroids.crc2.fillRect(0, 0, L10_Asteroids.crc2.canvas.width, L10_Asteroids.crc2.canvas.height);
        L10_Asteroids.createPaths();
        console.log("Asteroids paths: ", L10_Asteroids.asteroidPaths);
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeaypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L10_Asteroids.Vector(_event.clientX - L10_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L10_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        console.log("create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L10_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        L10_Asteroids.crc2.fillRect(0, 0, L10_Asteroids.crc2.canvas.width, L10_Asteroids.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=main.js.map