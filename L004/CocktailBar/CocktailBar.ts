namespace L04_CocktailBar { // anderer Namensraum, um Konflikte zu vermeiden
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");

        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        displayOrder();
    }

    function handleChange(_event: Event): void { //nicht mit Elementen arbeiten, da ganzes Formular wichtig ist
        //console.log(_event);
        displayOrder();

        }

    function displayOrder(): void {
        let totalPrice: number = 0; //Angabe zum Gesamtpreis

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = ""; // Order-Feld erstellen & löschen (leeren String zuweisen)

        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form")); // bei formData: FormData auf Groß- und Kleinschreibung achten! Bzw. generell an Coding Style halten!!!
        
        console.group("Order"); // Einträge in Konsole werden innerhalb einer Gruppe geschrieben (etwas eingerückt) und mit einem ("Label") benannt

        for (let entry of formData) {
            console.log(entry);
            let selector: string = "[value= '" + entry[1] + "']"; // "[name=" + entry[0] + "] [value=" + entry + "]"
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));

            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
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

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount); // aus String werden Zahlen
    }
}
