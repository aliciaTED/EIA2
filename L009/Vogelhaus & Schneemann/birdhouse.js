"use strict";
var L09_Canvas_Birdhouse;
(function (L09_Canvas_Birdhouse) {
    window.addEventListener("load", handleLoad);
    L09_Canvas_Birdhouse.golden = 0.62;
    let snowflakes = [];
    let birds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Canvas_Birdhouse.crc2 = canvas.getContext("2d");
        L09_Canvas_Birdhouse.drawBackground();
        L09_Canvas_Birdhouse.drawSun({ x: 100, y: 75 });
        L09_Canvas_Birdhouse.drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        L09_Canvas_Birdhouse.drawMountains({ x: 0, y: L09_Canvas_Birdhouse.crc2.canvas.height * L09_Canvas_Birdhouse.golden }, 75, 200, "white", "grey");
        L09_Canvas_Birdhouse.drawMountains({ x: 0, y: L09_Canvas_Birdhouse.crc2.canvas.height * L09_Canvas_Birdhouse.golden }, 50, 150, "lightgrey", "grey");
        L09_Canvas_Birdhouse.drawTree();
        L09_Canvas_Birdhouse.drawSnowman({ x: 400, y: 500 });
        L09_Canvas_Birdhouse.drawBirdhouse();
        let background = L09_Canvas_Birdhouse.crc2.getImageData(0, 0, 800, 600);
        // drawBirds({ x: 10, y: 500 }, { x: 500, y: 600 });
        // drawBirdsInTree({ x: 510, y: 400 }, { x: 180, y: 120 });
        drawSnowflakes(111);
        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }
    // function drawBirds(_position: Vector, _size: Vector): void {
    //     console.log("(Hotdog) birds.");
    //     let nBirds: number = 20;
    //     let radiusBird: number = 7 + Math.random() * 10;
    //     let bird: Path2D = new Path2D();
    //     bird.arc(0, 0, radiusBird, 0, 2 * Math.PI);
    //     let head: number = 0 - radiusBird;
    //     bird.arc(head, -2, (1 / 2) * radiusBird, 0, 2 * Math.PI);
    //     bird.ellipse(5, -5, (1 / 3) * radiusBird, radiusBird, 13, 0, 2 * Math.PI);
    //     // let birdEye: Path2D = new Path2D;
    //     // crc2.translate(_position.x, _position.y);
    //     // birdEye.arc(head, 5, 1.5, 0, 2 * Math.PI);
    //     // crc2.fillStyle = "black";
    //     // crc2.fill(birdEye);
    //     // crc2.stroke(birdEye);
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);
    //     for (let drawn: number = 0; drawn < nBirds; drawn++) {
    //         let colorAngle: number = 120 - Math.random() * 290;
    //         let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
    //         let scale: number = 0.7 + Math.random() * 1;
    //         crc2.fillStyle = color;
    //         crc2.save();
    //         let x: number = Math.random() * _size.x;
    //         let y: number = - (Math.random() * _size.y);
    //         crc2.translate(x, y);
    //         crc2.transform(scale, 0, 0, scale, 0, 0);
    //         crc2.fill(bird);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    // function drawBirdsInTree(_position: Vector, _size: Vector): void {
    //     console.log("Birds in Tree");
    //     let nBirds: number = 5;
    //     let radiusBird: number = 10 + Math.random() * 10;
    //     let bird: Path2D = new Path2D();
    //     bird.arc(0, 0, radiusBird, 0, 2 * Math.PI);
    //     let wing: number = 0 - radiusBird;
    //     bird.arc(wing, 0, radiusBird, 0, 0.5 * Math.PI);
    //     crc2.stroke(bird);
    //     let head: number = 0 - radiusBird;
    //     bird.arc(0, head, (1 / 2) * radiusBird, 0, 2 * Math.PI);
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);
    //     for (let drawn: number = 0; drawn < nBirds; drawn++) {
    //         let colorAngle: number = 120 - Math.random() * 290;
    //         let color: string = "HSLA(" + colorAngle + ", 90%, 50%, 0.7)";
    //         crc2.fillStyle = color;
    //         crc2.save();
    //         let x: number = Math.random() * _size.x;
    //         let y: number = - (Math.random() * _size.y);
    //         crc2.translate(x, y);
    //         crc2.fill(bird);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    function drawSnowflakes(nSnowflakes) {
        console.log("Schneeflocken");
        //let nSnowflakes: number = 111;
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new L09_Canvas_Birdhouse.Snowflake();
            snowflakes.push(snowflake);
        }
    }
    // update Background & Animation
    function update(_background) {
        console.log("updated");
        L09_Canvas_Birdhouse.crc2.putImageData(_background, 0, 0);
        for (let snowflake of snowflakes) {
            snowflake.move(1.5);
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.move(1);
            bird.draw();
        }
    }
})(L09_Canvas_Birdhouse || (L09_Canvas_Birdhouse = {}));
//# sourceMappingURL=birdhouse.js.map