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

    let moveables: Moveable[] = [];

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

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        drawBirds(15);
        drawSnowflakes(150);
        drawPartyBird(1);
        canvas.addEventListener("click", throwSnowball);
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

    function throwSnowball(_event: MouseEvent): void {
        console.log("Snowball thrown.");
    }

    function throwFood(_event: MouseEvent): void {
        console.log("Food thrown.");
        //console.log(_event);
        let _mousePosition: Vector = new Vector(_event.screenX, _event.screenY);
        for (let moveable of moveables) {
            if (moveable instanceof Bird)
                if (moveable.isLured) {
                    //console.log(moveable.position);
                    moveable.eatFood(_mousePosition);
                }
        }
    }

    // update Background & Animation

    function update(_background: ImageData): void {
        //console.log("updated");
        crc2.putImageData(_background, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1);
            moveable.draw();
        }
    }
}
