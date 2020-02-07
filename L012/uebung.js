"use strict";
var L12_Uebung;
(function (L12_Uebung) {
    try {
        let greets = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
        let input = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
        let greet = greets[Number(input)].greet;
        alert(greet);
    }
    catch (_error) {
        alert("Tschüss!");
        console.log(_error);
    }
    console.log("Done");
})(L12_Uebung || (L12_Uebung = {}));
//# sourceMappingURL=uebung.js.map