"use strict";
//window.onload(getElementById("start").addEventListener("click", communicate(_url: RequestInfo)));
console.log("Start");
async function communicate(_url) {
    let response = await fetch("https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt");
    console.log("Response", response);
}
console.log("End");
//# sourceMappingURL=asynchron.js.map