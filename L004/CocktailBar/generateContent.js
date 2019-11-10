"use strict";
var L04_CocktailBar;
(function (L04_CocktailBar) {
    function generateContent(_data) {
        // um Data aus der anderen Datei zu erkennen, benötigt man neues Schlüsselwort "export" (in dem Fall bei Interface Data angelegt)
        // >> export funktioniert nur für TypeScript, nicht für JavaScript! --> Skript muss in HTML verlinkt werden
        console.log(_data);
        for (let category in _data) { // for... of = über assoziatives Array iterieren ergibt Wert; for... in = Schlüsselwort 
            //console.log(category);
            let items = _data[category];
            switch (category) {
                case "Drink":
                    let group = createSelect(items);
                    break;
                case "Container":
                    let group = createSingle(items);
                    break;
                case "Extras":
                    let group = createSingle(items);
                    break;
                default:
                    break;
            }
        }
    }
    L04_CocktailBar.generateContent = generateContent;
})(L04_CocktailBar || (L04_CocktailBar = {}));
//# sourceMappingURL=generateContent.js.map