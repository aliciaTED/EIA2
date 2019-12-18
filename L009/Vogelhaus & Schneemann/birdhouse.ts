namespace L09_Canvas_Birdhouse {
    export interface VectorBack {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    
    let snowflakes: Snowflake[] = [];
    let birds: Bird[] = [];

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
       
        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

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

    function drawSnowflakes(nSnowflakes: number): void {
        console.log("Schneeflocken");
        //let nSnowflakes: number = 111;

        for (let i: number = 0; i < nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();          
            snowflakes.push(snowflake);
        }
    }

    // update Background & Animation

    function update(_background: ImageData): void {
        console.log("updated");
        crc2.putImageData(_background, 0, 0);
        
        for (let snowflake of snowflakes) {
            snowflake.move(1.5);
            snowflake.draw();
        }

        for (let bird of birds) {
            bird.move(1);
            bird.draw();
        }
    }
}