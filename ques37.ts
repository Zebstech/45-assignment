function make_shirt (size: string  = "Large", printMessage: string = "I Love TypeScript" ){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}
make_shirt();

make_shirt("medium");

make_shirt("Small", "I Love JavaScript");