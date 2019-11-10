namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void { //nicht mit Elementen arbeiten, da ganzes Formular wichtig ist
        //console.log(_event);

        // MÖGLICHKEIT EINS: auf Drinks direkt zugreifen
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);
        // Problem: mit unbekannten Elementen im Formular kann nicht umgegangen werden

        // MÖGLICHKEIT ZWEI: Liste alle Input-Elemente erstellen >> Problem: viel spezieller Code nötig zur Unterscheidung der Form-Elemente
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = ""; // Order-Feld erstellen & löschen (leeren String zuweisen)

        // MÖGLICHKEIT DREI: Form-Data. 
        let formData: FormData = new FormData(document.forms[0]); // bei formData: FormData auf Groß- und Kleinschreibung achten! Bzw. generell an Coding Style halten!!!
        for (let entry of formData) { //Element, das an Objekt gespeichert ist, geliefert bekommen
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + "  € " + price;

        }
    }

//    let totalSum: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector(p#totalSum);

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount); // aus String werden Zahlen
    }
}
