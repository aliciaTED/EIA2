namespace L06_NodeAPI {
    console.log("Hello World");

    let x: number = 0;
    console.log(x);
    x++;
    console.warn(x);

    setTimeout(handleTimeout, 2000);

    function handleTimeout(_event: Event): void {
        console.log("Timeout");
    }

    console.log(process.env.COMPUTERNAME); // env = environment
    console.log(process.env.USERNAME);
    console.log(process.env.PORT); // wichtig für später!
    console.log(process.argv); // argv = argument
    console.log("Hallo " + process.argv[2]);

    process.addListener("exit", handleExit);

    function handleExit(_event: Event): void {
        console.log("Tschüss!");
    }

}