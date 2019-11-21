import * as Http from "http";
import * as Url from "url";
// import * as Url from "url";

export namespace L06_CocktailBar {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage /*Infos zur eingegangenen Request*/, _response: Http.ServerResponse /*Informationen für Antwort sammeln*/): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "</br>"); //HTML muss nicht statisch vorliegen, sondern kann durch Request & Response erstellt werden
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString); // Json String kann zurückgeschickt werden und mit parse zerlegt werden
        }

        _response.write("This is my response.");
        _response.end(); // Antwort muss beendet werden, damit Browser nicht endlos weiterläuft
    }

}