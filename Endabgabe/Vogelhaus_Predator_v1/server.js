"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let highscoreList;
    let databaseUrl;
    let dbName = "birdhouse";
    let dbCollection = "highscoreList";
    databaseUrl = "mongodb+srv://zero-x:Inverted456@cluster0-ldpu0.mongodb.net/test?retryWrites=true&w=majority";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    console.log("Server starting on port: " + port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscoreList = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database connection ", highscoreList != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.query["command"] == "retrieve") {
                let report = await retrieveHighscore();
                if (report == "We encountered technical problems. Please try again later.")
                    _response.write(report);
                else
                    _response.write(JSON.stringify(report));
            }
            else {
                console.log("URL-Query: ", url.query);
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                highscoreList.insert(url.query);
                console.log(jsonString);
            }
        }
        _response.end();
    }
    async function retrieveHighscore() {
        let cursor = await highscoreList.find();
        let answer = await cursor.toArray();
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else {
            return "We encountered technical problems. Please try again later.";
        }
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
// import * as Http from "http";
// import * as Url from "url";
// export namespace L06_CocktailBar {
//     let server: Http.Server = Http.createServer();
//     console.log(server);
//     let port: number | string | undefined = process.env.PORT;
//     if (port == undefined)
//         port = 5001;
//     console.log("Server starting on port: " + port);
//     server.listen(port);
//     server.addListener("request", handleRequest);
//     function handleRequest(_request: Http.IncomingMessage /*Infos zur eingegangenen Request*/, _response: Http.ServerResponse /*Informationen für Antwort sammeln*/): void {
//         console.log("What's up?");
//         _response.setHeader("content-type", "text/html; charset-utf-8");
//         _response.setHeader("Access-Control-Allow-Origin", "*");
//         if (_request.url) {
//             let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
//             for (let key in url.query) {
//                 _response.write(key + ":" + url.query[key] + "</br>"); //HTML muss nicht statisch vorliegen, sondern kann durch Request & Response erstellt werden
//             }
//             let jsonString: string = JSON.stringify(url.query);
//             _response.write(jsonString); // Json String kann zurückgeschickt werden und mit parse zerlegt werden
//         }
//         _response.write("This is my response.");
//         _response.end(); // Antwort muss beendet werden, damit Browser nicht endlos weiterläuft
//     }
// }
//# sourceMappingURL=Server.js.map