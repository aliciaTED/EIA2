"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
// import * as Url from "url";
var L06_CocktailBar;
(function (L06_CocktailBar) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request /*Infos zur eingegangenen Request*/, _response /*Informationen für Antwort sammeln*/) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "</br>"); //HTML muss nicht statisch vorliegen, sondern kann durch Request & Response erstellt werden
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString); // Json String kann zurückgeschickt werden und mit parse zerlegt werden
        }
        _response.write("This is my response.");
        _response.end(); // Antwort muss beendet werden, damit Browser nicht endlos weiterläuft
    }
})(L06_CocktailBar = exports.L06_CocktailBar || (exports.L06_CocktailBar = {}));
//# sourceMappingURL=Server.js.map