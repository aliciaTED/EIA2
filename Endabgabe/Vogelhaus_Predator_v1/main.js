"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url = "https://zero-x.herokuapp.com/";
    console.log(url);
    window.addEventListener("load", handleLoad);
    Endabgabe.golden = 0.62;
    Endabgabe.moveables = [];
    // let luredBirds: Moveable[] = [];
    Endabgabe.flyingSlingshot = false;
    console.log("Slingshot is flying: " + Endabgabe.flyingSlingshot);
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
        Endabgabe.drawSlingshotWoodenPart({ x: canvas.width - 55, y: canvas.height + 70 });
        let background = Endabgabe.crc2.getImageData(0, 0, 800, 600);
        drawBirds(15);
        drawSnowflakes(150);
        drawPartyBird(1);
        drawSlingshot();
        canvas.addEventListener("click", useSlingshot);
        canvas.addEventListener("auxclick", throwFood); // dblclick unhandlich, also auxclick
        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }
    function drawBirds(nBirds) {
        console.log("(Hotdog) birds.");
        for (let i = 0; i < nBirds; i++) {
            let bird = new Endabgabe.Bird();
            Endabgabe.moveables.push(bird);
        }
    }
    function drawSnowflakes(nSnowflakes) {
        console.log("Snowflakes.");
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new Endabgabe.Snowflake();
            Endabgabe.moveables.push(snowflake);
        }
    }
    function drawPartyBird(nBirds) {
        console.log("Party Bird.");
        for (let i = 0; i < nBirds; i++) {
            let partyBird = new Endabgabe.PartyBird();
            Endabgabe.moveables.push(partyBird);
        }
    }
    function changeDirection() {
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                if (Math.random() * 5 < 0.07) {
                    moveable.velocity = new Endabgabe.Vector(2, 3);
                }
            }
        }
    }
    Endabgabe.changeDirection = changeDirection;
    function deleteBird() {
        for (let i = 0; i < Endabgabe.moveables.length; i++) {
            if (Endabgabe.moveables[i].isHit) {
                Endabgabe.moveables.splice(i, 1);
                console.log("Bird was hit and killed!");
                // console.log("Bird was hit.");
            }
        }
    }
    Endabgabe.deleteBird = deleteBird;
    // export function drawTarget(_mousePosition: Vector): void {
    //     crc2.beginPath();
    //     crc2.moveTo(_mousePosition.x + 10, _mousePosition.y - 5);
    //     crc2.moveTo(_mousePosition.x + 10, _mousePosition.y + 5);
    //     crc2.moveTo(_mousePosition.x + 20, _mousePosition.y - 5);
    //     crc2.moveTo(_mousePosition.x + 20, _mousePosition.y + 5);
    // }
    function drawSlingshot() {
        //console.log("Slingshot.");
        let slingShot = new Endabgabe.Slingshot();
        Endabgabe.moveables.push(slingShot);
    }
    function useSlingshot(_event) {
        console.log("Slingshot used.");
        let _mousePosition = new Endabgabe.Vector(_event.screenX, _event.screenY);
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Slingshot) {
                // console.log("Slingshot started.");
                moveable.targetBird(_mousePosition);
            }
        }
    }
    function deleteSlingshot() {
        for (let i = 0; i < Endabgabe.moveables.length; i++) {
            if (Endabgabe.moveables[i] instanceof Endabgabe.Slingshot) {
                Endabgabe.moveables.splice(i, 1);
                // console.log("Sling was deleted.");
                Endabgabe.flyingSlingshot = false;
            }
        }
        drawSlingshot();
    }
    Endabgabe.deleteSlingshot = deleteSlingshot;
    function throwFood(_event) {
        console.log("Food thrown.");
        //console.log(_event);
        let _mousePosition = new Endabgabe.Vector(_event.screenX, _event.screenY);
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                //console.log(moveable.position);
                moveable.getFood(_mousePosition);
            }
        }
        let food = new Endabgabe.Food(_mousePosition);
        Endabgabe.moveables.push(food);
        setTimeout(deleteFood, 3000);
    }
    function deleteFood() {
        for (let i = 0; i < Endabgabe.moveables.length; i++) {
            if (Endabgabe.moveables[i] instanceof Endabgabe.Food) {
                Endabgabe.moveables.splice(i, 1);
                console.log("All the food was eaten.");
            }
        }
    }
    // update Background & Animation
    function update(_background) {
        //console.log("updated");
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let moveable of Endabgabe.moveables) {
            moveable.move();
            moveable.draw();
        }
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                moveable.eatFood();
            }
        }
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Slingshot) {
                moveable.reachedTarget();
            }
        }
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isHit) {
                deleteBird();
            }
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map