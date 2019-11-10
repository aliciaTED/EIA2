 namespace L04_CocktailBar {
 
    export function generateContent(_data: Data): void { // _ bedeutet, dass die Information von außen kommt
        // um Data aus der anderen Datei zu erkennen, benötigt man neues Schlüsselwort "export" (in dem Fall bei Interface Data angelegt)
        // >> export funktioniert nur für TypeScript, nicht für JavaScript! --> Skript muss in HTML verlinkt werden
        console.log(_data);
        
        for (let category in _data) { // for... of = über assoziatives Array iterieren ergibt Wert; for... in = Schlüsselwort 
            //console.log(category);
            let items: Item = _data[category];

            switch (category) {
                case "Drink":
                    let group: HTMLSelectElement = createSelect(items);
                    break;
                case "Container":
                    let group: HTMLDivElement = createSingle(items);
                    break;
                case "Extras":
                    let group: HTMLDivElement = createSingle(items);
                    break;
            
                default:
                    break;
            }
        }
    }
}