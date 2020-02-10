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
        highScoreList.innerText = responseText;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=highScore.js.map