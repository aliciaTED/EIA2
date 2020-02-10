"use strict";
var Endabgabe_copy;
(function (Endabgabe_copy) {
    // Funktionen für alle Hintergrundelemente
    function drawBackground() {
        //console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "HSL(220, 30%, 90%)");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    Endabgabe_copy.drawBackground = drawBackground;
    function drawSun(_position) {
        //console.log("Sun" + _position);
        let r1 = 25;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 40%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    Endabgabe_copy.drawSun = drawSun;
    function drawCloud(_position, _size) {
        //console.log("Cloud" + _position, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    Endabgabe_copy.drawCloud = drawCloud;
    function drawMountains(_position, _min, _max, _colorHigh, _colorLow) {
        //console.log("Mountains" + _position, _min, _max, _colorHigh, _colorLow);
        let stepMin = 50;
        let stepMax = 80;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    Endabgabe_copy.drawMountains = drawMountains;
    function drawTree() {
        //console.log("Tree");
        let transform = crc2.getTransform();
        // let x: number = Math.random() * 800;
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(600, 470, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "HSL(30, 70%, 40%)"; // Baumstamm
        crc2.fillRect(600, 450, 20, -100);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 150;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 60%, 0.5)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
        crc2.setTransform(transform);
    }
    Endabgabe_copy.drawTree = drawTree;
    function drawSnowman(_position) {
        //console.log("Snowman");
        let snowman = new Path2D;
        let r1 = 70;
        let r2 = 40;
        let r3 = 25;
        snowman.arc(_position.x, _position.y, r1, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowman);
        crc2.strokeStyle = "black";
        crc2.stroke(snowman);
        let snowman1 = new Path2D;
        let y2 = 500 - (r1 + r2);
        snowman1.arc(_position.x, y2, r2, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowman1);
        crc2.strokeStyle = "black";
        crc2.stroke(snowman1);
        let snowman2 = new Path2D;
        let y3 = y2 - (r2 + r3);
        snowman2.arc(_position.x, y3, r3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowman2);
        crc2.strokeStyle = "black";
        crc2.stroke(snowman2);
        let smile = new Path2D;
        smile.arc(_position.x, y3, 10, 0, Math.PI);
        crc2.stroke(smile);
        let eye1 = new Path2D;
        eye1.arc(390, 315, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(eye1);
        crc2.stroke(eye1);
        let eye2 = new Path2D;
        eye2.arc(410, 315, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(eye2);
        crc2.stroke(eye2);
        let nose = new Path2D;
        nose.arc(400, 322, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill(nose);
        crc2.stroke(nose);
    }
    Endabgabe_copy.drawSnowman = drawSnowman;
    function drawBirdhouse() {
        //console.log("Birdhouse");
        //Gehäuse
        crc2.fillStyle = "HSL(30, 70%, 15%)";
        crc2.fillRect(150, 550, 15, -70);
        crc2.save();
        crc2.translate(0, -120);
        crc2.fillStyle = "HSL(30, 70%, 50%)";
        crc2.fillRect(118, 600, 80, -90);
        // Loch
        let hole = new Path2D;
        hole.arc(158, 560, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill(hole);
        crc2.stroke(hole);
        // Dach
        crc2.beginPath();
        crc2.moveTo(110, 510); // Strich
        crc2.lineTo(158, 448); // Ecke oben
        crc2.lineTo(205, 510);
        crc2.closePath();
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    Endabgabe_copy.drawBirdhouse = drawBirdhouse;
    function drawBirdsInTree(_position, _size) {
        //console.log("Birds in Tree");
        let nBirds = 1;
        crc2.beginPath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        let head = -15;
        crc2.arc(head, 0, 15, 0, 0.5 * Math.PI);
        crc2.arc(0, head, (1 / 2) * 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // let bird: Path2D = new Path2D();
        // bird.arc(_position.x, _position.y, radiusBird, 0, 2 * Math.PI);
        // let wing: number = 0 - radiusBird;
        // bird.arc(wing, 0, radiusBird, 0, 0.5 * Math.PI);
        // crc2.stroke(bird);
        // let head: number = 0 - radiusBird;
        // bird.arc(0, head, (1 / 2) * radiusBird, 0, 2 * Math.PI);
        // crc2.save();
        // crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < nBirds; drawn++) {
            let colorAngle = 120 - Math.random() * 290;
            let color = "HSLA(" + colorAngle + ", 90%, 50%, 1)";
            crc2.fillStyle = color;
            crc2.save();
            let x = Math.random() * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill();
            crc2.restore();
        }
        crc2.restore();
    }
    Endabgabe_copy.drawBirdsInTree = drawBirdsInTree;
    console.log("Background, Mountains, Sun, Cloud, Tree, Birdhouse and Snowman created.");
    function drawSlingshotWoodenPart(_position) {
        crc2.beginPath();
        crc2.fillStyle = "HSL(30, 80%, 30%)";
        crc2.fillRect(_position.x, _position.y, 10, 50);
        crc2.stroke();
        crc2.save();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y); // Ecke oben an Stiel
        crc2.lineTo(_position.x, _position.y + 15); // Ecke unten an Stiel
        crc2.lineTo(_position.x - 40, _position.y - 30);
        crc2.lineTo(_position.x - 30, _position.y - 30);
        crc2.fillStyle = "HSL(30, 80%, 30%)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x + 10, _position.y); // Ecke oben an Stiel
        crc2.lineTo(_position.x + 10, _position.y + 15); // Ecke unten an Stiel
        crc2.lineTo(_position.x + 50, _position.y - 30);
        crc2.lineTo(_position.x + 40, _position.y - 30);
        crc2.fillStyle = "HSL(30, 80%, 30%)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_position.x + 10, _position.y);
        crc2.lineTo(_position.x + 10, _position.y + 15);
        crc2.fillStyle = "HSL(30, 80%, 30%)";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    Endabgabe_copy.drawSlingshotWoodenPart = drawSlingshotWoodenPart;
    function updateScore() {
        crc2.beginPath();
        crc2.fillStyle = "darkred";
        crc2.fillRect(630, 564, 170, 30);
        crc2.font = "20px Arial";
        crc2.fillStyle = "white";
        crc2.fillText("score: ", 640, 585);
        crc2.fillText("" + highscore, 703, 586);
    }
    Endabgabe_copy.updateScore = updateScore;
})(Endabgabe_copy || (Endabgabe_copy = {}));
//# sourceMappingURL=background.js.map