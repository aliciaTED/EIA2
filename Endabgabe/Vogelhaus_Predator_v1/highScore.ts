namespace Endabgabe {
    window.addEventListener("load", handleLoad);

    let url: string = "https://zero-x.herokuapp.com";

    function handleLoad(_event: Event): void {
        document.getElementById("highscore").addEventListener("click", showHighScoreList);
    }
    
    async function showHighScoreList(_event: Event): Promise<void> {
        let query: string = "command=retrieve";
        let response: Response = await fetch(url + "?" + query);
        let responseText: string = await response.text();

        let highScoreList: HTMLDivElement = <HTMLDivElement>document.querySelector("div#highScoreList");
        highScoreList.innerText = responseText;

    }
}