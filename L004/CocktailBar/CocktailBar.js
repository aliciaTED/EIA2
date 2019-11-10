"use strict";
var L04_CocktailBar;
(function (L04_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        L04_CocktailBar.generateContent(L04_CocktailBar.data);
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        displayOrder();
    }
    function handleChange(_event) {
        //console.log(_event);
        displayOrder();
    }
    function displayOrder() {
        let totalPrice = 0; //Angabe zum Gesamtpreis
        let order = document.querySelector("div#order");
        order.innerHTML = ""; // Order-Feld erstellen & löschen (leeren String zuweisen)
        let formData = new FormData(document.querySelector("form")); // bei formData: FormData auf Groß- und Kleinschreibung achten! Bzw. generell an Coding Style halten!!!
        console.group("Order"); // Einträge in Konsole werden innerhalb einer Gruppe geschrieben (etwas eingerückt) und mit einem ("Label") benannt
        for (let entry of formData) {
            console.log(entry);
            let selector = "[value= '" + entry[1] + "']"; // "[name=" + entry[0] + "] [value=" + entry + "]"
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + " : €" + itemPrice + "</br>";
                    break;
                default:
                    order.innerHTML += item.value + ":  €" + itemPrice.toFixed(2) /* bestimmte Anzahl nach Komma der Dezimalzahl anzeigen */ + "<br>";
            }
            //console.log(item);
            totalPrice += itemPrice;
        }
        console.groupEnd();
        order.innerHTML += "<p><strong>Total:    €" + totalPrice.toFixed(2);
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount); // aus String werden Zahlen
    }
})(L04_CocktailBar || (L04_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map