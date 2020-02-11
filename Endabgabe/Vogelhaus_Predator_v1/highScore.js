"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let url = "https://zero-x.herokuapp.com";
    function handleLoad(_event) {
        document.getElementById("highscore").addEventListener("click", showHighScoreList);
    }
    async function showHighScoreList(_event) {
        let query = "command=retrieve";
        let response = await fetch(url + "?" + query);
        let responseText = await response.text();
        let highScoreList = document.querySelector("div#highScoreList");
        // highScoreList.innerText = responseText;
        let entries = JSON.parse(responseText);
        for (let i = 0; i <= entries.length; i++) {
            // console.log(entries[1]);
            let paragraph = document.createElement("p");
            paragraph.innerText = (i + 1) + ". Platz: " + entries[i].name + ": " + entries[i].highscore + " Points";
            highScoreList.appendChild(paragraph);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=highScore.js.map