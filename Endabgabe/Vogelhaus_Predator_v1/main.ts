namespace Endabgabe {
    export interface VectorBack {
        x: number;
        y: number;
    }

    let url: string = "https://zero-x.herokuapp.com/";
    console.log(url);

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    export let moveables: Moveable[] = [];
    // let luredBirds: Moveable[] = [];

    export let flyingSlingshot: boolean = false;
    console.log("Slingshot is flying: " + flyingSlingshot);

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
        drawBirdsInTree({ x: 510, y: 400 }, { x: 180, y: 120 });
        drawSlingshotWoodenPart({ x: canvas.width - 55, y: canvas.height + 70 });

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        drawBirds(15);
        drawSnowflakes(150);
        drawPartyBird(1);
        drawSlingshot();
        canvas.addEventListener("click", useSlingshot);
        canvas.addEventListener("auxclick", throwFood); // dblclick unhandlich, also auxclick

        window.setInterval(update, 20, background); // triggert alle 20ms die update-Funktion für den Hintergrund & neue Position der animierten Elemente
    }

    function drawBirds(nBirds: number): void {
        console.log("(Hotdog) birds.");

        for (let i: number = 0; i < nBirds; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);
        }
    }

    function drawSnowflakes(nSnowflakes: number): void {
        console.log("Snowflakes.");

        for (let i: number = 0; i < nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();
            moveables.push(snowflake);
        }
    }

    function drawPartyBird(nBirds: number): void {
        console.log("Party Bird.");
        for (let i: number = 0; i < nBirds; i++) {
            let partyBird: PartyBird = new PartyBird();
            moveables.push(partyBird);
        }
    }

    export function changeDirection(): void {
        for (let moveable of moveables) {
            if (moveable instanceof Bird && moveable.isLured) {
                if (Math.random() * 5 < 0.07) {
                    moveable.velocity = new Vector(2, 3);
                }
            }
        }
    }

    export function deleteBird(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i].isHit) {
                moveables.splice(i, 1);
                console.log("Bird was hit and killed!");
            }
        }
    }

    // export function drawTarget(_mousePosition: Vector): void {
    //     crc2.beginPath();
    //     crc2.moveTo(_mousePosition.x + 10, _mousePosition.y - 5);
    //     crc2.moveTo(_mousePosition.x + 10, _mousePosition.y + 5);
    //     crc2.moveTo(_mousePosition.x + 20, _mousePosition.y - 5);
    //     crc2.moveTo(_mousePosition.x + 20, _mousePosition.y + 5);
    // }

    function drawSlingshot(): void {
        //console.log("Slingshot.");
        let slingShot: Slingshot = new Slingshot();
        moveables.push(slingShot);
    }


    function useSlingshot(_event: MouseEvent): void {
        console.log("Slingshot used.");
        let _mousePosition: Vector = new Vector(_event.screenX, _event.screenY);
        for (let moveable of moveables) {
            if (moveable instanceof Slingshot) {
                // console.log("Slingshot started.");
                moveable.targetBird(_mousePosition);
            }
        }
    }

    export function deleteSlingshot(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Slingshot) {
                moveables.splice(i, 1);
                // console.log("Sling was deleted.");
                flyingSlingshot = false;
            }
        }
        drawSlingshot();
    }

    function throwFood(_event: MouseEvent): void {
        console.log("Food thrown.");
        //console.log(_event);
        let _mousePosition: Vector = new Vector(_event.screenX, _event.screenY);
        for (let moveable of moveables) {
            if (moveable instanceof Bird && moveable.isLured) {
                //console.log(moveable.position);
                moveable.getFood(_mousePosition);
            }
        }
        let food: Food = new Food(_mousePosition);
        moveables.push(food);

        setTimeout(deleteFood, 3000);
    }

    function deleteFood(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Food) {
                moveables.splice(i, 1);
                console.log("All the food was eaten.");
            }
        }
    }

    // update Background & Animation
    function update(_background: ImageData): void {
        //console.log("updated");
        crc2.putImageData(_background, 0, 0);

        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();          
        }

        for (let moveable of moveables) {
            if (moveable instanceof Bird && moveable.isLured) {
                moveable.eatFood();
            }
            if (moveable instanceof Slingshot) {
                moveable.reachedTarget();
            }
            if (moveable instanceof Bird && moveable.isHit) {
                deleteBird();
            }
            if (moveable instanceof PartyBird && moveable.isHit) {
                deleteBird();
            }
        }

    //     for (let moveable of moveables) {
    //         if (moveable instanceof Slingshot) {
    //             moveable.reachedTarget();
    //         }
    //     }

    //     for (let moveable of moveables) {
    //         if (moveable instanceof Bird && moveable.isHit) {
    //             deleteBird();
    //         }
    //     }
    }
}
