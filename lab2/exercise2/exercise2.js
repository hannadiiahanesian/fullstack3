const greeter = (myArray) => {
    let greetText = "Hello";

    for (var name of myArray) {
        console.log(`${greetText} ${name} `);
    }
}
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);