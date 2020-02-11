"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    Endabgabe.golden = 0.62;
    Endabgabe.highscore = 0;
    let url = "https://zero-x.herokuapp.com/";
    Endabgabe.moveables = [];
    Endabgabe.scoreBird = [];
    // console.log("Your Highscore: " + highscore);
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
        Endabgabe.drawBirdsInTree({ x: 530 + Math.random() * 100, y: 200 + Math.random() * 100 }, { x: 180, y: 120 });
        let background = Endabgabe.crc2.getImageData(0, 0, 800, 600);
        drawBirds(17);
        drawSnowflakes(150);
        drawPartyBird(3);
        drawSlingshot();
        canvas.addEventListener("click", useSlingshot);
        canvas.addEventListener("auxclick", throwFood); // dblclick unhandlich, also auxclick
        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
        setTimeout(endGame, 500);
    }
    function drawSnowflakes(nSnowflakes) {
        console.log("Snowflakes.");
        for (let i = 0; i < nSnowflakes; i++) {
            let snowflake = new Endabgabe.Snowflake();
            Endabgabe.moveables.push(snowflake);
        }
    }
    function drawBirds(nBirds) {
        console.log("(Hotdog) birds.");
        for (let i = 0; i < nBirds; i++) {
            let bird = new Endabgabe.Bird();
            Endabgabe.moveables.push(bird);
        }
    }
    function drawPartyBird(nBirds) {
        console.log("Party Bird.");
        for (let i = 0; i < nBirds; i++) {
            let partyBird = new Endabgabe.PartyBird();
            Endabgabe.moveables.push(partyBird);
        }
    }
    function deleteBird() {
        for (let i = 0; i < Endabgabe.moveables.length; i++) {
            let bird = Endabgabe.moveables[i]; // typecast von Moveables zu Bird/PartyBird
            let partyBird = Endabgabe.moveables[i];
            if (bird.isHit) {
                if (bird.isLured) {
                    bird.score = 10;
                    Endabgabe.highscore += bird.score;
                    bird.showScore();
                    console.log("Your Highscore: " + Endabgabe.highscore);
                }
                if (partyBird.isPartyBird) {
                    bird.score = 50;
                    Endabgabe.highscore += partyBird.score;
                    partyBird.showScore();
                    console.log("Your Highscore: " + Endabgabe.highscore);
                }
                if (!bird.isLured && !partyBird.isPartyBird) {
                    bird.score = 20;
                    Endabgabe.highscore += bird.score;
                    bird.showScore();
                    console.log("Your Highscore: " + Endabgabe.highscore);
                }
                Endabgabe.moveables.splice(i, 1);
                console.log("Bird was hit and killed!");
            }
        }
    }
    Endabgabe.deleteBird = deleteBird;
    function drawSlingshot() {
        let slingShot = new Endabgabe.Slingshot();
        Endabgabe.moveables.push(slingShot);
    }
    function useSlingshot(_event) {
        console.log("Slingshot used.");
        let _mousePosition = new Endabgabe.Vector(_event.clientX, _event.clientY);
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Slingshot) {
                // console.log("Slingshot started.");
                moveable.targetBird(_mousePosition);
            }
        }
    }
    function throwFood(_event) {
        console.log("Food thrown.");
        //console.log(_event);
        if (_event.clientY > Endabgabe.crc2.canvas.height * Endabgabe.golden && Endabgabe.highscore >= 5) {
            let _mousePosition = new Endabgabe.Vector(_event.clientX, _event.clientY);
            for (let moveable of Endabgabe.moveables) {
                if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                    //console.log(moveable.position);
                    moveable.getFood(_mousePosition);
                }
            }
            let food = new Endabgabe.Food(_mousePosition);
            Endabgabe.moveables.push(food);
            Endabgabe.highscore -= 5;
            setTimeout(deleteFood, 3500);
        }
    }
    function deleteFood() {
        for (let i = 0; i < Endabgabe.moveables.length; i++) {
            if (Endabgabe.moveables[i] instanceof Endabgabe.Food) {
                Endabgabe.moveables.splice(i, 1);
                console.log("All the food was eaten.");
            }
        }
    }
    function drawScores() {
        for (let i = 0; i < Endabgabe.scoreBird.length; i++) {
            let score = Endabgabe.scoreBird[i];
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.font = "20px Arial";
            Endabgabe.crc2.fillStyle = "darkred";
            Endabgabe.crc2.fillText("+ " + score.score, score.x, score.y);
            Endabgabe.crc2.closePath();
            score.timer++;
            if (score.timer > 20) {
                Endabgabe.scoreBird.splice(i, 1);
            }
        }
    }
    function endGame() {
        console.log("Game over.");
        let userName = prompt("Time's up! \n Your Score: " + Endabgabe.highscore + "\n Please enter your name here. Press okay to play again.");
        if (userName != null) {
            sendEntryToList(userName, Endabgabe.highscore);
            alert("Your Name and score were added. Press okay to start another game of HIT THE BIRDS.");
        }
    }
    async function sendEntryToList(_userName, _highscore) {
        console.log("Entry sent.");
        let query = "name=" + _userName + "&highScore=" + _highscore; // Variable für Werte, die gespeichert werden sollen
        await fetch(url + "?" + query); // Variablen in Response einfügen und darauf warten)
        window.open("https://aliciaTED.github.io/EIA2/Endabgabe/Vogelhaus_Predator_v1/startIndex.html", "_self");
    }
    function update(_background) {
        // Update der Moveables & des Hintergrunds
        Endabgabe.crc2.putImageData(_background, 0, 0);
        for (let moveable of Endabgabe.moveables) {
            moveable.move();
            moveable.draw();
        }
        //Bird hit at target?
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Slingshot) {
                moveable.reachedTarget();
            }
        }
        //Bird at food?
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isLured) {
                moveable.eatFood();
            }
        }
        //Bird hit >> delete!
        for (let moveable of Endabgabe.moveables) {
            if (moveable instanceof Endabgabe.Bird && moveable.isHit) {
                deleteBird();
            }
            if (moveable instanceof Endabgabe.PartyBird && moveable.isHit) {
                deleteBird();
            }
        }
        drawScores();
        Endabgabe.updateScore();
        Endabgabe.drawSlingshotWoodenPart({ x: Endabgabe.crc2.canvas.width - 55, y: Endabgabe.crc2.canvas.height - 50 });
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map