"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url = "https://zero-x.herokuapp.com/";
    console.log(url);
    window.addEventListener("load", handleLoad);
    Endabgabe.golden = 0.62;
    let moveables = [];
    // let luredBirds: Moveable[] = [];
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
        drawSnowflakes(150);
        drawPartyBird(1);
        drawSlingshot();
        // drawSlingshotWoodenPart();
        canvas.addEventListener("click", useSlingshot);
        canvas.addEventListener("auxclick", throwFood); // dblclick unhandlich, also auxclick
        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }
    function drawBirds(nBirds) {
        console.log("(Hotdog) birds.");
        for (let i = 0; i < nBirds; i++) {
            let bird = new Endabgabe.Bird();
            moveables.push(bird);
        }
    }
    function drawSnowflakes(nSnowflakes) {
        console.log("Snowflakes.");
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new Endabgabe.Snowflake();
            moveables.push(snowflake);
        }
    }
    function drawPartyBird(nBirds) {
        console.log("Party Bird.");
        for (let i = 0; i < nBirds; i++) {
            let partyBird = new Endabgabe.PartyBird();
            moveables.push(partyBird);
        }
    }
    function drawSlingshot() {
        console.log("Slingshot.");
        let slingShot = new Endabgabe.Slingshot();
        moveables.push(slingShot);
    }
    function useSlingshot(_event) {
        console.log("Slingshot used.");
        let _mousePosition = new Endabgabe.Vector(_event.screenX, _event.screenY);
        for (let moveable of moveables) {
            if (moveable instanceof Endabgabe.Slingshot) {
                // console.log("Slingshot started.");
                moveable.targetBird(_mousePosition);
            }
        }
    }
    function deleteSlingshot() {
        for (let i = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Endabgabe.Slingshot) {
                moveables.splice(i, 1);
                // console.log("Sling was deleted.");
            }
        }
        drawSlingshot();
    }
    Endabgabe.deleteSlingshot = deleteSlingshot;
    function throwFood(_event) {
        console.log("Food thrown.");
        //console.log(_event);
        let _mousePosition = new Endabgabe.Vector(_event.screenX, _event.screenY);
        for (let moveable of moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                //console.log(moveable.position);
                moveable.getFood(_mousePosition);
            }
        }
        let food = new Endabgabe.Food(_mousePosition);
        moveables.push(food);
        setTimeout(deleteFood, 5000);
    }
    function deleteFood() {
        for (let i = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Endabgabe.Food) {
                moveables.splice(i, 1);
                console.log("All the food was eaten.");
            }
        }
    }
    function changeDirection() {
        for (let moveable of moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                if (Math.random() * 5 < 0.07) {
                    moveable.velocity = new Endabgabe.Vector(2, 3);
                }
            }
        }
    }
    Endabgabe.changeDirection = changeDirection;
    // update Background & Animation
    function update(_background) {
        //console.log("updated");
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
        for (let moveable of moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                moveable.eatFood();
            }
        }
        for (let moveable of moveables) {
            if (moveable instanceof Endabgabe.Slingshot) {
                moveable.reachedTarget();
            }
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map