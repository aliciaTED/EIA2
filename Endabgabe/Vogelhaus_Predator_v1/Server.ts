import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {

    let highscoreList: Mongo.Collection;
    // let databaseURL: string;

    // let dbName: string = "birdhouse";
    // let dbCollection: string = "highscoreList";

    let databaseUrl: string = "mongodb+srv://zero-x:Inverted456@cluster0-ldpu0.mongodb.net/test?retryWrites=true&w=majority";

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscoreList = mongoClient.db("birdhouse").collection("highscoreList");
        console.log("Database connection ", highscoreList != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.query["command"] == "retrieve") {
                let report: any[] | string = await retrieveHighscore();
                if (report == "We encountered technical problems. Please try again later.")
                    _response.write(report);
                else
                    _response.write(JSON.stringify(report));
            }
            else {
                console.log("URL-Query: ", url.query);
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                highscoreList.insert(url.query);
                console.log(jsonString);
            }
        }
        _response.end();
    }

    async function retrieveHighscore(): Promise<any[] | string> {
        let cursor: Mongo.Cursor = await highscoreList.find();
        let answer: Promise<any[]> = await cursor.toArray();
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else {
            return "We encountered technical problems. Please try again later.";
        }
    }

}


