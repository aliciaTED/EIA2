namespace Endabgabe {
    export interface VectorBack {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let highscore: number = 0;

    let url: string = "https://zero-x.herokuapp.com/";

    export let moveables: Moveable[] = [];
    export let scoreBird: Score[] = [];

    // console.log("Your Highscore: " + highscore);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 75, 200, "white", "grey");
        drawMountains({ x: 0, y: crc2.canvas.height * golden }, 50, 150, "lightgrey", "grey");
        drawTree();
        drawSnowman({ x: 400, y: 500 });
        drawBirdhouse();
        drawBirdsInTree({ x: 530 + Math.random() * 100, y: 200 + Math.random() * 100 }, { x: 180, y: 120 });

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        drawBirds(17);
        drawSnowflakes(150);
        drawPartyBird(3);
        drawSlingshot();
        canvas.addEventListener("click", useSlingshot);
        canvas.addEventListener("auxclick", throwFood); // dblclick unhandlich, also auxclick

        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
        setTimeout(endGame, 60000);
    }

    function drawSnowflakes(nSnowflakes: number): void {
        console.log("Snowflakes.");

        for (let i: number = 0; i < nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();
            moveables.push(snowflake);
        }
    }

    function drawBirds(nBirds: number): void {
        console.log("(Hotdog) birds.");

        for (let i: number = 0; i < nBirds; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);
        }
    }

    function drawPartyBird(nBirds: number): void {
        console.log("Party Bird.");
        for (let i: number = 0; i < nBirds; i++) {
            let partyBird: PartyBird = new PartyBird();
            moveables.push(partyBird);
        }
    }

    export function deleteBird(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            let bird: Bird = moveables[i] as Bird; // typecast von Moveables zu Bird/PartyBird
            let partyBird: PartyBird = moveables[i] as PartyBird;
            if (bird.isHit) {
                if (bird.isLured && bird.isFeeding) {
                    bird.score = 10;
                    highscore += bird.score;
                    bird.showScore();
                    console.log("Your Highscore: " + highscore);
                }
                if (partyBird.isPartyBird) {
                    bird.score = 50;
                    highscore += partyBird.score;
                    partyBird.showScore();
                    console.log("Your Highscore: " + highscore);
                }
                if (!bird.isFeeding && !partyBird.isPartyBird) {
                    bird.score = 20;
                    highscore += bird.score;
                    bird.showScore();
                    console.log("Your Highscore: " + highscore);
                }
                moveables.splice(i, 1);
                console.log("Bird was hit and killed!");
            }
        }
    }

    function drawSlingshot(): void {
        let slingShot: Slingshot = new Slingshot();
        moveables.push(slingShot);
    }


    function useSlingshot(_event: MouseEvent): void {
        console.log("Slingshot used.");
        let _mousePosition: Vector = new Vector(_event.clientX, _event.clientY);
        for (let moveable of moveables) {
            if (moveable instanceof Slingshot) {
                // console.log("Slingshot started.");
                moveable.targetBird(_mousePosition);
            }
        }
    }

    function throwFood(_event: MouseEvent): void {
        console.log("Food thrown.");
        //console.log(_event);
        if (_event.clientY > crc2.canvas.height * golden && highscore >= 5) {
            let _mousePosition: Vector = new Vector(_event.clientX, _event.clientY);
            for (let moveable of moveables) {
                if (moveable instanceof Bird && moveable.isLured) {
                    //console.log(moveable.position);
                    moveable.getFood(_mousePosition);
                }
            }
            let food: Food = new Food(_mousePosition);
            moveables.push(food);

            highscore -= 5;
            setTimeout(deleteFood, 3500);
        }
    }

    function deleteFood(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Food) {
                moveables.splice(i, 1);
                console.log("All the food was eaten.");
            }
        }
    }

    function drawScores(): void {
        for (let i: number = 0; i < scoreBird.length; i++) {
            let score: Score = scoreBird[i];
            crc2.beginPath();
            crc2.font = "20px Arial";
            crc2.fillStyle = "darkred";
            crc2.fillText("+ " + score.score, score.x, score.y);
            crc2.closePath();
            score.timer++;

            if (score.timer > 20) {
                scoreBird.splice(i, 1);
            }
        }
    }

    function endGame(): void {
        console.log("Game over.");
        let userName: string | null = prompt("Time's up! \n Your Score: " + highscore + "\n Please enter your name here. Press okay to play again.");
        if (userName != null) {
            sendEntryToList(userName, highscore);
            // alert("Your Name and score were added. Press okay to start another game of HIT THE BIRDS.");
        }
    }

    async function sendEntryToList(_userName: string, _highscore: number): Promise<void> { // unbedingt anschauen und verstehen!!!
        console.log("Entry sent.");
        let query: string = "name=" + _userName + "&highscore=" + _highscore; // Variable für Werte, die gespeichert werden sollen
        await fetch(url + "?" + query); // Variablen in Response einfügen und darauf warten)
        window.open("https://aliciaTED.github.io/EIA2/Endabgabe/Vogelhaus_Predator_v1/startIndex.html", "_self");
    }

    function update(_background: ImageData): void {
        // Update der Moveables & des Hintergrunds
        crc2.putImageData(_background, 0, 0);

        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();
        }

        //Bird hit at target?
        for (let moveable of moveables) {
            if (moveable instanceof Slingshot) {
                moveable.reachedTarget();
            }
        }

        //Bird at food?
        for (let moveable of moveables) {
            if (moveable instanceof Bird && moveable.isLured) {
                moveable.eatFood();
            }
        }

        //Bird hit >> delete!
        for (let moveable of moveables) {
            if (moveable instanceof Bird && moveable.isHit) {
                deleteBird();
            }
            if (moveable instanceof PartyBird && moveable.isHit) {
                deleteBird();
            }
        }
        drawScores();
        updateScore();
        drawSlingshotWoodenPart({ x: crc2.canvas.width - 55, y: crc2.canvas.height - 50 });
    }
}