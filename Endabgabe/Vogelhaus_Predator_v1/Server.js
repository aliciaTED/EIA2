"use strict";
// import * as Http from "http";
// import * as Url from "url";
// import * as Mongo from "mongodb";
Object.defineProperty(exports, "__esModule", { value: true });
// export namespace Endabgabe {
//     let highscoreList: Mongo.Collection;
//     let databaseUrl: string;
//     let dbName: string = "birdhouse";
//     let dbCollection: string = "highscoreList";
//     databaseUrl = "mongodb+srv://zero-x:Inverted456@cluster0-ldpu0.mongodb.net/test?retryWrites=true&w=majority";
//     let port: number | string | undefined = process.env.PORT;
//     if (port == undefined)
//         port = 5001;
//     startServer(port);
//     console.log("Server starting on port: " + port);
//     connectToDatabase(databaseUrl);
//     function startServer(_port: number | string): void {
//         let server: Http.Server = Http.createServer();
//         server.listen(_port);
//         server.addListener("request", handleRequest);
//     }
//     async function connectToDatabase(_url: string): Promise<void> {
//         let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
//         let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
//         await mongoClient.connect();
//         highscoreList = mongoClient.db(dbName).collection(dbCollection);
//         console.log("Database connection ", highscoreList != undefined);
//     }
//     async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
//         console.log("What's up?");
//         _response.setHeader("content-type", "text/html; charset=utf-8");
//         _response.setHeader("Access-Control-Allow-Origin", "*");
//         if (_request.url) {
//             let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
//             if (url.query["command"] == "retrieve") {
//                 let report: any[] | string = await retrieveHighscore();
//                 if (report == "We encountered technical problems. Please try again later.")
//                     _response.write(report);
//                 else
//                     _response.write(JSON.stringify(report));
//             }
//             else {
//                 console.log("URL-Query: ", url.query);
//                 let jsonString: string = JSON.stringify(url.query);
//                 _response.write(jsonString);
//                 highscoreList.insert(url.query);
//                 console.log(jsonString);
//             }
//         }
//         _response.end();
//     }
//     async function retrieveHighscore(): Promise<any[] | string> {
//         let cursor: Mongo.Cursor = await highscoreList.find();
//         let answer: Promise<any[]> = await cursor.toArray();
//         console.log("DB CursorToArray", answer);
//         if (answer != null) {
//             return answer;
//         }
//         else {
//             return "We encountered technical problems. Please try again later.";
//         }
//     }
// }
const Http = require("http");
const Url = require("url");
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