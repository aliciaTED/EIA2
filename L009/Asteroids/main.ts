namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2:CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);
    
        let asteroid: Asteroid = new Asteroid(1);
        console.log(asteroid);
        for (let i: number = 0; i < 100; i++) {
        asteroid.draw();
        asteroid.move(0.1);
        }
    }
}