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
//# sourceMappingURL=Server.js.map