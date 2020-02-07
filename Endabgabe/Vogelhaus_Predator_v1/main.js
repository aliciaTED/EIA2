"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url = "https://zero-x.herokuapp.com/";
    console.log(url);
    window.addEventListener("load", handleLoad);
    Endabgabe.golden = 0.62;
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Endabgabe.crc2 = canvas.getContext("2d");
        Endabgabe.drawBackground();
        Endabgabe.drawSun({ x: 100, y: 75 });
        Endabgabe.drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        Endabgabe.drawMountains({ x: 0, y: Endabgabe.crc2.canvas.height * Endabgabe.golden }, 75, 200, "white", "grey");
        Endabgabe.drawMountains({ x: 0, y: Endabgabe.crc2.canvas.height * Endabgabe.golden }, 50, 150, "lightgrey", "grey");
        Endabgabe.drawTree();
        Endabgabe.drawSnowman({ x: 400, y: 500 });
        Endabgabe.drawBirdhouse();
        Endabgabe.drawBirdsInTree({ x: 510, y: 400 }, { x: 180, y: 120 });
        let background = Endabgabe.crc2.getImageData(0, 0, 800, 600);
        drawBirds(15);
        // drawSittingBirds(7);
        drawSnowflakes(111);
        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }
    function drawBirds(nBirds) {
        console.log("(Hotdog) birds.");
        for (let i = 0; i < nBirds; i++) {
            let bird = new Endabgabe.Bird();
            moveables.push(bird);
        }
        // 
    }
    // function drawSittingBirds(nBirds: number): void {
    //     for (let i: number = 0; i < nBirds; i++) {
    //         let sittingBird: SittingBird = new SittingBird();
    //         moveables.push(sittingBird);
    //     }
    // }
    function drawSnowflakes(nSnowflakes) {
        console.log("Schneeflocken");
        //let nSnowflakes: number = 111;
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new Endabgabe.Snowflake();
            moveables.push(snowflake);
        }
    }
    // update Background & Animation
    function update(_background) {
        console.log("updated");
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1);
            moveable.draw();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map