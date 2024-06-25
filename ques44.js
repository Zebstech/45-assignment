function makeSandwich(...items) {
    console.log("\n making a Sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now Enjoy Sandwich \n");
}
makeSandwich("Chicken", "Chees", "Mayo", "Egg");
makeSandwich("Butter", "bread");
makeSandwich("Chicken", "Chees", "Mayo", "Egg", "Butter", "bread", "tomato");
export {};
