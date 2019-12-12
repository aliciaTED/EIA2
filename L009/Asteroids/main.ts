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

        createPath();
        console.log("Asteroids paths: ", asteroidPaths);
    }

    
}