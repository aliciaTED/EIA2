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
        // highScoreList.innerText = responseText;
        let entries: any[] = JSON.parse(responseText);

        for (let i: number = 0; i <= entries.length; i++) {
            // console.log(entries[1]);
            let paragraph: HTMLParagraphElement = document.createElement("p");
            paragraph.innerText = (i + 1) + ". Platz: " + entries[i].name + ": " + entries[i].highscore + " Points";
            highScoreList.appendChild(paragraph);
        }
    }
}